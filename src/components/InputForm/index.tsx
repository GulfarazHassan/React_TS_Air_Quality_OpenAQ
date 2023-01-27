import {useState} from 'react';
import {Button, Form, Grid, Header, Segment, Icon} from 'semantic-ui-react';
import {Error} from '../index';
import {getAirQualityData} from '../../utils/fetchData';
import {ICity} from '../../utils/types';

interface Props {
  setData: (a: [ICity], b: [ICity], c: string, d: string) => void;
}

const InputForm = ({setData}: Props) => {
  const [cityOneName, setCityOneName] = useState<string>('');
  const [cityTwoName, setCityTwoName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onSuccess = (cityOneData: [ICity], cityTwoData: [ICity]): void => {
    setData(cityOneData, cityTwoData, cityOneName, cityTwoName);
  };

  const onError = (message: string) => {
    setErrorMessage(message);
  };

  const onLoadingChange = (value = false) => {
    setLoading(value);
  };

  const onFormSubmit = () => {
    if (!cityOneName || !cityTwoName) {
      setErrorMessage('City name fields must not be empty');
      return;
    }
    onLoadingChange(true);
    getAirQualityData(
      cityOneName,
      cityTwoName,
      onSuccess,
      onError,
      onLoadingChange
    );
  };
  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          Air Quality Assessment Tool
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              placeholder='Enter city one'
              label='City One Name (Example - Albany)'
              type='text'
              onChange={(e) => setCityOneName(e.target.value)}
            />
            <Form.Input
              fluid
              placeholder='Enter city two'
              label='City Two Name (Expmple - Akron)'
              type='text'
              onChange={(e) => setCityTwoName(e.target.value)}
            />

            <Button
              color='teal'
              fluid
              size='large'
              onClick={onFormSubmit}
              disabled={loading}>
              {loading ? <Icon name='circle notched' loading /> : 'Compare'}
            </Button>
          </Segment>
        </Form>
        {errorMessage && <Error message={errorMessage} />}
      </Grid.Column>
    </Grid>
  );
};

export default InputForm;
