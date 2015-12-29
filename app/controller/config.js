exports.setResponse = function(res){
	//设置允许跨域，方便测试
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With'
    });
}