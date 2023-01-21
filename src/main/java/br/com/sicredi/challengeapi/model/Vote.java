package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name = "votes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
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
