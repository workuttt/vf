export type MessageSender = 'user' | 'bot' | 'options';

export interface MenuOption {
  id: string;
  label: string;
}

export interface Message {
  id: number;
  text?: string;
  sender: MessageSender;
  options?: MenuOption[];
}