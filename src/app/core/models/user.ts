export class User {
  _id!: string;
  email!: string;
  password!: string;
}

export interface LoginRsp {
  success: boolean;
  token: string;
}

export interface SignUpResp {
  success: boolean;
  message: string;
}

export interface LogoutRsp {
  success: boolean;
}
