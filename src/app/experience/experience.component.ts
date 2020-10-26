import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {

    var dialogProperties = {
      // height: '90%',
      maxWidth: '110rem',
    }

    var x = window.matchMedia("(max-width: 75em)");

    if (x.matches) {
      dialogProperties = {
        // height: '95%',
        maxWidth: '95%',
      }
    }

    const dialogRef = this.dialog.open(ExperienceDetailsComponent, dialogProperties);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
