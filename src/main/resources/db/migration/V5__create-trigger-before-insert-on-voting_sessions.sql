CREATE TRIGGER beforeInsertOnVotingSessions BEFORE INSERT ON voting_sessions
FOR EACH ROW BEGIN
    SET new.started_at = now();
END;
