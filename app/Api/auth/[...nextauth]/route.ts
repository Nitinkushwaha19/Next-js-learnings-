import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            email: { label: "Enter your email", type: "email", placeholder: "Example@gmail.com" },
            password: { label: "Enter Password", type: "password" }
          },
          async authorize(credentials, req) {

            const email = credentials?.email;
            const password = credentials?.password;
            
            console.log(" email " + email + " " + " password : " + password);

            // Db authentication check will exist here 

            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              return null
            }
          }
        })
      ]
})

export { handler as GET, handler as POST }