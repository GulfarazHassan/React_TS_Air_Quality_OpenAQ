import axios from 'axios';
import { ICity } from './types';

const formatData = (data: any): [ICity] => {
    return data.map((d: any) => {
        return {
            id: d?.date.utc + Math.random(),
            parameter: d?.parameter,
            unit: d?.unit,
            value: d?.value,
            date: d?.date.utc
        }
    })
}

export const getAirQualityData = async (
    cityOneName: string,
    cityTwoName: string,
    onSuccess: (a: [ICity], b: [ICity]) => void,
    onError: (a: string) => void,
    onLoadingChange: (a: boolean) => void
) => {
    Promise.all([
        axios.get(
            `https://api.openaq.org/v1/measurements?city=${cityOneName}&parameter=pm25&date_from=2022-11-01&date_to=2022-11-14`
        ),
        axios.get(
            `https://api.openaq.org/v1/measurements?city=${cityTwoName}&parameter=pm25&date_from=2022-11-01&date_to=2022-11-14`
        ),
    ])
        .then((data) => {
            const [cityOneResponse, cityTwoResponse] = data;
            const cityOneData = formatData(cityOneResponse?.data?.results) || [];
            const cityTwoeData = formatData(cityTwoResponse?.data?.results) || [];
            onSuccess(cityOneData, cityTwoeData);
            onError('')
        })
        .catch((e) => onError(e.message))
        .finally(() => onLoadingChange(false));
};
