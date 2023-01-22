package br.com.sicredi.challengeapi.model;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "associates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Associate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;

    @Column
    private String cpf;
}