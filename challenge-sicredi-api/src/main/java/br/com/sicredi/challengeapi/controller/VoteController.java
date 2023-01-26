package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.CreateVoteDTO;
import br.com.sicredi.challengeapi.exception.AlreadyVoteException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.exception.VotingSessionClosedExpcetion;
import br.com.sicredi.challengeapi.service.VoteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/votes")
public class VoteController {

    @Autowired
    VoteService service;

    @PostMapping("/{votingSessionId}")
    @ResponseStatus(HttpStatus.CREATED)
    public void vote(@PathVariable("votingSessionId") Long sessionId,
                     @Valid @RequestBody CreateVoteDTO voteDTO)
                        throws NotFoundException, AlreadyVoteException, VotingSessionClosedExpcetion {
        service.create(sessionId, voteDTO);
    }
}
