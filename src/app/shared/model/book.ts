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

// Data received from the open library API
export interface OpenLibraryBook{
  key: string;
  title: string;
  author_name?: string;
  cover_i?: number;
  first_publish_year?: number;
}

// API returns an object containing a docs array
export function mapOpenLibraryBook(apiBook: OpenLibraryBook): Book {
  return {
    id: apiBook.key,
    name: apiBook.title,
    author: apiBook.author_name?.[0] ?? 'Unknow',
    category: 'Christian',
    description: apiBook.first_publish_year ? `First published in ${apiBook.first_publish_year}` : '',
    imageUrl: apiBook.cover_i ? `https://covers.openlibrary.org/b/id/${apiBook.cover_i}-M.jpg` : ''
  };
}
