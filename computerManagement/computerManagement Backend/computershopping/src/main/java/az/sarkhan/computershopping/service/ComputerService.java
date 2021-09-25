package az.sarkhan.computershopping.service;



import java.util.List;

import az.sarkhan.computershopping.model.Computer;

public interface ComputerService {
    Computer add(Computer c);
    List<Computer> getAll();
    void deleteAll();
    void deleteById(Integer id);
}
