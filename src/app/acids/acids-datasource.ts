import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Acids } from '../interfaces/acids';
import { AcidsService } from '../services/acids.service';

export class AcidsDataSource implements DataSource<Acids> {

    orderParams = '';
    dataSource;
    private acidsSubject = new BehaviorSubject<Acids[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private acidsService: AcidsService) { }

    loadPagedAcids(orderParams, pageNumber, pageSize) {

        this.loadingSubject.next(true);

        this.acidsService.pagingAcids(orderParams, pageNumber, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(
                (page) => {
                    this.acidsSubject.next(page);
                }
            );
    }

    connect(collectionViewer: CollectionViewer): Observable<Acids[]> {
        console.log('Connecting data source');
        return this.acidsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.acidsSubject.complete();
        this.loadingSubject.complete();
    }

}
