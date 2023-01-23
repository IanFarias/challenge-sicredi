package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAssociateDTO {

    @NotNull
    String name;

    @NotNull
    @Size(max = 11)
    String cpf;
}
