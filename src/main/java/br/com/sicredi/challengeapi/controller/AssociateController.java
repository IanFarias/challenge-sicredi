package br.com.sicredi.challengeapi.controller;

import br.com.sicredi.challengeapi.dto.CreateAssociateDTO;
import br.com.sicredi.challengeapi.model.Associate;
import br.com.sicredi.challengeapi.service.AssociateService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/associates")
public class AssociateController {

    @Autowired
    AssociateService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createAssociate(@Valid @RequestBody CreateAssociateDTO associateDTO) {
        service.createAssociate(associateDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ArrayList<Associate> listAllAssociates() {
        return service.listAll();
    }

}
