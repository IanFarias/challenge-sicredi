package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "votes")
public class Vote {

    @Id
    private UUID id;

    @Column
    private boolean vote;

    @OneToOne()
    @JoinColumn(name = "topic_id")
    private Topic topic;

    @OneToOne
    @JoinColumn(name = "associate_id")
    private Associate associate;


}
