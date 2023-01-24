package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {

    boolean existsByVotingSessionIdAndAssociateId(Long votingSessionId, Long associateId);
}
