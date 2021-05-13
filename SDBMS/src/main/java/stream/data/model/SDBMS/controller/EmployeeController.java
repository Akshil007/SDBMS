package stream.data.model.SDBMS.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import stream.data.model.SDBMS.model.Employee;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

    private List<Employee> theEmployees;

    @PostConstruct
    private  void loadData() {
        Employee e1 = new Employee(1, "Alay", "Dhagia", "a@gmail.com");
        Employee e2 = new Employee(2, "Keyur", "Dhagia", "kd@gmail.com");
        Employee e3 = new Employee(3, "Satish", "Dhagia", "sd@gmail.com");
        Employee e4 = new Employee(4, "Kshama", "Dhagia", "ksd@gmail.com");

        theEmployees = new ArrayList<>();

        theEmployees.add(e1);
        theEmployees.add(e2);
        theEmployees.add(e3);
        theEmployees.add(e4);
    }

    @GetMapping("/list")
    public String listEmployees(Model theModel) {
        theModel.addAttribute("emps", theEmployees);
        return "list-employees";
    }

}
