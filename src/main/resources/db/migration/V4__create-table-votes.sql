CREATE TABLE votes (
    id INTEGER NOT NULL AUTO_INCREMENT,
    vote BOOLEAN NOT NULL,
    voting_session_id INTEGER NOT NULL,
    associate_id INTEGER NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(associate_id) REFERENCES associates(id),
    FOREIGN KEY(voting_session_id) REFERENCES voting_sessions(id)
);