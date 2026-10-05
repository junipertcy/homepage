import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {


  emailselfdefense = 'https://emailselfdefense.fsf.org/en/infographic.html';
  openpgp_softwares = 'https://www.openpgp.org/software/';

  privacy_tools = 'https://www.privacytools.io/';
  securityplanner = 'https://securityplanner.consumerreports.org/';
  ssd_eff = 'https://ssd.eff.org/en';
  cpj_dskj = 'https://cpj.org/2019/07/digital-safety-kit-journalists/';
  pin_mf = 'https://foundation.mozilla.org/en/privacynotincluded/';

  constructor() { }

  ngOnInit(): void {
  }

}
