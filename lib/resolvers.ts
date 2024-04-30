import { NextResponse } from "next/server";
import prisma from "./db";

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any, context: any) => {
      console.log(input);

      console.log(context);

      try {
        const newUser = await prisma.user.create({
          data: {
            user_name: input.user_name,
            email: input.email,
            age: input.age,
          },
        });
        return newUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

export default resolvers;
