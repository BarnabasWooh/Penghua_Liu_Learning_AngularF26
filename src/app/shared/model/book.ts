export interface Book {
  id: number | string;
  name: string;
  author: string;
  category: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
}
// Define what the parent needs to know
export interface BookEvent {
  id: number | string;
  action: 'clicked';
  tags?: string[];
}
