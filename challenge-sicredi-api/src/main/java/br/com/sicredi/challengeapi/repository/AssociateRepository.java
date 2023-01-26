package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.Associate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AssociateRepository extends JpaRepository<Associate, Long> {

    Associate findByCpf(String cpf);
}
