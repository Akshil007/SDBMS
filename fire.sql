CREATE DATABASE sdbms;

CREATE TABLE user_details (
    Username VARCHAR(255),
    Firstname VARCHAR(255),
    Lastname VARCHAR(255),
    pass_word VARCHAR(255),
    Email VARCHAR(255),
    Organization VARCHAR(255),
    PRIMARY KEY(Username)
);


INSERT INTO user_details  VALUES (
    "ak",
    "Akshil",
    "Gadhiya",
    "pass",    
    "ak@example.com",
    "IIITB"
);

INSERT INTO user_details VALUES (
    'ad',
    'Alay',
    'Dhagia',
    'pass',
    'ad@example.com',
    "IIITB"
);

INSERT INTO user_details VALUES (
    'jk',
    'Jaymeen',
    'Kachrola',
    'pass',
    'jk@example.com',
    "IIITB"
);

INSERT INTO user_details VALUES (
    'mp',
    'Meghna',
    'Pai',
    'pass',
    'mp@example.com',
    "IIITB"
);

INSERT INTO user_details VALUES (
    'PP',
    'Parth',
    'Patel',
    'pass',
    'pp@example.com',
    "IIITB"
);


CREATE TABLE stream_details (
    username VARCHAR(255),
    streamid VARCHAR(255),
    sname VARCHAR(255),
    source VARCHAR(255),
    link VARCHAR(255),
    windowType VARCHAR(255),
    windowVelocity INT,
    windowSize INT,
    windowing VARCHAR(255),
    PRIMARY KEY(username, streamid)
);


-- INSERT INTO stream_details VALUES (
--     "ad",
--     "123",
--     "forex",
--     "haha",
--     "haha",
--     "haha",
--     1,
--     2
-- );

-- DELETE TOP (1) FROM stream_details;

-- INSERT INTO stream_details VALUES (
--     "mp",
--     "123",
--     "forex",
--     "haha",
--     "haha",
--     "haha",
--     "1",
--     "2"
-- );

-- INSERT INTO stream_details VALUES (
--     "ad",
--     "456",
--     "forex",
--     "haha",
--     "haha",
--     "haha",
--     1,
--     2
-- );

INSERT INTO stream_details VALUES (
    "ad",
    "789",
    "bc",
    "haha",
    "haha",
    "haha",
    1,
    2
);



CREATE TABLE query_details (
    username VARCHAR(255),
    streamid VARCHAR(255),
    queryid INT,
    query VARCHAR(255),
    PRIMARY KEY(username, streamid, queryid)
);


INSERT INTO query_details VALUES (
    "ad",
    "789",
    1,
    "select * from haha"
);

INSERT INTO query_details VALUES (
    "ad",
    "789",
    2,
    "select * from jaja"
);

CREATE TABLE trial (
    id int,
    insertTime timestamp not null default current_timestamp
);

SELECT* FROM trial
WHERE STR_TO_DATE(lastseen, '%Y-%m-%d %H:%i:%s') >= DATE_SUB(NOW(), INTERVAL 10 MINUTE)