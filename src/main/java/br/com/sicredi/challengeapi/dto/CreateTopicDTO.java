package br.com.sicredi.challengeapi.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CreateTopicDTO {
    @NotNull
    String title;
    @NotNull
    String description;
}
