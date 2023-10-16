import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{
  id=0;
  active=true;
  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.active = params['active'];
      console.log(this.active);
    });
  }
  goBack() {
    this.router.navigate(['/invoice']); 
  }
}
