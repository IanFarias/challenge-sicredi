package br.com.sicredi.challengeapi.dto;

import br.com.sicredi.challengeapi.model.Vote;
import br.com.sicredi.challengeapi.model.VotingSession;

import java.time.LocalDateTime;

public record ListVotingSessionDetailedDTO(
        Long id,
        LocalDateTime started_at,
        LocalDateTime finished_at,
        Long topic_id,
        boolean isOpen,
        Long duration,
        int totalVotes,
        long positiveVotes,
        long negativeVotes
) {

    public ListVotingSessionDetailedDTO(VotingSession votingSession) {
        this(
                votingSession.getId(),
                votingSession.getStarted_at(),
                votingSession.getFinished_at(),
                votingSession.getTopic().getId(),
                votingSession.isOpen(),
                votingSession.getDuration(),
                votingSession.getVotesList().size(),
                votingSession.getVotesList().stream().filter(Vote::isVote).count(),
                votingSession.getVotesList().stream().filter(vote -> !vote.isVote()).count()
        );
    }
}
