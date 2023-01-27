import {Divider} from 'semantic-ui-react';
import {ICity} from '../../utils/types';
import SingleTable from './SingleTable';

interface Props {
  cityOneData: Array<ICity>;
  cityTwoData: Array<ICity>;
  cityOneName: string;
  cityTwoName: string;
}

const ShowResults = ({
  cityOneData,
  cityTwoData,
  cityOneName,
  cityTwoName,
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      <SingleTable data={cityOneData} cityName={cityOneName} />
      <SingleTable data={cityTwoData} cityName={cityTwoName} />
      <Divider />
    </div>
  );
};

export default ShowResults;
