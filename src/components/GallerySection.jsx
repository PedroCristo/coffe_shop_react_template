import galleryImagesData from "../data/galleryImages";


function GallerySection() {
    return(
            <div className="bg-gallery" id="gallery">
              <div className="gallery-flex">
                {/* First Image */}
                <div className="image-one event">
                  <img src={galleryImagesData[0].imageUrl} alt={galleryImagesData[0].name} />
                  <div className="overlay"></div>
                </div>
        
                {/* Inside Gallery */}
                <div className="inside-gallery">
                  <div className="left">
                    {/* Second Image */}
                    <div className="event">
                      <img src={galleryImagesData[1].imageUrl} alt={galleryImagesData[1].name} />
                      <div className="overlay"></div>
                    </div>
        
                    {/* Third Image */}
                    <div className="event">
                      <img src={galleryImagesData[2].imageUrl} alt={galleryImagesData[2].name} />
                      <div className="overlay"></div>
                    </div>
                  </div>
        
                  <div className="right">
                    {/* Fourth Image */}
                    <div className="event">
                      <img src={galleryImagesData[3].imageUrl} alt={galleryImagesData[3].name} />
                      <div className="overlay"></div>
                    </div>
        
                    {/* Fifth Image */}
                    <div className="event">
                      <img src={galleryImagesData[4].imageUrl} alt={galleryImagesData[4].name} />
                      <div className="overlay"></div>
                    </div>
                  </div>
                </div>
        
                {/* Last Image */}
                <div className="last-image event">
                  <img src={galleryImagesData[5].imageUrl} alt={galleryImagesData[5].name} />
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          );
        }
        


export default GallerySection;