create table voting_sessions (
    id binary(16) not null,
    started_at datetime not null,
    finished_at datetime,
    topic_id binary(16),


    PRIMARY KEY(id),
    FOREIGN KEY (topic_id) REFERENCES topics(id)


)