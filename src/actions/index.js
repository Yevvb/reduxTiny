export function selectBook(book) {
  console.log('a book has benn selected:', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}