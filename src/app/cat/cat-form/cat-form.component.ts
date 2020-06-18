import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/model/cat.model';
import { CatService } from 'src/app/services/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {

  public cat: Cat = new Cat();

  constructor(private catService: CatService, private router: Router) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.catService.addCat(this.cat)
      .then((cat: Cat) => this.router.navigate(['/cats']))
      .catch(e => console.error(e));
  }
}
