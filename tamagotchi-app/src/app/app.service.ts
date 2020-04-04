import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'


const baseUrl = 'http://localhost:8000/api';

export interface Tamagotchi {
  name: string,
  age: number,
  happiness: number
}

@Injectable()
export class TamagotchiService {
  constructor(private http: HttpClient) {}

  getAllTamagotchiData(): Observable<Tamagotchi> {
    return this.http.get<Tamagotchi>(baseUrl + '/tamagotchi')
  }

  updateTamagotchiData(tamagotchi: Tamagotchi): Observable<void> {
    return this.http.put<void>(
      'tamagotchi/',
      tamagotchi
    )
  }

}
