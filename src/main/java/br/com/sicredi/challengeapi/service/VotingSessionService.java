package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.ListVotingSessionDTO;
import br.com.sicredi.challengeapi.exception.ErrorOnSaveException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.model.Topic;
import br.com.sicredi.challengeapi.model.VotingSession;
import br.com.sicredi.challengeapi.repository.VotingSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VotingSessionService {

    @Autowired
    VotingSessionRepository repository;

    @Autowired
    TopicService topicService;

    public void create(Long topicId) throws NotFoundException, ErrorOnSaveException {
        Topic topic = topicService.listById(topicId);

        VotingSession votingSession = new VotingSession();
        votingSession.setTopic(topic);

        try {
            repository.save(votingSession);
        }catch (Exception e) {
            throw new ErrorOnSaveException();
        }
    }

    public List<ListVotingSessionDTO> listAll() {

        List<ListVotingSessionDTO> listVotingSessionDTOS = repository.findAll()
                .stream()
                .map(ListVotingSessionDTO::new)
                .toList();

        return listVotingSessionDTOS;
    }
}
