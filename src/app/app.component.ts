import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music';
  locale: string;

  switchLanguage(language: string) {
    this.locale = language;
    this.translate.use(language);
  }

  getLocale() {
    this.locale = this.translate.getBrowserLang();
  }

  login() {
    alert('Login');
  }

  registration() {
    alert('Register');
  }

  constructor(private translate: TranslateService) {
    this.locale = this.translate.getBrowserLang();
    translate.setDefaultLang(this.locale);
  }

}
