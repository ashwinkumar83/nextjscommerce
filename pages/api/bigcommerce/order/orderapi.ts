import getRequestData from '../baseapi'

const fetchapi = {fetch};
const storeBaseURL = process.env.BIGCOMMERCE_STORE_API_URL;

const storeHeaders = new Headers();
storeHeaders.append("X-Auth-Client", process.env.BIGCOMMERCE_STORE_API_CLIENT_ID);
storeHeaders.append("X-Auth-Token", process.env.BIGCOMMERCE_STORE_API_TOKEN);
storeHeaders.append("Accept", "application/json");
storeHeaders.append("Content-Type", "application/json");

export default async function getOrderData(id){
  let req_url = `/v2/orders/${id}`;
  console.log('in sendRequest');
  return await getRequestData(req_url,'GET');
};