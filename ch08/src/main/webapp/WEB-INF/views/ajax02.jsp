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
	var formData = {
			name: "먼지",
			email: "사랑해@",
			password: "1234",
			gender: "female"
	}
	$("#btn-getdata").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/02",
			async: true,
			type: "post",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded",
			data: $.param(formData),
			success: function(response){
				var htmls = "";
				htmls += ("<h1>"+response.no+"</h1>")
				htmls += ("<h2>"+response.name+"</h2>")
				htmls += ("<h3>"+response.gender+"</h3>")
				$("#data").html(htmls);
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
	<h1>Ajax Test02</h1>
	
	<button id="btn-getdata">데이터 보내기</button>
	<div id="data"></div>

</body>
</html>