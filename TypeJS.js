
function TypeJS(){
	this.type 		= null;
	this.fn 		= null;
	return this;
}

TypeJS.prototype.check = function(){
	var scope 	= {};
	scope.valid = true;	
	for(var i = 0; i < arguments.length; i++){

		if(Object.prototype.toString.call(arguments[i]).toLowerCase() !== this.type){
			scope.valid = false;
			this.type 	= null;
			break;					
		}	
		else{
			if(this.fn){
				if(this.fn(arguments[i])){
					scope.valid 	= false;
					this.type 		= null;
					this.fn			= null;
					break;					
				}
			}		
		}	
	}
	return scope.valid;
};

TypeJS.prototype.isUndefined = function(){
	this.type = '[object undefined]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isString = function(){
	this.type = '[object string]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isObject = function(){
	this.type = '[object object]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isNumber = function(){
	this.type = '[object number]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isInteger = function(){
	this.type 	= '[object number]';
	this.fn 	= function(x){
		console.log(Math.floor(x).toString());
		console.log(x.toString());
		return !(Math.floor(x).toString() === x.toString());
	};
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isFunction = function(){
	this.type = '[object function]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isBoolean = function(){
	this.type = '[object boolean]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isArray = function(){
	this.type = '[object array]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isDate = function(){
	this.type = '[object date]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isNull = function(){
	this.type = '[object null]';
	return this.check.apply(this, arguments);
};

TypeJS.prototype.isRegExp = function(){
	this.type = '[object regexp]';
	return this.check.apply(this, arguments);
};