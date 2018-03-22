import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

// include through webpack.ProvidePlugin
// import 'jquery/dist/jquery.slim'
// import 'popper.js/dist/umd/popper'

// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';

// include through webpack.ProvidePlugin with exports-loader
// import 'bootstrap/js/dist/util'

// Since beta.3, jquery plugins are no longer imported automatically
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tooltip';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/scss/bootstrap.scss'