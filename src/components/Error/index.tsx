import {Message} from 'semantic-ui-react';

interface Props {
  message: string;
}

const Error = ({message}: Props) => {
  return (
    <Message negative>
      <Message.Header>Error</Message.Header>
      <p>{message}</p>
    </Message>
  );
};

export default Error;
