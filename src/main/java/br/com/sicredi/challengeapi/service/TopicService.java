package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.RegisterTopicDTO;
import br.com.sicredi.challengeapi.mapper.TopicMapper;
import br.com.sicredi.challengeapi.model.Topic;
import br.com.sicredi.challengeapi.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

    @Autowired
    private TopicRepository repository;

    public void createNewTopic(RegisterTopicDTO registerTopicDTO) {
        Topic newTopic = TopicMapper.fromDtoToEntity(registerTopicDTO);
        System.out.println(newTopic);
        repository.save(newTopic);
    }
}
