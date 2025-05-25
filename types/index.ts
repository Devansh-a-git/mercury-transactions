import type React from "react";

export interface Account {
  id: string;
  name: string;
  balance: string;
  type: "checking" | "savings" | "credit" | "treasury" | "ops" | "ap" | "ar";
  accountNumber?: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ sx?: any }>;
  isActive?: boolean;
  badge?: string | number;
  hasSubmenu?: boolean;
}

export interface User {
  name: string;
  initials: string;
  avatar?: string;
}

export interface Transaction {
  id: string;
  date: Date;
  merchant: string;
  amount: number;
  currency: string;
  account: string;
  paymentMethod: string;
  user?: string;
  userCode?: string;
  icon: string;
  iconBg: string;
  type: "transfer" | "payment" | "credit";
}

export interface Column {
  label: string;
  styles: React.CSSProperties;
  subText?: string;
  tooltipText?: string;
}
