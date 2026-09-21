import { ReactNode } from "react";
export interface AuthCardProps {
  children: ReactNode;
}
export interface AuthCardHeaderProps {
  title: string;
  subtitle: string;
}
export interface AuthDividerProps {
  text: string;
}
export interface AuthFooterLinkProps {
  question: string;
  linkText: string;
  href: string;
}
export interface AuthFormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightSlot?: ReactNode;
}
export interface AuthSocialButtonProps {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}
export interface AuthSubmitButtonProps {
  label: string;
}