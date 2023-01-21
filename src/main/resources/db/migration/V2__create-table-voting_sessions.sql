CREATE TABLE voting_sessions (
    id VARCHAR(36) NOT NULL,
    started_at DATETIME NOT NULL,
    finished_at DATETIME NOT NULL,
    topic_id VARCHAR(36) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(topic_id) REFERENCES topics(id)
);