package lk.ijse.absd.service;

import lk.ijse.absd.dto.UserDTO;

import java.util.List;

public interface UserService {
    public boolean saveUsers(UserDTO userDTO);
    public boolean deleteUsers(String id);
    public boolean updateUsers(UserDTO userDTO);
    public List<UserDTO>findAllUsers();
    public UserDTO findById(String id);
}
