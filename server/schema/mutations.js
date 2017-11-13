const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const TeacherType = require('./teacher_type');
const axios = require('axios');

const ROOT_URL = 'http://localhost:3000/data/';

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
        domain: { type: GraphQLString },
        avaterURI: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { id, teacherName, experience, description, domain, avaterURI }
      ) {
        return axios
          .post(ROOT_URL, {
            id,
            teacherName,
            experience,
            description,
            avaterURI,
            domain
          })
          .then(res => {
            console.log(res);
            return res.data;
          });
      }
    },
    deleteTeacher: {
      type: TeacherType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return axios.delete(`${ROOT_URL}${id}`).then(res => {
          console.log(res);
          return res.data;
        });
      }
    }
  }
});

module.exports = mutation;
