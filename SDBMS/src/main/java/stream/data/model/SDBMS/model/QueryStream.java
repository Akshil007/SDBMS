package stream.data.model.SDBMS.model;

public class QueryStream {

    private String username;
    private String streamid;
    private int queryid;
    private String query;

    public QueryStream(String username, String streamid, int queryid, String query) {
        this.username = username;
        this.streamid = streamid;
        this.queryid = queryid;
        this.query = query;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStreamid() {
        return streamid;
    }

    public void setStreamid(String streamid) {
        this.streamid = streamid;
    }

    public int getQueryid() {
        return queryid;
    }

    public void setQueryid(int queryid) {
        this.queryid = queryid;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
}
