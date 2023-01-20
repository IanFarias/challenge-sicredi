package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.topic.RegisterTopicDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @PostMapping
    public void registerNewTopic(@RequestBody RegisterTopicDTO request) {
        System.out.println(request);
    }
}
