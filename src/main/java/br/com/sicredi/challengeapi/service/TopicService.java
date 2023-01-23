package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateTopicDTO;
import br.com.sicredi.challengeapi.dto.ListTopicDTO;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.mapper.TopicMapper;
import br.com.sicredi.challengeapi.model.Topic;
import br.com.sicredi.challengeapi.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {
    @Autowired
    TopicRepository repository;

    public void createTopic(CreateTopicDTO topicDTO) {
        Topic topic = TopicMapper.fromDtoToEntity(topicDTO);
        System.out.println(topic.getId());
        repository.save(topic);
    }

    public List<ListTopicDTO> listAll() {
        List<ListTopicDTO> topics = repository.findAll().stream().map(ListTopicDTO::new).toList();

        return topics;
    }

    public Topic listById(Long id) throws NotFoundException {
        Optional<Topic> topic = repository.findById(id);

        if(topic.isEmpty()) {
            throw new NotFoundException("Topic Not Found");
        }

        return topic.get();
    }
}
