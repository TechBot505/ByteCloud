import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Creating a mutation for creating and storing data into Database
export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx, args) {
        const user = await ctx.auth.getUserIdentity();
        if(!user) {
            throw new ConvexError('User not found');
        }
        await ctx.db.insert('files', {
            name: args.name,
        });
    },
});

// Creating a query to fetch all the files from the Database
export const getFiles = query({
    args: {},
    async handler(ctx, args) {
        const user = await ctx.auth.getUserIdentity();
        if(!user) {
            return [];
        }
        return ctx.db.query('files').collect()
    }
})