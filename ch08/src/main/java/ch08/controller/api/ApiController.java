package ch08.controller.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.vo.UserVo;

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
	
	@ResponseBody
	@RequestMapping(value="/02", method=RequestMethod.POST)
	public Object ajax02(UserVo userVo) {
		userVo.setNo(10L);		
		return userVo;
	}
	
	@ResponseBody
	@RequestMapping(value="/03", method=RequestMethod.POST)
	public Object ajax03(@RequestBody UserVo userVo) { // JSON.stringify을 UserVo로 바꾸는...
		System.out.println(userVo);
		userVo.setNo(10L);		
		return userVo;
	}
}
