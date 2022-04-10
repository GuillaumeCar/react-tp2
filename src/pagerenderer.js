export default class PageRenderer {
    static titleElement;
    static contentElement;

    static renderPage(page) {
        this.titleElement.innerHTML = page.renderTitle();
        this.contentElement.innerHTML = page.render();
    }
}
