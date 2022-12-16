package ch08.controller.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/01")
	public Object ajax01() {
		Map<String, Object> map = new HashMap<>();
		map.put("name", "둘리");
		map.put("age", 10);
		
		return map;
	}
}
