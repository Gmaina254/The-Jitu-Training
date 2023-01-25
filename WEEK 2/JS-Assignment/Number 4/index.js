function novel(book) {
  book.published_on = new Date();
  return book;
}

let bookToRead = {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: false,
}; 

let bookNew = novel(bookToRead);

console.log(bookNew);