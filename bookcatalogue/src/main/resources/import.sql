INSERT INTO USER (ID, VERSION, USERNAME, EMAIL, PASSWORD, ROLE) VALUES (0, 0, 'bob', 'valami@example.com', '$2a$10$O3zy/XijpbyMDm1tnukK0e80lavU4AxsWxxZm5H297PFHtEGqefBW', 'ADMIN'); -- pw is alma
INSERT INTO PUBLIC.USER(ID, EMAIL, PASSWORD, ROLE, USERNAME) VALUES
(1, 0, 'johnny@jmail.com', '$2a$10$9iAFRO/2ZXsDaCldkYirkO.EoD2qXJcLImlLlcvB2CyJAc8NxZGvG', 'USER', 'johnjohn'),
(2, 0, 'jamesemaj@mm.am', '$2a$10$FxwryUtdKYOEIGCXOBGHnuGQHnZLhDCrodB35IYmvxYkP093o/q8q', 'USER', 'james'),
(3, 0, 'susan112@smail.com', '$2a$10$lnd4LK3IluOxGa0AS57ED.7ZHgM0IljWhO3FGqHYZl4w8CJK.pKVa', 'USER', 'susan');

INSERT INTO AUTHOR (ID, VERSION, AUTHOR_NAME, NATIONALITY, BIO) VALUES
(1, 0, 'Walt Whitman', 'American', 'poet, essayist, and journalist'),
(2, 0, 'Ernest Hemingway', 'American', 'Nober prize winner novelist and short story writer'),
(3, 0, 'Kurt Vonnegut', 'American', ''),
(4, 0, 'John Steinbeck', 'American', ''),
(5, 0, 'Henry Charles Bukowski', 'German-American', ''),
(6, 0, 'Neil Gaiman', 'British', ''),
(7, 0, 'Philip K. Dick', 'American', '');

INSERT INTO BOOK (ID, VERSION, TITLE, GENRE, PUBLICATION_DATE) VALUES
(1, 0, 'A Farewell to Arms', 'Fiction novel', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c0000787077070300000789010178'),
(2, 0, 'For Whom the Bell Tolls', 'War novel', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c0000787077070300000794010178'),
(3, 0, 'The Old Man and the Sea', 'Literary fiction', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c00007870770703000007a0010178'),
(4, 0, 'Leaves of Grass', 'Poetry collection', 'aced00057372000d6a6176612e74696d652e536572955d84ba1b2248b20c000078707707030000073f010178');

INSERT INTO BOOK_AUTHOR (BOOKS_ID, AUTHORS_ID) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 1);
