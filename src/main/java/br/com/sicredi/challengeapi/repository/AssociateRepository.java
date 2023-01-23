package br.com.sicredi.challengeapi.repository;

import br.com.sicredi.challengeapi.model.Associate;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface AssociateRepository extends CrudRepository<Associate, Long> {

    ArrayList<Associate> findAll();
}
