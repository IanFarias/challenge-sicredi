package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateAssociateDTO(
        @NotNull
        @NotBlank
        String name,

        @NotNull
        @NotBlank
        String cpf) {
}
