package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "voting_sessions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class VotingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDateTime started_at;

    @Column
    private LocalDateTime finished_at;

    @Column
    boolean open = true;

    @Column
    Long duration;

    @OneToMany(mappedBy = "votingSession", cascade = CascadeType.ALL)
    private List<Vote> votesList;

    @OneToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;
}