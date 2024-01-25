import { ReactNode } from "react";

export interface Layout {
  title: string;
  children?: ReactNode;
}

export interface light_dark {
  darkmode: boolean;
  toggleMode?: () => void;
  details?: string;
  image?: string;
}

export interface card_interface {
  id: number;
  source: string;
  imgSrc?: string;
  videoTitle?: string;
}
