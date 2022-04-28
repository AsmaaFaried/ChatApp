const driversController=require('../controllers/drivers_controller');

module.exports=(app)=>{
    app.get('/api/driver',driversController.all);
    app.post('/api/driver',driversController.create_driver);
    app.put('/api/driver/:id',driversController.edit);
    app.delete('/api/driver/:id',driversController.delete);
    app.get('/api/driver/:id',driversController.details);

}