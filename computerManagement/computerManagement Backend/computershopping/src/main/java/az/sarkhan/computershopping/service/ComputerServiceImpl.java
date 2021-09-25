package az.sarkhan.computershopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import az.sarkhan.computershopping.model.Computer;
 
import az.sarkhan.computershopping.repository.ComputerRepository;
@Service
public class ComputerServiceImpl implements ComputerService {

   
    @Override
    public List<Computer> getAll() {
        
        return null;
    }

    @Override
    public void deleteById(Integer id) {
         computerRepository.deleteById(id);
        
    }

    @Override
    public void deleteAll() {
       computerRepository.deleteAll();
        
    }

    @Autowired
    private ComputerRepository computerRepository;
    
    @Override
    public Computer add(Computer c){
Computer savedComputer=computerRepository.save(c);
        return savedComputer;


    }
}
