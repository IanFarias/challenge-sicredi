CREATE TRIGGER beforeInsertOnTopics BEFORE INSERT ON topics
FOR EACH ROW BEGIN
    SET new.created_at = now();
END;
