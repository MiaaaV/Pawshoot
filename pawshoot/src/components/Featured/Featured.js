import './Featured.css';
import canon from './images/canon-logo.png'
import artchick from './images/art-chick-logo.png'
import fujifilm from './images/fujifilm-logo.png'
import nyc_pet from './images/nyc-pet-logo.png'

function Featured() {
  return (
    <>
      <section className="featured-in container-fluid pt-2 pb-2">
        <div className="d-flex flex-column align-items-center gap-3">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos container-fluid d-flex align-items-center justify-content-evenly">
            <img src={canon} alt="Canon logo" />
            <img src={artchick} alt="Art Chick Photography logo" />
            <img src={fujifilm} alt="Fujifilm logo" />
            <img src={nyc_pet} alt="New York City Pet Photography logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;