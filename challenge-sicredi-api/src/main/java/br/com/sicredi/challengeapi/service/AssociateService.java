package br.com.sicredi.challengeapi.service;

import br.com.sicredi.challengeapi.dto.CreateAssociateDTO;
import br.com.sicredi.challengeapi.exception.AlreadyExistsException;
import br.com.sicredi.challengeapi.exception.InvalidCpfException;
import br.com.sicredi.challengeapi.exception.NotFoundException;
import br.com.sicredi.challengeapi.mapper.AssociateMapper;
import br.com.sicredi.challengeapi.model.Associate;
import br.com.sicredi.challengeapi.repository.AssociateRepository;
import br.com.sicredi.challengeapi.utils.ValidCPF;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssociateService {

    @Autowired
    private AssociateRepository repository;

    public void create(CreateAssociateDTO associateDTO) throws AlreadyExistsException, InvalidCpfException {
        if(!ValidCPF.isCPF(associateDTO.cpf())) {
            throw new InvalidCpfException();
        }
        boolean alreadyExists = repository.existsByCpf(associateDTO.cpf());

        if(alreadyExists) {
            throw new AlreadyExistsException();
        }

        Associate associate = AssociateMapper.fromDtoToEntity(associateDTO);

        repository.save(associate);
    }

    public List<Associate> listAll() {
        List<Associate> associates = repository.findAll();

        return associates;
    }

    protected Associate findById(Long id) throws NotFoundException {
        Optional<Associate> associate = repository.findById(id);

        if(associate.isEmpty()) {
            throw new NotFoundException("Associate Not Found");
        }

        return associate.get();
    }

    protected Associate findByCpf(String cpf) throws NotFoundException {
        Associate associate = repository.findByCpf(cpf);

        if (associate == null) {
            throw new NotFoundException("Associate Not Found");
        }

        return associate;
    }
}
