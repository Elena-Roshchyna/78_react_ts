export interface UserProfileData {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    country: string;
    phone: string;
}

export interface UserContextType {
    user: UserProfileData | undefined;
    setUser: (user: UserProfileData | undefined) =>void;
    
}