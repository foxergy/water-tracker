package de.daniel.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "drink_generator")
    @SequenceGenerator(name="drink_generator", sequenceName = "drink_seq", initialValue = 1, allocationSize = 1)
    private Long id;

    private LocalDateTime dateTime;
    private String name;
    private double amount;

    public Drink(Long id, LocalDateTime dateTime, String name, double amount) {
        this.id = id;
        this.dateTime = dateTime;
        this.name = name;
        this.amount = amount;
    }

    public Drink(LocalDateTime dateTime, String name, double amount) {
        this.dateTime = dateTime;
        this.name = name;
        this.amount = amount;
    }

    public Drink() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
