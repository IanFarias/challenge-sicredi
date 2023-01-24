package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.ListVotingSessionDTO;
import br.com.sicredi.challengeapi.dto.ListVotingSessionDetailedDTO;
import br.com.sicredi.challengeapi.exception.AlreadyExistsException;
import br.com.sicredi.challengeapi.exception.ErrorOnSaveException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.service.VotingSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/votingsession")
public class VotingSessionController {

    @Autowired
    VotingSessionService service;

    @PostMapping("/{topicId}")
    @ResponseStatus(HttpStatus.CREATED)
    public void createVotingSession(@PathVariable("topicId") Long topicId,
                                    @RequestParam(value = "duration", required = false) Long duration)
            throws NotFoundException, ErrorOnSaveException, AlreadyExistsException {
        service.create(topicId, duration);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ListVotingSessionDTO> listAll() {
        return service.listAll();
    }

    @GetMapping("/{votingSessionId}")
    @ResponseStatus(HttpStatus.OK)
    public ListVotingSessionDetailedDTO findOne(@PathVariable("votingSessionId") Long id) throws NotFoundException {
        return service.findOne(id);
    }

}
