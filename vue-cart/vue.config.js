module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                 app.get('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        list: [ 
                            {text:'shampoo',price:100, id:1,count:1,active:true},
                            {text:'conditioner',price:100,id:2,count:1,active:true}
                        ] 
                    }); 
                }); 
            } 
        }
    } 
}