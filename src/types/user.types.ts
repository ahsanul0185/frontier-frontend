

enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    AUTHOR = "AUTHOR",
}
enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}



export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  image?: string | null;
  bio?: string | null;
  birthdate?: string | null;
  gender?: Gender | null;
  phoneNumber?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
}
export type UserInfo = IUser;