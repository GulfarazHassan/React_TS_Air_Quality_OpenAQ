import {ReactNode} from 'react';
import {Container} from 'semantic-ui-react';
import {Navbar, Footer} from '../components/index';

interface Props {
  children?: ReactNode;
}

const Index = ({children}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}>
      <Navbar />
      <Container style={{flex: 1, width: '100vw'}}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Index;
