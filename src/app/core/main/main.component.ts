import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import{Observable, of} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
  cucine: any;
  ristoranti:any;
constructor(private service: ServiceService){
  
}
  ngOnInit(): void {
   this.service.getList().subscribe((response: any)=>{
    this.cucine = response;
    console.log(this.cucine);
    
   })

   this.service.getRest().subscribe((response: any)=>{
    this.ristoranti = response.array;
    console.log(this.ristoranti);
    
   })
  }

  first: number = 0;

    rows: number = 10;

    onPageChange(event:any) {
        this.first = event.first;
        this.rows = event.rows;
    }

}
