import {useState} from 'react';
import {Divider} from 'semantic-ui-react';
import {InputForm, ShowResults} from '../../components';
import {ICity} from '../../utils/types';

const Home = () => {
  const [cityOneData, setCityOneData] = useState<Array<ICity>>([]);
  const [cityTwoData, setCityTwoData] = useState<Array<ICity>>([]);
  const [cityOneName, setCityOneName] = useState<string>('');
  const [cityTwoname, setCityTwoName] = useState<string>('');
  const [showData, setSHowData] = useState<boolean>(false);

  const setData = (
    cityOneD: [ICity],
    cityTwoD: [ICity],
    cityOneN: string,
    cityTwoN: string
  ) => {
    setCityOneData(cityOneD);
    setCityTwoData(cityTwoD);
    setCityOneName(cityOneN);
    setCityTwoName(cityTwoN);
    setSHowData(true);
  };

  return (
    <div style={{marginTop: '7rem'}}>
      <InputForm setData={setData} />
      <Divider />
      {showData && (
        <ShowResults
          cityOneData={cityOneData}
          cityTwoData={cityTwoData}
          cityOneName={cityOneName}
          cityTwoName={cityTwoname}
        />
      )}
    </div>
  );
};

export default Home;
