import Image from "next/image";
import {USER} from "../../lib/data/profile"
function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-2 py-6 md:py-8">
      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-soft">
        <Image
          src={USER.avatar}
          alt={`${USER.name}'s profile photo`}
          fill
          className="object-cover"
        />
      </div>
      {/* Name & email */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
          {USER.name}
        </h1>
        <p className="text-sm text-text-secondary mt-0.5">{USER.email}</p>
      </div>
    </div>
  );
}
export default ProfileHeader;