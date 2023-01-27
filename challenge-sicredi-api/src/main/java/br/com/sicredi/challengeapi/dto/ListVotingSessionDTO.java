package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.VotingSession;

import java.time.LocalDateTime;

public record ListVotingSessionDTO(
        Long id,
        LocalDateTime started_at,
        LocalDateTime finished_at,
        Long duration,
        Long topic_id,
        boolean isOpen
) {

    public ListVotingSessionDTO(VotingSession votingSession) {
        this(votingSession.getId(), votingSession.getStarted_at(), votingSession.getFinished_at(),
                votingSession.getDuration(), votingSession.getTopic().getId(), votingSession.isOpen());
    }
}
