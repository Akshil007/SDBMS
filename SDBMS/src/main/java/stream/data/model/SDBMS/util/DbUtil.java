package stream.data.model.SDBMS.util;

import org.springframework.stereotype.Service;
import stream.data.model.SDBMS.model.QueryStream;
import stream.data.model.SDBMS.model.Stream;
import stream.data.model.SDBMS.model.StreamUser;

import java.sql.*;
import java.util.ArrayList;

@Service
public class DbUtil {

    public int registerNewUser(StreamUser curr) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");
            String sql = "INSERT INTO user_details VALUES (" +
                    "\"" + curr.getUsername() +
                    "\", \"" + curr.getFirstname() +
                    "\", \"" + curr.getLastname() +
                    "\" , \"" + curr.getPass_word() +
                    "\", \"" + curr.getEmail() +
                    "\",\"" + curr.getPass_word() + "\")";

            Statement stmt = con.createStatement();
            stmt.executeUpdate(sql);
            return 1;
        } catch (Exception e) {
            return -1;
        }

    }

    public StreamUser getUserDetails(String userName) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");

        String sql = "SELECT * FROM user_details where Username = \'" + userName + "\'";
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(sql);
        rs.next();

        StreamUser xx = new StreamUser(rs.getString("Username"), rs.getString("Firstname"), rs.getString("Lastname")
                , "HAHA", rs.getString("Email"), rs.getString("Organization"));
        return xx;


    }

    public ArrayList<Stream> getStreamDetails(String userName) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");

        String sql = "SELECT * FROM stream_details where username = \'" + userName + "\'";
        Statement stmt = con.createStatement();

        ResultSet rs = stmt.executeQuery(sql);

        ArrayList<Stream> retArr = new ArrayList<Stream>();
        while(rs.next()) {
            Stream temp = new Stream(rs.getString("username"), rs.getString("streamid")
            , rs.getString("sname"), rs.getString("source"), rs.getString("link")
            , rs.getString("windowType"), rs.getInt("windowVelocity"), rs.getInt("windowSize"), rs.getString("windowing"));
            retArr.add(temp);
        }

        return retArr;


    }

    public ArrayList<QueryStream> getQueries(String username, String streamid) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");

        String sql = "SELECT * FROM query_details where username = \'" + username + "\' and streamid = \'"+streamid+"\'";
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(sql);

        ArrayList<QueryStream> retArr = new ArrayList<QueryStream>();
        while(rs.next()) {
            QueryStream temp = new QueryStream(rs.getString("username"), rs.getString("streamid"),
                    rs.getInt("queryid"), rs.getString("query") );
            retArr.add(temp);
        }

        return retArr;
    }

    public boolean checkStreamName(String streamname) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");

        String sql = "SELECT * FROM stream_details where sname = \'" + streamname + "\'";

        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(sql);

        if(rs.next()) return true;

        return false;

    }

    public void insertNewStream(Stream newInsert) throws Exception{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");

        String sql = "INSERT INTO stream_details VALUES ('"
                + newInsert.getUsername() + "','"
                + newInsert.getStreamid() + "','"
                + newInsert.getSname() + "','"
                + newInsert.getSource() + "','"
                + newInsert.getLink() + "','"
                + newInsert.getWindowType() + "','"
                + newInsert.getWindowVelocity() + "','"
                + newInsert.getWindowSize() + "','"
                + newInsert.getWindowing() + "')";

        Statement stmt = con.createStatement();
        stmt.executeUpdate(sql);
    }

    public void insertNewQueryDetails(QueryStream queryIns) throws  Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");
        String sql = "INSERT INTO query_details VALUES ('"
                + queryIns.getUsername() + "','"
                + queryIns.getStreamid() + "','"
                + queryIns.getQueryid() + "','"
                + queryIns.getQuery() + "')";

        Statement stmt = con.createStatement();
        stmt.executeUpdate(sql);
    }

    public ResultSet getData(String username, String streamid, String queryid) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/sdbms?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","akshil","akshil99");
        String sql = "SELECT * FROM " + username + "_" + streamid + "_table" + queryid;
        Statement stmt = con.createStatement();
        return stmt.executeQuery(sql);
    }
}
