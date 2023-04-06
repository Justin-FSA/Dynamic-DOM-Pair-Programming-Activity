class Bookmark{
    constructor(name, link){
        this.name = name;
        this.link = link;
    }
    render(){
        const bookmarkWrapper = document.createElement("li")
        const bookmarkLink = document.createElement("a");
        bookmarkLink.textContent = this.name
        bookmarkLink.href = this.link
        bookmarkWrapper.append(bookmarkLink)
        return bookmarkWrapper;
    }
}
class BookmarkMaintainer{
    constructor(){
        this.bookmarks = [];
    }
    add(bookmark){
        this.bookmarks.push(bookmark)
    }
    render(){
        const bookmarkList = document.getElementById("bookmarkList");
        for(const bookmark of this.bookmarks){
            const renderedBookmark = bookmark.render()
            bookmarkList.append(renderedBookmark)
        }
    }
}
const BookmarkMaintainerInstance = new BookmarkMaintainer();

document.getElementById("addBookmarkButton").addEventListener("click", () =>{
const bookmarkLinkUserInput = document.getElementById("bookmarkLink").value;
const bookmarkNameUserInput = document.getElementById("bookmarkName").value;

const bookmarkInstance = new Bookmark(bookmarkNameUserInput, bookmarkLinkUserInput);

BookmarkMaintainerInstance.add(bookmarkInstance)
})