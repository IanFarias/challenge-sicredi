package br.com.sicredi.challengeapi.utils;

import java.util.InputMismatchException;

public class ValidCPF {

    public static boolean isCPF(String CPF) {
        if (CPF.equals("00000000000") ||
                CPF.equals("11111111111") ||
                CPF.equals("22222222222") || CPF.equals("33333333333") ||
                CPF.equals("44444444444") || CPF.equals("55555555555") ||
                CPF.equals("66666666666") || CPF.equals("77777777777") ||
                CPF.equals("88888888888") || CPF.equals("99999999999") ||
                (CPF.length() != 11))
            return(false);

        char firstDigit, secondDigit;

        try {
            firstDigit = calculateDigit(CPF, 10);
            secondDigit = calculateDigit(CPF, 11);

            if ((firstDigit == CPF.charAt(9)) && (secondDigit == CPF.charAt(10)))
                return(true);
            else return(false);
        } catch (InputMismatchException erro) {
            return(false);
        }
    }

    private static char calculateDigit(String CPF, int wheight) {
        int sumDigit = 0, result = 0, number = 0;
        int length = wheight == 10 ? 9 : 10;
        char digit;

        for (int i = 0; i < length; i++) {
            number = (int)(CPF.charAt(i) - 48);
            sumDigit = sumDigit + (number * wheight);
            wheight = wheight - 1;
        }

        result = 11 - (sumDigit % 11);
        if ((result == 10) || (result == 11))
            digit = '0';
        else digit = (char)(result + 48);

        return digit;
    }
}
