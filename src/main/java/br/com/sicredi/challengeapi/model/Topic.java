package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "topics")
public class Topic {
    @Id
    private UUID id;
    @Column
    private String title;

    @Column
    private String description;

    @OneToOne(mappedBy = "topic")
    private VotingSession session;
}
