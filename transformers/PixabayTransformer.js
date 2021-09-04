import { SOURCES, ORIGINAL_URLS } from '~/enums/Sources';

export class PixabayTransformer {
    transform (element) {
        if (Array.isArray(element)) {
            return element.map(el => this.transform(el));
        }

        const fullHdUrl = this.changeImageWidth(element.pageURL, 1280, 1920);

        return {
            source: SOURCES.PIXABAY,
            id: element.id,
            width: element.imageWidth,
            height: element.imageHeight,
            description: null,
            alt: null,
            urls: {
                download: `${fullHdUrl}?attachment`,
                source: element.pageURL,
                full: fullHdUrl,
                thumb: element.webformatURL,
            },
            author: {
                name: element.user,
                avatar: element.userImageURL,
                url: `${ORIGINAL_URLS.PIXABAY}/users/${element.user}/${element.user_id}`,
            },
        };
    }

    changeImageWidth (url, currentWidth, desiredWidth) {
        return url.replace(`_${currentWidth}.`, `_${desiredWidth}.`);
    }
}
