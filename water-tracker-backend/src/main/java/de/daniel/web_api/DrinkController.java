package de.daniel.web_api;

import de.daniel.model.Drink;
import de.daniel.service.service_api.DrinkServiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController(value = "/drink")
@CrossOrigin(origins = "*")
public class DrinkController {

    @Autowired
    private DrinkServiceApi drinkServiceApi;

    @GetMapping(
            value = "drinks",
            produces = "application/json"
    )
    public ResponseEntity<Collection<Drink>> getAllDrinks(){
        return new ResponseEntity<>(drinkServiceApi.findAll(), HttpStatus.OK);
    }

    @GetMapping(
            value = "drinks/today",
            produces = "application/json"
    )
    public ResponseEntity getAllDrinksToday(){
        List<Drink> todaysDrinks = new ArrayList<Drink>();
        drinkServiceApi.findAll().forEach(drink -> {
            if(drink.getDateTime().getDayOfMonth() == (LocalDateTime.now().getDayOfMonth()) &&
                    drink.getDateTime().getMonthValue() == LocalDateTime.now().getMonthValue() &&
                    drink.getDateTime().getYear() == LocalDateTime.now().getYear()){
                todaysDrinks.add(drink);
            }
        });
        return new ResponseEntity<>(todaysDrinks, HttpStatus.OK);
    }


    @GetMapping(
            value = "drinks/{id}",
            produces = "application/json"
    )
    public ResponseEntity<Drink> getAllDrinks(@PathVariable Long id){
        return new ResponseEntity<>(drinkServiceApi.findOne(id), HttpStatus.OK);
    }

    @PostMapping(
            value="drinks",
            consumes = "application/json",
            produces = "application/json"
    )
    public ResponseEntity<Drink> postDrink(@RequestBody Drink drink){
        return new ResponseEntity<>(drinkServiceApi.save(drink), HttpStatus.CREATED);
    }

    @DeleteMapping(
            value = "drinks/{id}"
    )
    public ResponseEntity<Boolean> deleteDrink(@PathVariable Long id){
        return new ResponseEntity<>(drinkServiceApi.delete(id), HttpStatus.ACCEPTED);
    }

    @PutMapping(
            value="drinks"
    )
    public ResponseEntity<Drink> updateDrink(@RequestBody Drink drink){
        try{
           return new ResponseEntity<>(drinkServiceApi.update(drink), HttpStatus.ACCEPTED);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}
