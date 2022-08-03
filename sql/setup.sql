-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released BIGINT
);

-- CREATE TABLE author (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     name VARCHAR,
--     dob DATE,
--     pob VARCHAR
-- );

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