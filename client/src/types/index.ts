export interface RegisterUserInputs {
  fname: string;
  lname: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

export interface LoginUserInputs {
  email: string;
  password: string;
}

export interface RegisterOrgInputs {
  name: string;
  phone: number;
}

export interface UserInfo {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;

  user_id: number;
}
