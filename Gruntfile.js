//Grunt principal function, here is where we configurate and define the tasks
module.exports = function(grunt) {
    //grunt => grunt global object
    //initConfig => regular function of grunt where you define the initial configuration for all the tasks
    grunt.initConfig({
        foo: {
            name: "hola"
        },
        multi: {
            first: "1",
            second: "2",
            third: "3"
        }
    });

    //registerTask => function to define a basic task
    //registerTask("[name]", "[definition]", [task function]);
    //default => This task will run automatically if grunt is executed without specifying any task
    grunt.registerTask("default", "tarea por defecto a ejecutar", function() {
        grunt.log.writeln("Hola Mundo");
    });

    //registerMultiTask => function to define a task that performs various tasks
    //MultiTask needs the name of the task exist in the configuration by default, otherwise it will rise a exception
    grunt.registerMultiTask("multi", "ejecución de varias tareas", function() {
        grunt.log.writeln(this.target + ": " + this.data);
    });

    //Async Task
    grunt.registerTask("async", "tarea asincrona de prueba", function() {
        //with this line we tell the task to not end until we say it
        var done = this.async();
        grunt.log.writeln("Empezando prueba");
        setTimeout(function() {
            grunt.log.writeln("Terminando prueba");
            done();
        },10000);
    });
};