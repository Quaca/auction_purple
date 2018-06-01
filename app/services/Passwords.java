package services;


import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Random;

public class Passwords {

    public static byte[] getSalt(){
        Random random = new  SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return salt;
    }

    public static String hash(String password, byte[] salt){
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA-1");
        }
        catch (NoSuchAlgorithmException e){
            e.printStackTrace();
        }
        md.update(salt);
        byte[] digest = md.digest(password.getBytes());
        return DatatypeConverter.printHexBinary(digest);
    }

}
