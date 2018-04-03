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

    //Required Tasks
    //In this example this task need that the task "async" run before this otherwise it will rise a exception
    //If we run this task in the console alone it always rise a exception because we need the task run in the same instance
    grunt.registerTask("req", "tarea que requiere de otra tarea", function() {
        grunt.task.requires("async");
        grunt.log.writeln("La tarea termino sin errores");
    });

    //Here we define the execution of the 2 previous tasks in one task to see we how it works the required tasks
    grunt.registerTask("reqasync", ["async", "req"]);
};