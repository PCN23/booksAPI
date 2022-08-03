-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released BIGINT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob DATE,
    pob VARCHAR
);
CREATE TABLE bookAuthor (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_id BIGINT,
    author_id BIGINT,
    FOREIGN KEY (book_id) REFERENCES books(id), 
    FOREIGN KEY (author_id) REFERENCES authors(id), 
);


INSERT INTO books (
    title,
    released
)
VALUES
('Principles', '2009'),
('How to roof a house', '1995'),
('How to make a living', '1999'),
('Hoop like James', '2003'),
('Legends are never gone', '2012'),
('Soccer', '2003')
;

INSERT INTO authors (
    name, 
    dob,
    pob
)

VALUES 
('Ray Dalio', '5/5/1968', 'Homie, Oregon'),
('Jill Schlesinger', '6-11-1994', 'Spokane, Washington'),
('Bob Sled', '8-6-1993', 'Dayton, Ohio'),
('Edward Snowden', '1-1-2001', 'Clearwater, Florida'),
('Damian Lillard', '2-5-1996', 'Oakland, Claifornia')
;

INSERT INTO bookAuthor (
    
)                        


