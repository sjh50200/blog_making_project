package com.blog.backend.MongoRepository;

import com.blog.backend.Document.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<Comments, String> {
}
