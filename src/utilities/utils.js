import moment from 'moment';

export const isIterableArray = (array) => Array.isArray(array) && !!array.length;

//===============================
// Store
//===============================
export const getItemFromStore = (key, defaultValue, store = localStorage) => JSON.parse(store.getItem(key)) || defaultValue;
export const setItemToStore = (key, payload, store = localStorage) => store.setItem(key, JSON.stringify(payload));
export const getStoreSpace = (store = localStorage) =>
  parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));

//===============================
// Cookie
//===============================
export const getCookieValue = (name) => {
  const value = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
  return value ? value.pop() : null;
};

export const createCookie = (name, value, cookieExpireTime) => {
  const date = new Date();
  date.setTime(date.getTime() + cookieExpireTime);
  const expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + value + expires + '; path=/';
};

//===============================
// Moment
//===============================
export const getDuration = (startDate, endDate) => {
  if (!moment.isMoment(startDate)) throw new Error(`Start date must be a moment object, received ${typeof startDate}`);
  if (endDate && !moment.isMoment(endDate)) throw new Error(`End date must be a moment object, received ${typeof startDate}`);

  return `${startDate.format('ll')} - ${endDate ? endDate.format('ll') : 'Present'} • ${startDate.from(endDate || moment(), true)}`;
};

export const numberFormatter = (number, fixed = 2) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(number)) >= 1.0e9
    ? (Math.abs(Number(number)) / 1.0e9).toFixed(fixed) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(number)) >= 1.0e6
    ? (Math.abs(Number(number)) / 1.0e6).toFixed(fixed) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(fixed) + 'K'
    : Math.abs(Number(number)).toFixed(fixed);
};

//===============================
// Helpers
//===============================
export const getPaginationArray = (totalSize, sizePerPage) => {
  const noOfPages = Math.ceil(totalSize / sizePerPage);
  const array = [];
  let pageNo = 1;
  while (pageNo <= noOfPages) {
    array.push(pageNo);
    pageNo = pageNo + 1;
  }
  return array;
};

export const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');
