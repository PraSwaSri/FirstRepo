export interface ICustomer{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng:string
      }
    },
    phone: string,
    website:string,
    company: {
      name: string
      }
}