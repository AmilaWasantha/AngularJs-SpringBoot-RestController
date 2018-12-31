package lk.ijse.absd.controller;

import lk.ijse.absd.dto.UserDTO;
import lk.ijse.absd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    public UserService userService;


    @PutMapping(value ="/saveUser")
    public boolean saveUsers(@RequestBody UserDTO userDTO){
        return userService.saveUsers(userDTO);
    }

    @PostMapping(value = "/updateUser")
    public boolean updateUsers(@RequestBody UserDTO userDTO){
        return userService.updateUsers(userDTO);
    }

    @GetMapping(value =  "/{id}")
    public UserDTO findById(@PathVariable("id") String id){
        return userService.findById(id);
    }

    @GetMapping(value = "/getAllUsers")
    public List<UserDTO>getAllUsers(){
        return userService.findAllUsers();
    }

    @DeleteMapping(value = "/{id}")
    public boolean deleteUser(@PathVariable("id")String id){
       return userService.deleteUsers(id);
    }





}
