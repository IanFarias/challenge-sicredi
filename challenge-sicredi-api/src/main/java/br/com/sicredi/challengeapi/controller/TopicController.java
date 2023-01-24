package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.CreateTopicDTO;
import br.com.sicredi.challengeapi.dto.ListTopicDTO;
import br.com.sicredi.challengeapi.service.TopicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @Autowired
    TopicService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewTopic(@Valid @RequestBody CreateTopicDTO request) {
        service.createTopic(request);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ListTopicDTO> listAllTopics() {
        return service.listAll();
    }
}
