import Feature from "../Features/Feature";

const PriceOption = ({priceOption}) => {
    
    const {id,name,features,price} = priceOption
    return (
        <div className="flex flex-col items-center gap-6 bg-green-400 p-7 rounded-2xl">
            <h2 className="text-6xl font-bold">{price} <span className="text-lg">/mon</span></h2>
            <h1 className="text-4xl font-semibold">{name}</h1>
            <div className="flex-grow">
                {
                    features.map((feature,idx) =>
                    <Feature 
                    key={idx}
                    feature={feature}
                    />
                    )
                }
            </div>
           <button className="btn w-full bg-gray-900 text-green-400 border-0 rounded-2xl">Buy Now</button>
        </div>
    );
};

export default PriceOption;