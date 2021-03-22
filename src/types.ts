export interface User {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: Creditcard;
  subscription: Subscription;
}

interface Subscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

interface Creditcard {
  cc_number: string;
}

interface Address {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Employment {
  title: string;
  key_skill: string;
}
