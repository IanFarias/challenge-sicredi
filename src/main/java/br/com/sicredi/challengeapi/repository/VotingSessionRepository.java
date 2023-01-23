package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.VotingSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotingSessionRepository extends JpaRepository<VotingSession, Long> {
}
