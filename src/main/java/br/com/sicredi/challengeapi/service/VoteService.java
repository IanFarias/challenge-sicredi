package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateVoteDTO;
import br.com.sicredi.challengeapi.exception.AlreadyVoteException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.exception.VotingSessionClosedExpcetion;
import br.com.sicredi.challengeapi.model.Associate;
import br.com.sicredi.challengeapi.model.Vote;
import br.com.sicredi.challengeapi.model.VotingSession;
import br.com.sicredi.challengeapi.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VoteService {

    @Autowired
    private VoteRepository repository;

    @Autowired
    private VotingSessionService votingSessionService;

    @Autowired
    private AssociateService associateService;

    public void create(Long votingSessionId, CreateVoteDTO createVoteDTO)
            throws NotFoundException, AlreadyVoteException, VotingSessionClosedExpcetion {
        VotingSession votingSession = votingSessionService.findById(votingSessionId);

        if(!votingSession.isOpen()) {
            throw new VotingSessionClosedExpcetion();
        }

        boolean alreadyVote = repository
                .existsByVotingSessionIdAndAssociateId(votingSessionId, createVoteDTO.associateId());

        if(alreadyVote) {
            throw new AlreadyVoteException();
        }

        Associate associate = associateService.findById(createVoteDTO.associateId());

        String voteReceived = createVoteDTO.vote().toUpperCase();

        boolean voteValue = voteReceived.equals("SIM");

        Vote vote =  new Vote();
        vote.setVotingSession(votingSession);
        vote.setAssociate(associate);
        vote.setVote(voteValue);

        repository.save(vote);
    }
}
