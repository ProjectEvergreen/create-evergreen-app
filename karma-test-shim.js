/* istanbul ignore file */
// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// Then we find all the tests.
const context = require.context('./src', true, /\.spec\.js$/);

// And load the modules.
context.keys().map(context);

// Finally, start Karma to run the tests.
__karma__.start();