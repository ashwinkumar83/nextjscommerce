import type {
    GetStaticPathsContext,
    GetStaticPropsContext,
    InferGetStaticPropsType,
  } from 'next'
  import { Text } from '@components/ui'
  import { Layout } from '@components/common'
  import getSlug from '@lib/get-slug'
  import { missingLocaleInPages } from '@lib/usage-warns'
  import { getConfig } from '@framework/api'
  import getPage from '@framework/common/get-page'
  import getAllPages from '@framework/common/get-all-pages'
  import { defaultPageProps } from '@lib/defaults'
  import { useRouter } from 'next/router'
  import { GetServerSideProps } from 'next'
  import getOrderData from '../api/bigcommerce/order/orderapi'
  import { OrderConfirmView } from '@components/order/OrderConfirmView'

  export async function getServerSideProps(context) {
    // Fetch data from external API
    const orderData = context.params;
    console.log('******* orderId *********** ', orderData.orderID);
    const data = await getOrderData(orderData.orderID);
    console.log('******* data *********** ', data);
    return { props: { data } }
  }
  
  
  export default function OrderConfirmationPage({ data })
  {
    console.log("OrderConfirmationPage");
    return (
     <OrderConfirmView order={data as any} />
    )
  }
  
  
  OrderConfirmationPage.Layout = Layout