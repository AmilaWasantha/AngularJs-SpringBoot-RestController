package lk.ijse.absd.repository;

import lk.ijse.absd.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
