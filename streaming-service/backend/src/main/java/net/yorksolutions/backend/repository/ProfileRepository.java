package net.yorksolutions.backend.repository;

import net.yorksolutions.backend.model.ProfileModel;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<ProfileModel, Long> {
}
