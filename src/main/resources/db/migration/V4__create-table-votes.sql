CREATE TABLE votes (
    id VARCHAR(36) NOT NULL,
    vote BOOLEAN NOT NULL,
    voting_session_id VARCHAR(36) NOT NULL,
    associate_id VARCHAR(36) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(associate_id) REFERENCES associates(id),
    FOREIGN KEY(voting_session_id) REFERENCES voting_sessions(id)
);