package de.daniel.service.service_impl;

import de.daniel.data_access.DrinkRepository;
import de.daniel.model.Drink;
import de.daniel.service.service_api.DrinkServiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;

@Service
public class DrinkService implements DrinkServiceApi {

    @Autowired
    private DrinkRepository drinkRepository;

    @Override
    public Collection<Drink> findAll() {
        return drinkRepository.findAll();
    }

    @Override
    public Drink findOne(Long id) {
        return drinkRepository.getOne(id);
    }

    @Override
    public Drink update(Drink drink) throws EntityNotFoundException{
        if(exists(drink.getId())){
            drinkRepository.save(drink);
        }else{
            throw new EntityNotFoundException("Drink with id: "+drink.getId()+ " not found");
        }
        return null;
    }

    @Override
    public Boolean delete(Long id) {
        if(exists(id)){
            drinkRepository.deleteById(id);
        }else{
            throw new EntityNotFoundException("Drink with id: "+id+ " not found");
        }
        return null;
    }

    @Override
    public Drink save(Drink drink) {
        return drinkRepository.save(drink);
    }

    private boolean exists(Long id){
        return (findOne(id) != null);
    }
}
