import { useState } from "react";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
export type AppContextType = {
  cart: CartItemType[];
  userInfo: UserInfoType;
  logOut: () => void;
  updateUserInfo: (value: UserInfoType, token: string) => void;
};
export type UserInfoType = {
  id: number;
  name: string;
  family: string;
  email: string;
  phone?: string;
  avatar?: string;
};
function useAppContext() {
  const cartItems = localStorage.getItem("cart") || "[]";
  const userInfoStorage = localStorage.getItem("userInfo") || "{}";

  const [cart, setCart] = useState<CartItemType[]>(JSON.parse(cartItems));
  const [userInfo, setUserInfo] = useState<UserInfoType>(
    JSON.parse(userInfoStorage)
  );
  const updateUserInfo = (userInfo: UserInfoType, token: string) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("token", token);
    setUserInfo(userInfo);
  };
  const getCartItem = (id: number) => {
    return cart.find((f) => f.id === id) || null;
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUserInfo({} as UserInfoType);
  };

  return {
    cart,
    getCartItem,
    userInfo,
    updateUserInfo,
    logOut,
  };
}
export default useAppContext;
