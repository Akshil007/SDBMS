package stream.data.model.SDBMS.model;

public class StreamUser {


    private String Username;
    private String Firstname;
    private String Lastname;
    private String pass_word;
    private String Email;
    private String Organization;

    public StreamUser(String username, String firstname, String lastname, String pass_word, String email, String organization) {
        Username = username;
        Firstname = firstname;
        Lastname = lastname;
        this.pass_word = pass_word;
        Email = email;
        Organization = organization;
    }


    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getFirstname() {
        return Firstname;
    }

    public void setFirstname(String firstname) {
        Firstname = firstname;
    }

    public String getLastname() {
        return Lastname;
    }

    public void setLastname(String lastname) {
        Lastname = lastname;
    }

    public String getPass_word() {
        return pass_word;
    }

    public void setPass_word(String pass_word) {
        this.pass_word = pass_word;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getOrganization() {
        return Organization;
    }

    public void setOrganization(String organization) {
        Organization = organization;
    }
}
