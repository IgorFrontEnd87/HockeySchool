import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) {}

  getPerson(): Observable<any[]>  {
    return this.db.collection('person').valueChanges({idField: 'id'} );
  }
  getSchedule(): Observable<any[]>  {
    return this.db.collection('schedule').valueChanges({idField: 'id'} );
  }
  getPrice(): Observable<any[]> {
    return this.db.collection('price').valueChanges({idField: 'id'});
  }
}
