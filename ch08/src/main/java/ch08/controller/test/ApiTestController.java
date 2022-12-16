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
	
	@RequestMapping("/02")
	public String ajax02() {
		return "ajax02";
	}
	
	@RequestMapping("/03")
	public String ajax03() {
		return "ajax03";
	}
	
}
