import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

const priceOptions =  [
  {
    "id": 1,
    "name": "Basic Plan",
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "1 personal training session per month",
      "Free Wi-Fi",
      "Mobile app access for workout tracking",
      "Monthly progress assessment"
    ],
    "price": 30
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "4 personal training sessions per month",
      "Access to group classes",
      "Free Wi-Fi",
      "Mobile app access for workout tracking",
      "Nutritional tips via app",
      "Monthly progress assessment",
      "Sauna access twice a week"
    ],
    "price": 50
  },
  {
    "id": 4,
    "name": "Student Plan",
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "2 group classes per week",
      "Discounted personal training sessions",
      "Study lounge with Wi-Fi",
      "Flexible workout hours",
      "Access to student-only events"
    ],
    "price": 25
  }
]

    return (
        <div className="p-8">
            <h1 className="text-5xl text-center text-gray-900 font-semibold" >Best Prices in the town</h1>
            <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
                {
                priceOptions.map(priceOption => 
                <PriceOption
                key={priceOption.id}
                priceOption={priceOption}/>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;