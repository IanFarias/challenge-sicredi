package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class RegisterTopicDTO {
    @NotNull
    String title;
    @NotNull
    String description;
}
