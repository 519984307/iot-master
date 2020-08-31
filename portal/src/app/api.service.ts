import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {catchError, filter, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base = '/api/'; // environment.host;

  constructor(private http: HttpClient, private message: NzMessageService, private route: Router) {
  }

  request(method: string, uri: string, options: any): Observable<any> {
    // 携带Cookie，保持session会话
    options.withCredentials = true;
    return this.http.request<any>(method, this.base + uri, options).pipe(
      // 捕捉异常，数据转换
      catchError(err => {
        if (err.status === 404) {
          return of({error: '无效接口 ' + method + ' ' + uri});
        } else if (err.status === 401) {
          // window.location.href = '/login';
          this.route.navigate(['/login']);
          return of({error: '未登录'});
        }
        return of({error: err.message});
      }),
      // 统一错误处理
      map((ret: any) => {
        if (ret && ret.error) {
          // 有错误统一显示并不是好的做法
          this.message.create('error', ret.error);
          throw new Error(ret.error);
        }
        return ret;
      }));
  }

  get(uri: string, params?: { [k: string]: any }): Observable<any> {
    return this.request('GET', uri, {params});
  }

  put(uri: string, body: any | null, params?: { [k: string]: any }): Observable<any> {
    return this.request('PUT', uri, {params, body});
  }

  post(uri: string, body: any | null, params?: { [k: string]: any }): Observable<any> {
    return this.request('POST', uri, {params, body});
  }

  patch(uri: string, body: any | null, params?: { [k: string]: any }): Observable<any> {
    return this.request('PATCH', uri, {params, body});
  }

  delete(uri: string, params?: { [k: string]: any }): Observable<any> {
    return this.request('DELETE', uri, {params});
  }
}
