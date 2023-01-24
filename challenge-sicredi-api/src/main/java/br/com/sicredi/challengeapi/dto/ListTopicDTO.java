package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.Topic;

public record ListTopicDTO(Long id, String title, String description) {
    public ListTopicDTO(Topic topic) {
        this(topic.getId(), topic.getTitle(), topic.getDescription());
    }

}
