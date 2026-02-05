let books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 2000,
  },
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 1996,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 2010,
  },
]

function sortByYear(book1, book2) {
  if(book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear <= 2000);

filteredBooks.sort(sortByYear);