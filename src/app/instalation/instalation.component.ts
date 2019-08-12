import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-instalation',
  templateUrl: './instalation.component.html',
  styleUrls: ['./instalation.component.scss']
})
export class InstalationComponent implements OnInit {
  installCommandCopied = false;
  appModuleCode: string;
  angularJsonCode: string;
  primeIconsImport: string;
  fontAwesomeImport: string;
  windowPosition: number;

  constructor() {}

  ngOnInit() {
    this.windowPosition = 0;
    this.appModuleCode = `
    // outros imports
    import { FourwardFormModule } from 'ng-fourward-utils';

    @NgModule({
      declarations: [AppComponent],
      imports: [..., FourwardFormModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    `;

    this.angularJsonCode = `
    {
      "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
      "version": 1,
      "newProjectRoot": "projects",
      "projects": {
        "ng-fourward": {
          "projectType": "application",
          "schematics": {
            "@schematics/angular:component": {
              "style": "scss"
            }
          },
          "root": "",
          "sourceRoot": "src",
          "prefix": "app",
          "architect": {
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                ...outras propiedade,
                *"styles"*: [
                  "node_modules/primeng/resources/themes/nova-light/theme.css",
                  "node_modules/primeng/resources/primeng.min.css",
                  "node_modules/bootstrap/dist/css/bootstrap.min.css",
                  "src/scss/styles.scss"
                ],
                *"scripts"*: [
                  "node_modules/jquery/dist/jquery.min.js",
                  "node_modules/bootstrap/dist/js/bootstrap.min.js",
                  "node_modules/popper.js/dist/umd/popper.min.js"
                ]
              },
              .... resto do arquivo
    `;

    this.primeIconsImport = `
    "node_modules/primeicons/primeicons.css"
    `;

    this.fontAwesomeImport = `
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css",
    `;
  }

  @HostListener('window:scroll', [])
  public scrolou(): void {
    this.windowPosition = window.scrollY;
  }

  public goTo(scrollPosition: number): void {
    window.scrollTo({ top: scrollPosition });
  }
}
