import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/repos/junipertcy/homepage/commits';

  constructor(private http: HttpClient) {}

  getLastCommitDate(): Observable<string> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(commits => {
        if (commits.length > 0) {
          const lastCommitDate = new Date(commits[0].commit.author.date);
          return lastCommitDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
        return 'Unknown';
      })
    );
  }
}
