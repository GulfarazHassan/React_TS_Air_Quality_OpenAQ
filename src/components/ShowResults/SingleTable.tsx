import {Table, Message} from 'semantic-ui-react';
import moment from 'moment';
import {ICity} from '../../utils/types';

interface Props {
  data: Array<ICity>;
  cityName: string;
}

const SingleTable = ({data, cityName}: Props) => {
  return (
    <div style={{flex: 1, margin: '2rem'}}>
      <Message>
        <Message.Content>
          <Message.Header>City Name - {cityName}</Message.Header>
          Total - {data.length > 0 ? data.length : 'No Data Found'}
        </Message.Content>
      </Message>
      <div style={{maxHeight: '50rem', overflow: 'auto'}}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No#</Table.HeaderCell>
              <Table.HeaderCell>parameter</Table.HeaderCell>
              <Table.HeaderCell>unit</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((cityData, index) => (
              <Table.Row key={cityData.id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{cityData?.parameter}</Table.Cell>
                <Table.Cell>{cityData?.unit}</Table.Cell>
                <Table.Cell>{cityData?.value}</Table.Cell>
                <Table.Cell>
                  {moment(cityData?.date).format('M/D/Y')}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default SingleTable;
