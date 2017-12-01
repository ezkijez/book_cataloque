INSERT INTO USER (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (0, 0, 'bob', 'valami@example.com', '$2a$10$O3zy/XijpbyMDm1tnukK0e80lavU4AxsWxxZm5H297PFHtEGqefBW', 'ADMIN'); -- pw is alma
INSERT INTO USER (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (1, 0, 'johnjohn', 'johnny@jmail.com', '$2a$10$9iAFRO/2ZXsDaCldkYirkO.EoD2qXJcLImlLlcvB2CyJAc8NxZGvG', 'USER');
INSERT INTO USER (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (2, 0, 'james', 'jamesemaj@mm.am', '$2a$10$FxwryUtdKYOEIGCXOBGHnuGQHnZLhDCrodB35IYmvxYkP093o/q8q', 'USER');
INSERT INTO USER (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (3, 0, 'susan', 'susan112@smail.com', '$2a$10$lnd4LK3IluOxGa0AS57ED.7ZHgM0IljWhO3FGqHYZl4w8CJK.pKVa', 'USER');

INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (1, 0, 'Walt Whitman', 'American', 'poet, essayist, and journalist');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (2, 0, 'Ernest Hemingway', 'American', 'Nober prize winner novelist and short story writer');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (3, 0, 'Kurt Vonnegut', 'American', 'American writer noted for his wryly satirical novels who frequently used postmodern techniques as well as elements of fantasy and science fiction to highlight the horrors and ironies of 20th-century civilization. Much of Vonnegut’s work is marked by an essentially fatalistic worldview that nonetheless embraces modern humanist beliefs.');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (4, 0, 'John Steinbeck', 'American', 'John Steinbeck won the 1962 Nobel Prize in Literature "for his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception". He has been called "a giant of American letters", and many of his works are considered classics of Western literature.');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (5, 0, 'Henry Charles Bukowski', 'German-American', 'His writing was influenced by the social, cultural, and economic ambience of his home city of Los Angeles. His work addresses the ordinary lives of poor Americans, the act of writing, alcohol, relationships with women, and the drudgery of work. Bukowski wrote thousands of poems, hundreds of short stories and six novels, eventually publishing over 60 books.');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (6, 0, 'Neil Gaiman', 'British', ' English author of short fiction, novels, comic books, graphic novels, audio theatre, and films. He has won numerous awards, including the Hugo, Nebula, and Bram Stoker awards, as well as the Newbery and Carnegie medals.');
INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES (7, 0, 'Philip K. Dick', 'American', 'The prominent literary critic Fredric Jameson proclaimed Dick the "Shakespeare of Science Fiction", and praised his work as "one of the most powerful expressions of the society of spectacle and pseudo-event".');

INSERT INTO BOOK (ID, VERSION, TITLE, GENRE, PUBLICATION_DATE) VALUES (1, 0, 'A Farewell to Arms', 'Fiction novel', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c0000787077070300000789010178');
INSERT INTO BOOK (ID, VERSION, TITLE, GENRE, PUBLICATION_DATE) VALUES (2, 0, 'For Whom the Bell Tolls', 'War novel', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c0000787077070300000794010178');
INSERT INTO BOOK (ID, VERSION, TITLE, GENRE, PUBLICATION_DATE) VALUES (3, 0, 'The Old Man and the Sea', 'Literary fiction', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c00007870770703000007a0010178');
INSERT INTO BOOK (ID, VERSION, TITLE, GENRE, PUBLICATION_DATE) VALUES (4, 0, 'Leaves of Grass', 'Poetry collection', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c000078707707030000073f010178');

INSERT INTO BOOK_AUTHOR (BOOKS_ID, AUTHORS_ID) VALUES (1, 2);
INSERT INTO BOOK_AUTHOR (BOOKS_ID, AUTHORS_ID) VALUES (2, 2);
INSERT INTO BOOK_AUTHOR (BOOKS_ID, AUTHORS_ID) VALUES (3, 2);
INSERT INTO BOOK_AUTHOR (BOOKS_ID, AUTHORS_ID) VALUES (4, 1);
