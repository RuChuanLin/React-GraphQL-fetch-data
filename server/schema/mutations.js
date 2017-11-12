const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const TeacherType = require('./teacher_type');
const axios = require('axios');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTeacher: {
      type: TeacherType,
      args: {
        id: { type: GraphQLID },
        teacherName: { type: GraphQLString },
        experience: { type: GraphQLString },
        description: { type: GraphQLString },
        avaterURI: { type: GraphQLString }
      },
      resolve(parentValue, { id, teacherName, experience, description, avaterURI }) {
        return axios.post(`http://localhost:3000/data`, { id, teacherName, experience, description, avaterURI })
          .then(res => res.data)
      }
    }
  }
});

module.exports = mutation;
