package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.Topic;

public record ListTopicDTO(String title, String description) {
    public ListTopicDTO(Topic topic) {
        this(topic.getTitle(), topic.getDescription());
    }

}
