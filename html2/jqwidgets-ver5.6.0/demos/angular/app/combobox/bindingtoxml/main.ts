import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode }     from '@angular/core';
import { AppModuleNgFactory } from '../../../temp/app/combobox/bindingtoxml/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);