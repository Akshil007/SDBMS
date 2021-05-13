package stream.data.model.SDBMS.model;

public class Stream {

    private String username;
    private String streamid;
    private String sname;
    private String source;
    private String link;
    private String windowType;
    private int windowVelocity;
    private int windowSize;
    private String windowing;

    public Stream(String username, String streamid, String sname, String source, String link, String windowType, int windowVelocity, int windowSize, String windowing) {
        this.username = username;
        this.streamid = streamid;
        this.sname = sname;
        this.source = source;
        this.link = link;
        this.windowType = windowType;
        this.windowVelocity = windowVelocity;
        this.windowSize = windowSize;
        this.windowing = windowing;
    }

    public String getWindowing() {
        return windowing;
    }

    public void setWindowing(String windowing) {
        this.windowing = windowing;
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

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getWindowType() {
        return windowType;
    }

    public void setWindowType(String windowType) {
        this.windowType = windowType;
    }

    public int getWindowVelocity() {
        return windowVelocity;
    }

    public void setWindowVelocity(int windowVelocity) {
        this.windowVelocity = windowVelocity;
    }

    public int getWindowSize() {
        return windowSize;
    }

    public void setWindowSize(int windowSize) {
        this.windowSize = windowSize;
    }
}
