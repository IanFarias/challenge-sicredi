package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.VotingSession;

import java.time.LocalDateTime;

public record ListVotingSessionDTO(Long id, LocalDateTime started_at, LocalDateTime finished_at, Long topic_id) {

    public ListVotingSessionDTO(VotingSession votingSession) {
        this(votingSession.getId(), votingSession.getStarted_at(), votingSession.getFinished_at(),
                votingSession.getTopic().getId());
    }
}
