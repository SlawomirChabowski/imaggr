import { SOURCES } from '~/enums/Sources';

export class UnsplashTransformer {
    transform (element) {
        if (Array.isArray(element)) {
            return element.map(this.transform);
        }

        return {
            source: SOURCES.UNSPLASH,
            id: element.id,
            width: element.width,
            height: element.height,
            description: element.description,
            alt: element.alt_description,
            urls: {
                download: element.links.download,
                source: element.links.html,
                full: element.urls.full,
                thumb: element.urls.small,
            },
            author: {
                name: element.user.name,
                avatar: element.user.profile_image.medium,
                url: element.user.links.html,
            },
        };
    }
}
