CREATE TABLE users (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL,
  "email" VARCHAR,
  "phone" VARCHAR,
  "address" VARCHAR
);

CREATE TABLE books (
  "isbn" VARCHAR PRIMARY KEY,
  "title" VARCHAR,
  "author" VARCHAR,
  "genre" VARCHAR
);

/*
CREATE TABLE old_books (
  "old_book_id" SERIAL PRIMARY KEY,
  "user_id" int references users(user_id),
  "bookisbn" VARCHAR references books(isbn),
  "condition" VARCHAR
  );
*/

INSERT INTO books (isbn, title, author, genre)
VALUES ('9780060244194', 'The Giving Tree', 'Shel Silverstein', 'Childrens Books');

-- psql -d postgres://ejwfrbko:zR8mzpU95_d1L7NNj6jlvNTopb2373jh@heffalump.db.elephantsql.com/ejwfrbko -f books_postgres_create.sql