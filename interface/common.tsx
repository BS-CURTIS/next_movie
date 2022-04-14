import { Theme } from "../styles/theme";
export interface posts {
  posts: [];
}

export interface node {
  id: string;
  title: string;
  thumbnailUrl: string;
  body: string;
}

export interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
  inputValue?: string | null;
}
