package lk.ijse.absd.service.impl;

import lk.ijse.absd.dto.UserDTO;
import lk.ijse.absd.entity.User;
import lk.ijse.absd.repository.UserRepository;
import lk.ijse.absd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveUsers(UserDTO userDTO) {
        User user =new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setAddress(userDTO.getAddress());
        userRepository.save(user);
        return true;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteUsers(String id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updateUsers(UserDTO userDTO) {
        User user =new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setAddress(userDTO.getAddress());
        if(userRepository.existsById(userDTO.getId())){
            userRepository.save(user);
            return true;
        }else
        {
            return false;
        }
    }

    @Override
    public List<UserDTO> findAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOS =new ArrayList<>();
        for (User user : users) {
            UserDTO userDTO =new UserDTO();
            userDTO.setId(user.getId());
            userDTO.setName(user.getName());
            userDTO.setAddress(user.getAddress());
            userDTOS.add(userDTO);
        }
        return userDTOS;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public UserDTO findById(String id) {
        User user = userRepository.findById(id).get();
        UserDTO userDTO =new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setAddress(user.getAddress());
        return userDTO;

    }
}
