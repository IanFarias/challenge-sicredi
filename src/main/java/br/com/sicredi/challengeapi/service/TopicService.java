package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateTopicDTO;
import br.com.sicredi.challengeapi.mapper.TopicMapper;
import br.com.sicredi.challengeapi.model.Topic;
import br.com.sicredi.challengeapi.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    TopicRepository repository;

    public void createTopic(CreateTopicDTO topicDTO) {
        Topic topic = TopicMapper.fromDtoToEntity(topicDTO);
        System.out.println(topic.getId());
        repository.save(topic);
    }

    public List<Topic> listAll() {
        List<Topic> topics = repository.findAll();

        return topics;
    }
}
