export class ImageRepository {
    constructor (pixabayRepository, pixabayTransformer, unsplashRepository, unsplashTransformer) {
        this.pixabayRepository = pixabayRepository;
        this.pixabayTransformer = pixabayTransformer;
        this.unsplashRepository = unsplashRepository;
        this.unsplashTransformer = unsplashTransformer;
    }

    async list (page = 1, limit = 20) {
        const everything = await Promise.all([
            this.unsplashRepository
                .list(page, Math.floor(limit / 2))
                .then(data => this.unsplashTransformer.transform(data)),
            this.pixabayRepository
                .list(page, Math.ceil(limit / 2))
                .then(data => this.pixabayTransformer.transform(data)),
        ]);

        return everything.flat(1);
    }
}
