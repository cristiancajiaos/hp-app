import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const baseurlInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    url: `${environment.baseUrl}${req.url}`
  })
  return next(newReq);
};
