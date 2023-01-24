package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.ListVotingSessionDTO;
import br.com.sicredi.challengeapi.exception.ErrorOnSaveException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.model.Topic;
import br.com.sicredi.challengeapi.model.VotingSession;
import br.com.sicredi.challengeapi.repository.VotingSessionRepository;
import org.jobrunr.scheduling.BackgroundJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class VotingSessionService {

    @Autowired
    VotingSessionRepository repository;

    @Autowired
    TopicService topicService;

    public void create(Long topicId, Long duration) throws NotFoundException, ErrorOnSaveException {
        Topic topic = topicService.listById(topicId);

        VotingSession votingSession = new VotingSession();
        votingSession.setTopic(topic);

        try {
            Long id = repository.save(votingSession).getId();
            processCloseVotingSession(duration, id, LocalDateTime.now());
        }catch (Exception e) {
            throw new ErrorOnSaveException();
        }
    }

    public List<ListVotingSessionDTO> listAll() {

        return repository.findAll()
                .stream()
                .map(ListVotingSessionDTO::new)
                .toList();
    }

    public VotingSession findById(Long id) throws NotFoundException {
        Optional<VotingSession> votingSession = repository.findById(id);

        if(votingSession.isEmpty()) {
            throw new NotFoundException("Topic Not Found");
        }

        return votingSession.get();
    }

    public void closeVotingSession(Long id) throws NotFoundException {
        VotingSession votingSession = findById(id);

        votingSession.setFinished_at(LocalDateTime.now());
        votingSession.setOpen(false);

        repository.save(votingSession);
    }


    public void processCloseVotingSession(Long minutes, Long id, LocalDateTime started_at) {
        BackgroundJob.schedule(started_at.plusMinutes(minutes), () -> closeVotingSession(id));
    }
}
