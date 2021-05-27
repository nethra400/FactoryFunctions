const postObject = {
  title: "Harry potter",
  body: "abcd",
  author: "Rowling",
  views: 180000,
  comments: "great",
  book: function (author, body) {
    console.log(postObject[author], postObject[this.title]);
  },
  isLive: "YES",
};
console.log(postObject);
