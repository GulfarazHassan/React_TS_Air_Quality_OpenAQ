import {Container, Segment} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{margin: '5em 0em 0em', padding: '5em 0em', width: '100vw'}}>
      <Container textAlign='center'>@2023 ALL RIGHTS RESERVED</Container>
    </Segment>
  );
};

export default Footer;
