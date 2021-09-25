package az.sarkhan.computershopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.sarkhan.computershopping.model.Computer;
import az.sarkhan.computershopping.repository.ComputerRepository;
import az.sarkhan.computershopping.service.ComputerService;

@RestController
@RequestMapping(path = "/computers")
@CrossOrigin(origins = "*")
public class ComputerRestController {

  @Autowired
  private ComputerService computerService;

  @Autowired
  private ComputerRepository cr;
  @PostMapping
  public Computer add(@RequestBody Computer computer){
    return computerService.add(computer);

  } 
  @GetMapping(path = "/get")
  public List<Computer> getAll(){
      return  cr.findAll();
  } 
  @DeleteMapping(path = "/deleteAll")
  public void deleteAll(){
      computerService.deleteAll();
  }

  @DeleteMapping(value = "/{id}")
	public void deleteTaskById(@PathVariable Integer id){
		 
			 computerService.deleteById(id);
		 
		
	} 

}