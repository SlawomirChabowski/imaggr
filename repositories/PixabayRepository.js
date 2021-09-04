import { stringify } from 'querystring';

export class PixabayRepository {
    constructor ($http, token) {
        this.$http = $http;
        this.token = token;
    }

    prepareQuery (params) {
        return stringify({
            key: this.token,
            ...params,
        });
    }

    list (page, limit) {
        const query = this.prepareQuery({
            page,
            per_page: limit,
        });

        return this.$http
            .$get(`?${query}`, { headers: null })
            .then(({ hits }) => hits);
    }
}
