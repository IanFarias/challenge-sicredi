package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "topics")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String title;

    @Column
    private String description;

    @OneToOne(mappedBy = "topic")
    private VotingSession session;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
