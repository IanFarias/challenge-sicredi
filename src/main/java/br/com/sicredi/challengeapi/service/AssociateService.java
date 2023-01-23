package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateAssociateDTO;
import br.com.sicredi.challengeapi.mapper.AssociateMapper;
import br.com.sicredi.challengeapi.model.Associate;
import br.com.sicredi.challengeapi.repository.AssociateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssociateService {

    @Autowired
    AssociateRepository repository;

    public void createAssociate(CreateAssociateDTO associateDTO) {
        Associate associate = AssociateMapper.fromDtoToEntity(associateDTO);

        repository.save(associate);
    }
}
