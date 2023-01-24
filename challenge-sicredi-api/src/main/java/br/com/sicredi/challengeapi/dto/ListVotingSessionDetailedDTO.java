package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.VotingSession;

import java.time.LocalDateTime;

public record ListVotingSessionDetailedDTO(
        Long id,
        LocalDateTime started_at,
        LocalDateTime finished_at,
        ListTopicDTO topicDTO,
        boolean isOpen,
        int totalVotes,
        long positiveVotes,
        long negativeVotes
) {

    public ListVotingSessionDetailedDTO(VotingSession votingSession, long positiveVotes, long negativeVotes) {
        this(
                votingSession.getId(),
                votingSession.getStarted_at(),
                votingSession.getFinished_at(),
                new ListTopicDTO(votingSession.getTopic()),
                votingSession.isOpen(),
                votingSession.getVotesList().size(),
                positiveVotes,
                negativeVotes
        );
    }
}
