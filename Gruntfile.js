module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
    less: {
      dist: {
        files: {
        	
        'style.css': ['app.less'],
        'style2.css': ['app2.less'],
        'style3.css': ['app3.less'],
        'style4.css': ['app4.less']
          /*'style.css': [
            'app.less'
           ]*/
        },
        options: {
          compress: true
        }
      }
    },	
	
	watch: {
            styles: {
               options: {
                    spawn: false,
                    event: ["added", "deleted", "changed"]
                },
                files: [ "*.less"],
                tasks: [ "less" ]
            }
        }    
    
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks("grunt-contrib-watch");
    
  // Default task(s).
  grunt.registerTask('default', ['watch']);
  

};