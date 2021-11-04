//package com.blog.backend.Service;
//
//import com.blog.backend.Document.PostDoc;
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
//import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
//import org.springframework.stereotype.Component;
//
//@RequiredArgsConstructor
//@Component
//public class PostModelListener extends AbstractMongoEventListener<PostDoc> {
//    private final SequenceGeneratorService sequenceGeneratorService;
//
//    @Override
//    public void onBeforeConvert(BeforeConvertEvent<PostDoc> event) {
//        event.getSource().setId(sequenceGeneratorService.generateSequence(PostDoc.SEQUENCE_NAME));
//    }
//}
