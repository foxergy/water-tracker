package de.daniel.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "de.daniel")
@EntityScan(basePackages = "de.daniel.model")
@EnableJpaRepositories(basePackages = "de.daniel.data_access")
public class Application {


    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }
}
