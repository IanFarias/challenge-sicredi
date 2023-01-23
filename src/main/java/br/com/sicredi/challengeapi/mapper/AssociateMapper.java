package br.com.sicredi.challengeapi.mapper;

import br.com.sicredi.challengeapi.dto.CreateAssociateDTO;
import br.com.sicredi.challengeapi.model.Associate;

public class AssociateMapper {

    public static Associate fromDtoToEntity(CreateAssociateDTO associateDTO) {
        Associate associate = new Associate();

        associate.setName(associateDTO.name());
        associate.setCpf(associateDTO.cpf());

        return associate;
    }
}
