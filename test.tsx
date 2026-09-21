"use client"; // Required for Next.js since we use React hooks

import React, { useEffect } from "react";
import { 
  useForm, 
  useFieldArray, 
  FormProvider, 
  useFormContext 
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ─── 1. Zod Schemas ──────────────────────────────────────────────────────────
const socialLinkSchema = z.object({
  platform: z.enum(["github", "linkedin", "twitter", "other"]),
  url: z.url({ message: "Must be a valid URL" }),
});

const personalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(3, "Min 3 characters"),
  email: z.email({ message: "Must be a valid email" }),
  country: z.string().min(1, "Country is required").optional(), // Made optional for this demo
});

const workSchema = z.object({
  employmentType: z.enum(["employed", "freelance", "student"]),
  companyName: z.string().optional(),
  openToRemote: z.boolean(),
  preferredTimezone: z.string().optional(),
});
const baseSchema = z.object({
  ...personalSchema.shape,
  ...workSchema.shape,
  socials:z.array(socialLinkSchema).min(1, "Add at least one link").max(4, "Maximum 4 links")
})

const DevsFormSchema = baseSchema.superRefine((data, ctx) => {
  if (data.employmentType === "employed" && !data.companyName?.trim()) {
    ctx.addIssue({
      code: "custom",
      message: "Company name is required when employed",
      path: ["companyName"],
    });
  }
  if (data.openToRemote && !data.preferredTimezone) {
    ctx.addIssue({
      code: "custom",
      message: "Timezone is required when open to remote",
      path: ["preferredTimezone"],
    });
  }
  
  const platforms = data.socials.map((s) => s.platform);
  const seen = new Set<string>();
  platforms.forEach((p, i) => {
    if (seen.has(p)) {
      ctx.addIssue({
        code: "custom",
        message: "Each platform can only be added once",
        path: ["socials", i, "platform"],
      });
    }
    seen.add(p);
  });
});

type DevsFormData = z.infer<typeof DevsFormSchema>;

// ─── 3. Async Validator Setup ────────────────────────────────────────────────
const TAKEN_USERNAMES = ["admin", "root"];
let debounceTimer: ReturnType<typeof setTimeout>;

const checkUsername = (value: string): Promise<true | string> =>
  new Promise((resolve) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      await new Promise((r) => setTimeout(r, 500)); // Simulate API delay
      resolve(
        TAKEN_USERNAMES.includes(value) ? "Username is already taken" : true
      );
    }, 500);
  });

// ─── 4. Sub-components ───────────────────────────────────────────────────────
type RowProps = {
  index: number;
  onRemove: (i: number) => void;
    selectedPlatforms: string[];
};
const ALL_PLATFORMS = [
  { value: "github",   label: "GitHub"   },
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter",  label: "Twitter"  },
  { value: "other",    label: "Other"    },
];
const SocialLinkRow = React.memo(({ index, onRemove ,  selectedPlatforms}: RowProps) => {
 const { register, formState: { errors }, watch } = useFormContext<DevsFormData>();
  const rowErrors = errors.socials?.[index];
const currentPlatform = watch(`socials.${index}.platform`); // this row's own value
 const availableOptions = ALL_PLATFORMS.filter(
    (p) =>
      !selectedPlatforms.includes(p.value) || // not selected anywhere
      p.value === currentPlatform             // OR it's this row's own selection
  );
  return (
    <div className="flex gap-4 mb-10">
      <div>
        <select {...register(`socials.${index}.platform` as const)}>
          <option value="">Pick platform...</option>
          {availableOptions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        {rowErrors?.platform && (
          <p className="text-red-600 m-0 font-semibold">{rowErrors.platform.message}</p>
        )}
      </div>

      <div>
        <input
          {...register(`socials.${index}.url` as const)}
          placeholder="https://..."
        />
        {rowErrors?.url && (
          <p className="text-red-600 m-0 font-semibold">{rowErrors.url.message}</p>
        )}
      </div>

      <button type="button" onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  );
});
SocialLinkRow.displayName = "SocialLinkRow";

// ─── 5. Main Component ───────────────────────────────────────────────────────
export default function DevProfileForm() {
  const methods = useForm<DevsFormData>({
    resolver: zodResolver(DevsFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      socials: [{ url: "" }],
      openToRemote: false,
      employmentType: "freelance",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = methods;

  const employmentType = watch("employmentType");
  const openToRemote   = watch("openToRemote");
  const watchedSocials = watch("socials"); // watch the whole socials array
const selectedPlatforms = watchedSocials?.map((s) => s.platform) ?? [];
  useEffect(() => {
    if (employmentType !== "employed") setValue("companyName", "");
  }, [employmentType, setValue]);

  useEffect(() => {
    if (!openToRemote) setValue("preferredTimezone", undefined);
  }, [openToRemote, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });

  const onSubmit = (data: DevsFormData) => {
    alert(JSON.stringify(data, null, 2));
    console.log("Form Submitted Successfully:", data);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Developer Profile Setup</h2>
      
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* Personal fields */}
          <div>
            <label>Name</label><br/>
            <input {...register("name")} placeholder="Full name" style={{ width: "100%" }} />
            {errors.name && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.name.message}</p>}
          </div>

          <div>
            <label>Username (Try &quot;admin&quot;)</label><br/>
            <input {...register("username", { validate: checkUsername })} placeholder="Username" style={{ width: "100%" }} />
            {errors.username && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.username.message}</p>}
          </div>

          <div>
            <label>Email</label><br/>
            <input {...register("email")} placeholder="Email" style={{ width: "100%" }} />
            {errors.email && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.email.message}</p>}
          </div>

          {/* Employment */}
          <fieldset>
            <legend>Employment Status</legend>
            <label><input type="radio" value="employed"  {...register("employmentType")} /> Employed</label>
            <label><input type="radio" value="freelance" {...register("employmentType")} /> Freelance</label>
            <label><input type="radio" value="student"   {...register("employmentType")} /> Student</label>
          </fieldset>

          {employmentType === "employed" && (
            <div>
              <input {...register("companyName")} placeholder="Company name" style={{ width: "100%" }} />
              {errors.companyName && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.companyName.message}</p>}
            </div>
          )}

          {/* Remote */}
          <div>
            <label>
              <input type="checkbox" {...register("openToRemote")} />
              Open to remote work?
            </label>
          </div>

          {openToRemote && (
            <div>
              <select {...register("preferredTimezone")} style={{ width: "100%" }}>
                <option value="">Select timezone...</option>
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </select>
              {errors.preferredTimezone && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.preferredTimezone.message}</p>}
            </div>
          )}

          {/* Social links */}
          <fieldset>
            <legend>Social Links</legend>
            {fields.map((field, index) => (
              <SocialLinkRow key={field.id} index={index} onRemove={remove} selectedPlatforms={selectedPlatforms} />
            ))}

            {fields.length < 4 && (
              <button type="button" onClick={() => append({ platform: "github", url: "" })}>
                + Add link
              </button>
            )}
            {errors.socials?.root && <p style={{ color: "red", margin: 0, fontSize: "12px" }}>{errors.socials.root.message}</p>}
          </fieldset>

          <button 
            type="submit" 
            disabled={!isDirty || !isValid || isSubmitting}
            style={{ padding: "10px", marginTop: "20px", cursor: (!isDirty || !isValid || isSubmitting) ? "not-allowed" : "pointer" }}
          >
            {isSubmitting ? "Submitting..." : "Submit Profile"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
