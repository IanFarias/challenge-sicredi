package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;



public interface TopicRepository extends JpaRepository<Topic, Long> {
}
