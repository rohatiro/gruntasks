//Grunt principal function, here is where we configurate and define the tasks
module.exports = function(grunt) {
    //grunt => grunt global object
    //initConfig => regular function of grunt where you define the initial configuration for all the tasks
    grunt.initConfig({
        foo: {
            name: "hola"
        }
    });

    //registerTask => function to define a basic task
    //registerTask("[name]", "[definition]", [task function]);
    grunt.registerTask("default", "tarea por defecto a ejecutar", function() {
        grunt.log.writeln("Hola Mundo");
    });
};