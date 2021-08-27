import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, switchMap } from 'rxjs/operators';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-manage-inventory',
  templateUrl: './admin-manage-inventory.component.html',
  styleUrls: ['./admin-manage-inventory.component.css'],
})

export class AdminManageInventoryComponent implements AfterViewInit,OnInit {

dataTable:any

  tableinfo$: Observable<any> | undefined;
  email: string | undefined;

  displayedColumns: any[] = ['x','id','key','lowestmargin','action'];
  @ViewChild(MatPaginator,{static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  data:object[]= [];
  index: any =0;


  constructor(private fs: AngularFirestore,public admins:AdminServiceService) {

  // this.calldata();

    
  this.tableinfo$ = this.fs
  .collection('Admin')
  .doc('oMWhzMQgufX3WpRQs9WsB4JmQFv2')
  .collection('inventory')
  .snapshotChanges();

this.tableinfo$.subscribe((res) => {
  this.data = [];
  let index = 1;
  res.map((data: any) => {
    let obj = {
      x:index++ + ".",
      id: data.payload.doc.id,
      key: data.payload.doc.data().quantity,
      lowestmargin:data.payload.doc.data().lowestmargin
    };

    this.data.push(obj);
    console.log(this.data)
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  });
  })
  }
 

 ngOnInit(): void {

  }

  ngAfterViewInit() {
  
  }

  update($event: any, lm: any) {
    console.log($event.target.value);
    console.log(lm)
    this.fs
      .collection('Admin')
      .doc('oMWhzMQgufX3WpRQs9WsB4JmQFv2')
      .collection('inventory')
      .doc(lm)
      .update({ lowestmargin: $event.target.value });
  }

  delete(lm: any){
    this.fs
    .collection('Admin')
    .doc('oMWhzMQgufX3WpRQs9WsB4JmQFv2')
    .collection('inventory')
    .doc(lm).delete()
  }

  value($event:any){
    console.log($event);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase().toString();
  }
}
