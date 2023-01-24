CREATE TABLE voting_sessions (
    id INTEGER NOT NULL AUTO_INCREMENT,
    started_at DATETIME NOT NULL,
    finished_at DATETIME NOT NULL,
    topic_id INTEGER NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(topic_id) REFERENCES topics(id)
);