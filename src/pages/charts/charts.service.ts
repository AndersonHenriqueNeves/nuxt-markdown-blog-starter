import {CDI} from 'pages/charts/charts.interface';
import {api} from 'boot/axios';

export const getCDI = async (): Promise<CDI[]> => {
  return (await api.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4391/dados?formato=json')).data
}
