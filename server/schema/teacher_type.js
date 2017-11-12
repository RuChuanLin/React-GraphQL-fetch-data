const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const TeacherType = new GraphQLObjectType({
  name: 'TeacherType',
  fields: () => ({
    id: { type: GraphQLID },
    teacherName: { type: GraphQLString },
    experience: { type: GraphQLString },
    description: { type: GraphQLString },
    avaterURI: { type: GraphQLString }
  })
});

module.exports = TeacherType;
