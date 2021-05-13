package stream.data.model.SDBMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


//@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@SpringBootApplication
public class SdbmsApplication {
	public static void main(String[] args) {
		SpringApplication.run(SdbmsApplication.class, args);
	}
}
