export type Order = {
    id: string,
    status: string,
    total_inc_tax: number,
    billing_address: Address
  }

export type Address = {
first_name: string,
last_name: string,
city: string,
country: string
}