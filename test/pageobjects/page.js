
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const txtHeader = $('android=new UiSelector().resourceId("com.lojinha:id/appToolbar")')

export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async pageHeader() {
        return txtHeader;
    }
}
