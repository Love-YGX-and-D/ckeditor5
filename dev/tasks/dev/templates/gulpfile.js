/* jshint node: true, esnext: true */

'use strict';

const gulp = require( 'gulp' );

const config = {
	ROOT_DIR: '.',
	WORKSPACE_DIR: '..',

	// Files ignored by jshit and jscs tasks. Files from .gitignore will be added automatically during tasks execution.
	IGNORED_FILES: [ 'lib/**' ]
};

require( './dev/tasks/lint/tasks' )( config );
gulp.task( 'pre-commit', [ 'lint-staged' ] );
