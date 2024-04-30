import prisma from "./db";

const resolvers = {
  Query: {
    getUsers: async () => {
      return await prisma.user.findMany();
    },
  },

  Mutation: {
    createUser: async (_: any, { input }: any, context: any) => {
      try {
        const newUser = await prisma.user.create({
          data: input,
        });
        return newUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

export default resolvers;
