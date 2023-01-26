package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateVoteDTO(
        @NotNull
        String associateCpf,
        @NotNull
        @NotBlank
        String vote) {
}
