package de.daniel.service.service_api;

import java.util.Collection;

public interface GenericServiceApi<T, ID> {

    public Collection<T> findAll();

    public T findOne(ID id);

    public T update(T t);

    public Boolean delete(ID ident);

    public T save(T t);
}
