create table votes (
    id binary(16) not null,
    vote boolean not null,
    topic_id binary(16) not null,
    associate_id binary(16) not null,

    PRIMARY KEY(id),
    FOREIGN KEY(topic_id) REFERENCES topics(id),
    FOREIGN KEY(associate_id) REFERENCES associates(id)

)