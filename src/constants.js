import * as moment from 'moment';

export const ACTION_TYPE_SET_DATA = 'SET_DATA';
export const ACTION_TYPE_SET_ACTIVE_USERS = 'SET_ACTIVE_USERS';

export const ACTION_TYPE_ADD_ACTIVE_USER = 'ADD_ACTIVE_USER';
export const ACTION_TYPE_REMOVE_ACTIVE_USER = 'REMOVE_ACTIVE_USER';

export const DATA_REDUCER_KEY = 'dataStorage';

export const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const DATA_URL =
  'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const LOCAL_STORAGE_KEY_ACTIVE_USERS = 'activeUsers';

const MONTHS_LIST = moment.months();
const CURRENT_MONTH_INDEX = moment().month();

export const MONTHS = [
  ...MONTHS_LIST.slice(CURRENT_MONTH_INDEX),
  ...MONTHS_LIST.slice(0, CURRENT_MONTH_INDEX),
];
