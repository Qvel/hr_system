package ua.netcracker.hr_system.model.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.netcracker.hr_system.model.dao.daoInterface.QuestionDAO;
import ua.netcracker.hr_system.model.entity.Question;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Серый on 05.05.2016.
 */
@Service("typeQuestion")
public class QuestionServiceIml {

    @Autowired
    QuestionDAO questionDAO;

    public List<Question> getTypeOfQuestion(){
        return questionDAO.findType();
    }

    public int getQuantityQuestions(){
        return  questionDAO.findQuantityQuestions();
    }

    public void setQuestion(Question question){
        questionDAO.insert(question);
    }

}
