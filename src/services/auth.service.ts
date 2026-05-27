"use server"



export async function getUserInfo() {
    return {
  id: "usr_01j7x2b9m",
  name: "Yuliia Karpets",
  email: "yuliia.karpets@example.com",
  role: "AUTHOR", // Assumes an enum or type for UserRole
  status: "ACTIVE", // Assumes an enum or type for UserStatus
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  bio: "Cultural journalist and art critic focusing on modern allegories, collective trauma, and the architecture of memory.",
  birthdate: "1992-04-14",
  gender: "FEMALE", // Assumes an enum or type for Gender
  phoneNumber: "+380 50 123 4567",
  address: "Volodymyrska St, 24, Kyiv, Ukraine, 01001",
  createdAt: "2024-01-15T08:30:00Z",
  updatedAt: "2024-11-01T14:22:18Z"
}
}
