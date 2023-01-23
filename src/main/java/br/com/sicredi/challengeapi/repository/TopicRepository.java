package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.Topic;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;


public interface TopicRepository extends CrudRepository<Topic, Long> {
    ArrayList<Topic> findAll();
}
