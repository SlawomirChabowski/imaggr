import { stringify } from 'querystring';

export class UnsplashRepository {
    constructor ($http, token) {
        this.setupHttp($http, token);
    }

    setupHttp ($http, token) {
        this.$http = $http;
        this.$http.setToken(`Client-ID ${token}`);
    }

    list (page, limit) {
        const query = stringify({
            page,
            per_page: limit,
        });
        const url = `photos?${query}`;

        return this.$http.$get(url);
    }
}
