import java.util.*; 

import java.sql.Timestamp;

class stream_name_streamid {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello");
        // long startTime = System.currentTimeMillis();
        // Thread.sleep(-10000);
        // long stopTime = System.currentTimeMillis();

        // System.out.println(stopTime-startTime);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        System.out.println(timestamp.getTime()); 
    } 
}








// create table forex_data_table1 ( Item VARCHAR(255),LastPrice INT,DailyRangeLow INT,DailyRangeHigh INT );


// cp -R inputMonitor_SDBMS temp_copy/Alay_123
// find . -type f -exec sed -i 's/inputMonitor_SDBMS/Alay_123/g' {} +
// find . -type f -exec sed -i 's/userid_streamid/Alay_123/g' {} +
// find . -name 'userid_streamid.java' -type f -exec bash -c 'mv "$1" "/home/alay/workspace/temp_copy/Alay_123/src/main/java/Alay_123.java"' -- {} \;
// mv inputMonitor_SDBMS.iml Alay_123.iml
// mvn clean install
// mv target/Alay_123.jar /home/alay/Desktop





// cp -R ./src/main/resources/inputMonitor/inputMonitor_SDBMS Alay_123 //--