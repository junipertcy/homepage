import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/repos/junipertcy/homepage/commits';

  constructor(private http: HttpClient) {}

  getLastCommitDate(): Observable<string> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      timeout(5000),
      map(commits => {
        const date = Array.isArray(commits) ? commits[0]?.commit?.author?.date : undefined;
        if (date) {
          return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
        return 'Unknown';
      }),
      catchError((error) => {
        console.error('Error fetching last commit date:', error);
        return of('Unknown');
      })
    );
  }
}
