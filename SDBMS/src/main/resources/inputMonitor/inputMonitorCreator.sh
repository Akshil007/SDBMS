mkdir ./src/main/resources/inputMonitor/$1
cp -R ./src/main/resources/inputMonitor/inputMonitor_SDBMS ./src/main/resources/inputMonitor/$1/$1
find ./src/main/resources/inputMonitor/$1/ -type f -exec sed -i "s/inputMonitor_SDBMS/$1/g" {} +
find ./src/main/resources/inputMonitor/$1/ -type f -exec sed -i "s/userid_streamid/$1/g" {} +
mv ./src/main/resources/inputMonitor/$1/$1/src/main/java/userid_streamid.java ./src/main/resources/inputMonitor/$1/$1/src/main/java/$1.java
mv ./src/main/resources/inputMonitor/$1/$1/inputMonitor_SDBMS.iml ./src/main/resources/inputMonitor/$1/$1/$1.iml
mvn -f ./src/main/resources/inputMonitor/$1/$1/pom.xml clean install
mv ./src/main/resources/inputMonitor/$1/$1/target/$1.jar ./src/main/resources/inputMonitor
rm -rf ./src/main/resources/inputMonitor/$1
nohup java -jar "./src/main/resources/inputMonitor/$1.jar" "$2" > /home/akshil/Desktop/error.txt &
