const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const TeacherType = require('./teacher_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTeacher: {
      type: TeacherType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Song({ title }).save();
      }
    }
  }
});

module.exports = mutation;
