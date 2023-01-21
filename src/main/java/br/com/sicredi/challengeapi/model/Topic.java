package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;


@Entity
@Table(name = "topics")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
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
