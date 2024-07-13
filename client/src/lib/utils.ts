import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from 'jwt-decode';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const decodeToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};