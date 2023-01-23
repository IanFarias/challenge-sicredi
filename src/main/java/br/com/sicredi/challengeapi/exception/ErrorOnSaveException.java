package br.com.sicredi.challengeapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ErrorOnSaveException extends Exception {

    public ErrorOnSaveException() {
        super("Error on save");
    }
}
