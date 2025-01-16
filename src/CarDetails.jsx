import PropTypes from 'prop-types';

function CarDetails({ car }) {
    const {title, brand, year, price, isPremium} = car;
  return (
    <div className="bg-white shadow border rounded-lg p-3">
       <h3 className="text-xl font-bold mb-2">{title}</h3>
       <p className="text-gray-700"><span className="font-bold text-black">Brand: </span>{brand}</p>
       <p className="text-gray-700"><span className="font-bold text-black">Year: </span>{year}</p>
       <p className="text-gray-700"><span className="font-bold text-black">Price: </span>${price}</p>
       <p className="text-gray-700"><span className="font-bold text-black">Premium: </span>{isPremium ? 'Yes' : 'No'}</p>
    </div>
  )
}

CarDetails.propTypes = {
    car: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired
};


export default CarDetails;