package com.blog.backend.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("post")
@Getter
@Setter
@AllArgsConstructor
public class Posts {
    @Id
    private String id;
    private String title;
    private String content;
}
