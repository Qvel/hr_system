package ua.netcracker.hr_system.controller;

/**
 * Created by Серый on 05.05.2016.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.netcracker.hr_system.model.dao.daoInterface.CandidateDAO;
import ua.netcracker.hr_system.model.dao.daoInterface.QuestionDAO;
import ua.netcracker.hr_system.model.entity.Candidate;
import ua.netcracker.hr_system.model.entity.Question;
import ua.netcracker.hr_system.model.service.serviceImpl.QuestionServiceIml;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class GetTypeOfQuestionsRestController {

    @Autowired
    private QuestionServiceIml questionServiceIml;

    @RequestMapping(value = "/getTypeOfQuestions", method = RequestMethod.GET)
    public ResponseEntity<List<Question>> typeAllQuestions() {

        List<Question> questions = questionServiceIml.getTypeOfQuestion();

        return new ResponseEntity(questions, HttpStatus.OK);
    }

    @RequestMapping(value = "/getQuantityQuestions", method = RequestMethod.GET)
    public ResponseEntity<Integer> getQuantityQuestions() {

        int QuantityQuestions = questionServiceIml.getQuantityQuestions();

        return new ResponseEntity(QuantityQuestions, HttpStatus.OK);
    }

    @RequestMapping(value = "/setQuestion", method = RequestMethod.GET)
    public ResponseEntity<Question> setQuestion(
            @RequestParam String caption,
            @RequestParam int curse_id,
            @RequestParam String typeValue,
            @RequestParam List<String> additionValue,
            @RequestParam boolean isMandatory,
            @RequestParam int orderNumber
    ) {

       Question question = new Question();
       question.setOrderNumber(orderNumber);
       question.setCaption(caption);
       question.setCourseId(curse_id);
       question.setTypeValue(typeValue);
       question.setMandatory(isMandatory);
       question.setAdditionValue(additionValue);

       questionServiceIml.setQuestion(question);

        return new ResponseEntity(question, HttpStatus.OK);
    }

}
