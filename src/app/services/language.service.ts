import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { DateAdapter } from '@angular/material/core'; // Import DateAdapter if used

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject$ = new BehaviorSubject<'ar' | 'en'>(this.currentLang);
  currentLang$ = this.currentLangSubject$.asObservable().pipe(shareReplay());

  private currentDirSubject$ = new BehaviorSubject<'rtl' | 'ltr'>(this.currentDir);
  currentDir$ = this.currentDirSubject$.asObservable().pipe(shareReplay());

  constructor(
    private translateService: TranslateService,
    public dateAdapter: DateAdapter<Date> // Inject DateAdapter if used
  ) { }

  get currentLang(): 'ar' | 'en' {
    return localStorage.getItem('lang') as 'ar' | 'en' || 'ar';
  }

  get currentDir(): 'rtl' | 'ltr' {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  toggleLang() {
    const lang = this.currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.currentLangSubject$.next(lang);
    this.currentDirSubject$.next(this.currentDir);
  }

  initAppLang() {
    if (localStorage.getItem('theme')) {
      document.body.classList.add('dark');
    }
    this.dateAdapter.getFirstDayOfWeek = () => {
      return 6;
    };
    this.translateService.setDefaultLang(this.currentLang);
    return this.translateService.use(this.currentLang);
  }
}
