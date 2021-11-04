package com.blog.backend.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("comment")
@Getter
@Setter
@AllArgsConstructor
public class Comments {
    @Id
    private String id;
    private String page;
    private String name;
    private String comment;
}
