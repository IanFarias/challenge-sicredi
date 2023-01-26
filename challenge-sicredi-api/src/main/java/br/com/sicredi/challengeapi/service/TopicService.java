package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateTopicDTO;
import br.com.sicredi.challengeapi.dto.ListTopicDTO;
import br.com.sicredi.challengeapi.dto.ListTopicDetailedDTO;
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
    private TopicRepository repository;

    public void createTopic(CreateTopicDTO topicDTO) {
        Topic topic = TopicMapper.fromDtoToEntity(topicDTO);
        System.out.println(topic.getId());
        repository.save(topic);
    }

    public List<ListTopicDTO> listAll() {
        return repository.findAll().stream().map(ListTopicDTO::new).toList();
    }

    public ListTopicDetailedDTO findOne(Long id) throws NotFoundException {
        Topic topic = findById(id);

        return new ListTopicDetailedDTO(topic);
    }


    protected Topic findById(Long id) throws NotFoundException {
        Optional<Topic> topic = repository.findById(id);

        if(topic.isEmpty()) {
            throw new NotFoundException("Topic Not Found");
        }

        return topic.get();
    }
}
