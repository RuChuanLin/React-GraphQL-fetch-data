const axios = require('axios');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const TeacherType = require('./teacher_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    teachers: {
      type: new GraphQLList(TeacherType),
      resolve() {
        return axios.get(`http://localhost:3000/data`).then(res => res.data);
      }
    }
    // ,
    // song: {
    //   type: SongType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parentValue, { id }) {
    //     return Song.findById(id);
    //   }
    // },
    // lyric: {
    //   type: LyricType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parnetValue, { id }) {
    //     return Lyric.findById(id);
    //   }
    // }
  })
});

module.exports = RootQuery;
