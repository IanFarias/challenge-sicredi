package br.com.sicredi.challengeapi.mapper;

import br.com.sicredi.challengeapi.dto.RegisterTopicDTO;
import br.com.sicredi.challengeapi.model.Topic;

import java.util.UUID;

public  class  TopicMapper {
   public static Topic fromDtoToEntity(RegisterTopicDTO topicDTO)  {
       Topic newTopic = new Topic();

       newTopic.setId(UUID.randomUUID());
       newTopic.setTitle(topicDTO.getTitle());
       newTopic.setDescription(topicDTO.getDescription());

       return newTopic;
    }
}
