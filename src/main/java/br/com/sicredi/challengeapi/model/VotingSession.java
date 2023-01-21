package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Data
@Entity
@Table(name = "voting_sessions")
public class VotingSession {
    @Id
    private UUID id;

    @Column
    private LocalDateTime started_at;

    @Column
    private LocalDateTime finished_at;

    @OneToMany
    @JoinColumn(name = "id")
    private ArrayList<Vote> votesList;

    @OneToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;
}