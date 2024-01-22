const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let readbook=0;
const numberOfBooksRead = () => {
  // write your code here
	 books.forEach(book => {
    book.readingStatus && ++readBooks
});
console.log(readBooks);
};
numberOfBooksRead()
// Do not change the code below

alert(numberOfBooksRead());
