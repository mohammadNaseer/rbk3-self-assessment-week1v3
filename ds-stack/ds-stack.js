var Stack = function() {
    this._storage ={};
    var count=0;
    this.add = function(value){
    	count++;
    	_storage[count]=value;
    	return _storage[count];




      // write me
    };
    this.remove = function() {
    	var x=_storage[count];
    	delete _storage[count];
    	count--;
    	return x;
      // write me
    };
  };



