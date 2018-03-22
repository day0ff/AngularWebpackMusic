import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Passport} from '../passport';
import {PassportService} from '../../service/passport.service';

@Component({
  selector: 'app-passport-detail',
  templateUrl: './passport-detail.component.html',
  styleUrls: ['./passport-detail.component.css']
})

export class PassportDetailComponent implements OnInit {
  @Input() passport: Passport;

  getPassport(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.passportService.getPassport(+id)
        .subscribe(passport => this.passport = passport);
    } else {
      this.passport = new Passport('New Number');
    }
  }

  savePassport(): void {
    this.passportService.savePassport(this.passport)
      .subscribe(passport => {
        this.passport = passport;
        this.location.replaceState('/passports/details/' + passport.passportId);
      });
  }

  deletePassport(): void {
    this.passportService.deletePassport(this.passport).subscribe(
      response => {
        this.router.navigateByUrl('/passports');
      });
  }

  updatePassport(): void {
    this.passportService.updatePassport(this.passport).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private passportService: PassportService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getPassport();
  }
}
