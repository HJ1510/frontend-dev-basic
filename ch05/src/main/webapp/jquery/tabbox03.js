var tabBox = {
	//_init: function(){
	//	$(".tab-box li").click(tabBox._onTabClicked);		
	//},
	
	/* 방법 1*/
	_liSelected: null,
	
	_init: function(){
		$(".tab-box li").click(this._onTabClicked);		
	},
	
	_onTabClicked: function(){
		if(tabBox._liSelected){
			$(tabBox._liSelected).removeClass("selected");
		}
		$(this).addClass("selected");
		tabBox._liSelected = this;
	},
	
	init: function(){
		$(this._init.bind(this));		
	}
}