import { FC } from 'react'
import Link from 'next/link'
import type { Order } from '@components/order/OrderConfirmView/ordertype'

interface Props {
  order: Order
}

const OrderConfirmView: FC<Props> = ({
  order
}) => (
  <div className="max-w-2xl mx-8 sm:mx-auto py-20">
       <h1><b> Order confirmation page </b></h1><br/> 
       Order ID {order.id} and status is {order.status} <br/>
       Total cost : {order.total_inc_tax} <br/>
       Shipped to {order.billing_address.first_name} {order.billing_address.last_name} residing in {order.billing_address.city} , {order.billing_address.country}
      </div>
)

export default OrderConfirmView
