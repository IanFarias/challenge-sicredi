package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateTopicDTO(
        @NotNull
        @NotBlank
        String title,

        @NotNull
        @NotBlank
        String description) {
}
