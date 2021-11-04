package com.blog.backend.MongoRepository;

import com.blog.backend.Document.Posts;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Posts, String> {

}
