package br.com.sicredi.challengeapi.mapper;

import br.com.sicredi.challengeapi.dto.CreateTopicDTO;
import br.com.sicredi.challengeapi.model.Topic;


public class TopicMapper {
    public static Topic fromDtoToEntity(CreateTopicDTO topicDTO)  {
        Topic newTopic = new Topic();

        newTopic.setTitle(topicDTO.getTitle());
        newTopic.setDescription(topicDTO.getDescription());

        return newTopic;
    }
}
