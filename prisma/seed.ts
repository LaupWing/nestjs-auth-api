import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
   // Create users
   const hashed_password = await bcrypt.hash("password", 10)
   const user1 = await prisma.user.create({
      data: {
         username: "user1",
         email: "user1@example.com",
         password: hashed_password,
      },
   })

   const user2 = await prisma.user.create({
      data: {
         username: "user2",
         email: "user2@example.com",
         password: hashed_password,
      },
   })

   // Create APIs
   const api1 = await prisma.api.create({
      data: {
         name: "API 1",
         url: "https://api1.example.com",
      },
   })

   const api2 = await prisma.api.create({
      data: {
         name: "API 2",
         url: "https://api2.example.com",
      },
   })

   // Create user roles
   await prisma.user_Role.create({
      data: {
         user: { connect: { id: user1.id } },
         api: { connect: { id: api1.id } },
         access: "READ_ONLY",
      },
   })

   await prisma.user_Role.create({
      data: {
         user: { connect: { id: user2.id } },
         api: { connect: { id: api2.id } },
         access: "ADMIN",
      },
   })

   // Create sessions
   await prisma.session.create({
      data: {
         user: { connect: { id: user1.id } },
         token: "session_token_user1",
         expires: new Date(),
      },
   })

   await prisma.session.create({
      data: {
         user: { connect: { id: user2.id } },
         token: "session_token_user2",
         expires: new Date(),
      },
   })
}

main()
   .catch((e) => {
      throw e
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
