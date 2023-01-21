package br.com.sicredi.challengeapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "associates")
public class Associate {

    @Id
    private UUID id;
    @Column
    private String name;

    @Column
    private String cpf;
}