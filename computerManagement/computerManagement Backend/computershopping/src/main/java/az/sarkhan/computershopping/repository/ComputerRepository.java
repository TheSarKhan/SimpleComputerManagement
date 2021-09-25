package az.sarkhan.computershopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import az.sarkhan.computershopping.model.Computer;

public interface ComputerRepository extends JpaRepository<Computer,Integer> {
    
}
