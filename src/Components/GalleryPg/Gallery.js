import React from 'react'

function Gallery() {
    return (
        <div className="gal-all body">
            <h2>GALLERY</h2>
            <section class="gallery">
                <div class="container">
                    <div class="grid">
                        <div class="column-xs-12 column-md-4">
                            <figure class="img-container">
                            <img src="https://source.unsplash.com/8b1cWDyvT7Y" />
                            <figcaption class="img-content">
                                <h2 class="title">Smart Watch</h2>
                                <h3 class="category">Showcase</h3>
                            </figcaption>
                            <span class="img-content-hover">
                                <h2 class="title">Smart Watch</h2>
                                <h3 class="category">Showcase</h3>
                            </span>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    )
}
export default Gallery