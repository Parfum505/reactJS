import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        let books = this.props.items.map((item, index)=>{
            let {title, imageLinks, authors, infoLink} = item.volumeInfo;
            const lastIndex = authors.length - 1;
            let imgUrl;
            if (imageLinks && imageLinks.thumbnail) {
                imgUrl = imageLinks.thumbnail;
            } else {
                imgUrl = '';
            }
            let allAthors = authors.map((author, i) => {
                   if(lastIndex === i) {
                       return ( <span>{author}</span>)
                   } else {
                       return (<span>{author}, </span>)
                   }
            });
            return (
                <div key={index} className="book">
                    <a href={infoLink}>
                        <p>{title}</p>
                        <img src={imgUrl} alt="book"/>
                        <p>{allAthors}</p>
                    </a>
                </div>
            )
        });
        return (
            <div className="search-result">
                {books}
            </div>
        );
    }
}

export default Gallery;