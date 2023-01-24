package br.com.sicredi.challengeapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class VotingSessionClosedExpcetion extends Exception {
    public VotingSessionClosedExpcetion() {
        super("Voting Session is Closed");
    }
}
