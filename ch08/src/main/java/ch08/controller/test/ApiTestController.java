package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ajax")
public class ApiTestController {

	@RequestMapping("/01")
	public String ajax01() {
		return "ajax01";
	}
	
	
}
