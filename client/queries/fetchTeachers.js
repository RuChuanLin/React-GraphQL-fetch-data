import gql from 'graphql-tag';

export default gql`
  {
    teachers {
      id
      teacherName
      experience
      description
      avaterURI
      domain
    }
  }
`;
