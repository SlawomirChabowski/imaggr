import { ENVIRONMENTAL_VARIABLES } from '~/enums/Environment';
import { SOURCES_URLS } from '~/enums/Sources';
import { ImageRepository, PixabayRepository, UnsplashRepository } from '~/repositories';
import { PixabayTransformer, UnsplashTransformer } from '~/transformers';

export default ({ $http, env }, inject) => {
    inject(
        'imageRepository',
        new ImageRepository(
            new PixabayRepository(
                $http.create({ prefixUrl: SOURCES_URLS.PIXABAY }),
                env[ENVIRONMENTAL_VARIABLES.PIXABAY_API_KEY],
            ),
            new PixabayTransformer(),
            new UnsplashRepository(
                $http.create({ prefixUrl: SOURCES_URLS.UNSPLASH }),
                env[ENVIRONMENTAL_VARIABLES.UNSPLASH_API_KEY],
            ),
            new UnsplashTransformer(),
        ),
    );
};
