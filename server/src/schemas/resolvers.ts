import { User } from '../models/index.js';

interface UserArgs {
  userId: string;
}

interface AddUserArgs {
  name: string;
}

interface SkillArgs {
  userId: string;
  skill: string;
}

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_parent: any, { userId }: UserArgs) => {
      return await User.findOne({ _id:userId });
    },
  },

  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Mutation: {
    addUser: async (_parent: any, { name }: AddUserArgs) => {
      return await User.create({ name });
    },
    addSkill: async (_parent: any, {userId, skill }: SkillArgs) => {
      return await User.findOneAndUpdate(
        { _id:userId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (_parent: any, {userId }: UserArgs) => {
      return await User.findOneAndDelete({ _id:userId });
    },
    removeSkill: async (_parent: any, {userId, skill }: SkillArgs) => {
      return await User.findOneAndUpdate(
        { _id:userId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

export default resolvers;
