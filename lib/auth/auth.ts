// // src/lib/auth.ts
// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoClient } from "mongodb";
// import bcrypt from "bcryptjs";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // 1. Connect to your DB
//         const client = await MongoClient.connect(process.env.MONGODB_URL!);
//         const db = client.db("commerce-db");

//         // 2. Find the user by email
//         const user = await db.collection("users").findOne({ 
//           email: credentials?.email 
//         });
//         client.close();

//         if (!user) return null;

//         // 3. Compare the password
//         const isValid = await bcrypt.compare(credentials!.password, user.password);
//         if (!isValid) return null;

//         // 4. Return the user object
//         return { id: user._id.toString(), email: user.email, name: user.name };
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt"  // store session in a token, not the database
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/sign-in"  // your custom sign in page
//   }
// };