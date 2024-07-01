export interface RegisterUserInputs {
  fname: string;
  lname: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

export interface LoginUserInputs {
  email: string
  password: string
}