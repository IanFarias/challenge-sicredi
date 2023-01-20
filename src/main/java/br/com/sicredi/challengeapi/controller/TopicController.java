package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.RegisterTopicDTO;
import br.com.sicredi.challengeapi.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @PostMapping
    public void registerNewTopic(@RequestBody RegisterTopicDTO request) {
        topicService.createNewTopic(request);
    }
}
