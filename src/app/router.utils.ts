import { UrlMatcher, UrlSegment } from '@angular/router';

export function endsWith(suffix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.endsWith(suffix)) {
            return ({consumed: url});
        }
        return null;
    };
}
