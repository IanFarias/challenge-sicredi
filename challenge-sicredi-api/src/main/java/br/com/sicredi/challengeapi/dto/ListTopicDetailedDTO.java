package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.Topic;

public record ListTopicDetailedDTO(
        Long id,
        String title,
        String description,
        ListVotingSessionDetailedDTO session
) {

    public ListTopicDetailedDTO(Topic topic) {
        this(topic.getId(), topic.getTitle(), topic.getDescription(),
                topic.getSession() != null ? new ListVotingSessionDetailedDTO(topic.getSession()) : null);
    }

}
