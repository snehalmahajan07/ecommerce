import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from "rxjs/operators"; 

@Injectable()
export class ProductService {

    constructor(public http: HttpClient) { }

    public getProducts(dataURL:string){
        return this.http.get(dataURL)
        .pipe(map((res: any) => res));
    }
}