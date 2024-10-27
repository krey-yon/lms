import { createContext, useState } from "react";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import axiosInstance from "@/api/axiosInstance";


export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  async function handleRegisterUser(){
    const data = await axiosInstance.post("/auth/register", {
      ...signUpFormData,
      role: "user",
    });

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
