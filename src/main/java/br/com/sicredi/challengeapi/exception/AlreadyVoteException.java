package br.com.sicredi.challengeapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyVoteException extends Exception {
    public AlreadyVoteException() {
        super("Already Vote");
    }
}
