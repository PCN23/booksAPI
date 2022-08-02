-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released BIGINT
);

CREATE TABLE author (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob DATE,
    pob VARCHAR
);