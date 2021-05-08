import fetch from 'node-fetch';
import {Headers} from 'node-fetch';

const fetchapi = {fetch};
const storeBaseURL = process.env.BIGCOMMERCE_STORE_API_URL;

const storeHeaders = new Headers();
storeHeaders.append("X-Auth-Client", process.env.BIGCOMMERCE_STORE_API_CLIENT_ID);
storeHeaders.append("X-Auth-Token", process.env.BIGCOMMERCE_STORE_API_TOKEN);
storeHeaders.append("Accept", "application/json");
storeHeaders.append("Content-Type", "application/json");

export default async function getRequestData(req_url,method){
  console.log('in sendRequest');
  const defaultOptions = {
    baseUrl: storeBaseURL,
    requestOptions: {
          method: method,
          headers: storeHeaders
    }
  }

  const url = defaultOptions.baseUrl + req_url;
  console.log('in sendRequest url' , url);

  var getResponse = await fetch(url, defaultOptions.requestOptions);
  console.log('in sendRequest',getResponse);
  var data = getResponse.json();
  console.debug('in sendRequest',data);
  return data;
};