// sunxuan localhost URL
// const rootURL = 'http://10.68.161.157:8100';

// production URL
let prodUrl = "http://10.68.65.31:8099";
const rootURL = process.env.REACT_APP_HTTP_ENV === 'prod' ? prodUrl : 'http://10.68.65.31:8100';

export const adminLogin = rootURL + '/user/login';
export const listUrl = rootURL + '/clearance/query';
export const updateListUrl = rootURL + '/clearance/submit';

export const amazonS3 = '';
export const uploadFile = '';