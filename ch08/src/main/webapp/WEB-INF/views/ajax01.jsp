<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src='${pageContext.request.contextPath }/assets/js/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	$("#btn-getdata").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/01",
			async: true,
			type: "get",
			dataType: "json",
			success: function(response){
				console.log(response.name + ":" + response.age);
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
console.log($().jquery);

</script>
</head>
<body>
	<h1>Ajax Test01</h1>
	
	<button id="btn-getdata">데이터 가져오기</button>
	<div id="data"></div>

</body>
</html>