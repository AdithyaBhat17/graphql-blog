import Post from './models/Post';

export const resolvers = {
    Query: {
        async allPosts () {
            return await Post.find();
        },
        async getPost(_root, { _id }) {
            return await Post.findById(_id);
        }
    },
    Mutation: {
        async createPost (_root, { post }) {
            return await Post.create(post);
        },
        async editPost (_root, { _id, post }) {
            return await Post.findOneAndUpdate({_id}, post, { new: true });
        },
        async deletePost (_root, { _id }) {
            return await Post.findByIdAndRemove({_id});
        }
    }
}