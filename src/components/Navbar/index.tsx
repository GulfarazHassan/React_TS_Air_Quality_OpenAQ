import {Container, Menu} from 'semantic-ui-react';
const Navbar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='h3' header>
          Air Quality Assessment
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
