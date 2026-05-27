"use server"

import { httpClient } from "@/lib/axios/httpClient";
import { setCookie } from "@/lib/cookieUtils";



export async function loginUser(payload : {username: string, password: string}) {
  try {
    const res = await httpClient.post("/auth/login", payload);

    if (!res.access_token) {
      throw new Error("Login failed: Invalid credentials");
    }

    const {access_token, token_type, expires_in} = res;

    await setCookie("access_token", access_token, expires_in);

    return {
      access_token: access_token,
      token_type: token_type,
      expires_in: expires_in
    };

  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}


export async function getUserInfo() {
    return {
        id: "usr_01j7x2b9m",
        name: "Yuliia Karpets",
        email: "yuliia.karpets@example.com",
        role: "AUTHOR", 
        status: "ACTIVE",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
        bio: "Cultural journalist and art critic focusing on modern allegories, collective trauma, and the architecture of memory.",
        birthdate: "1992-04-14",
        gender: "FEMALE", 
        phoneNumber: "+380 50 123 4567",
        address: "Volodymyrska St, 24, Kyiv, Ukraine, 01001",
        createdAt: "2024-01-15T08:30:00Z",
        updatedAt: "2024-11-01T14:22:18Z"
      }
}


