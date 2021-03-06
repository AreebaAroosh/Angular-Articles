/*
 * Default Angular providers
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { ApplicationRef } from '@angular/core';
import { decorateModuleRef } from './environment';

/*
* AppModule
* our top level NgModule that holds all of our components
*/
import { AppModule } from '../app';
/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}


bootloader(main);
