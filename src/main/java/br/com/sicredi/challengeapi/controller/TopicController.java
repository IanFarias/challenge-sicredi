package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.CreateNewTopicDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @PostMapping
    public void createNewTopic(@RequestBody CreateNewTopicDTO request) {
        System.out.println(request);
    }
}
