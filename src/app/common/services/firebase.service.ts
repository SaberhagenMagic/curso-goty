import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';


// Interfaces
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  addGame(game: Game) {
    const gameRef = collection(this.firestore, 'goty');
    return addDoc(gameRef, game);
  }

  getGames(): Observable<Game[]> {
    const gameRef = collection(this.firestore, 'goty');
    return collectionData(gameRef, { idField: 'id' }) as Observable<Game[]>;
  }

  delateGame(game: Game) {
    const gameDocRef = doc(this.firestore, `goty/${game.id}`);
    return deleteDoc(gameDocRef);
  }
}
