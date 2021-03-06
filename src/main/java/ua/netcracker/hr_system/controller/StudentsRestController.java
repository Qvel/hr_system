package ua.netcracker.hr_system.controller;

/**
 * Created by Серый on 02.05.2016.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.netcracker.hr_system.model.dao.daoInterface.CandidateDAO;
import ua.netcracker.hr_system.model.entity.Candidate;
import java.util.List;


@RestController
public class StudentsRestController {

    @Autowired
    private CandidateDAO candidat;

    @RequestMapping(value = "/getStudents", method = RequestMethod.GET)
    public ResponseEntity<List<Candidate>> listAllStudents() {

        List<Candidate> students = candidat.getAllAnketsCandidates();

        if(students.isEmpty()){
            return new ResponseEntity<List<Candidate>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Candidate>>(students, HttpStatus.OK);
    }

}