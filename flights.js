const availableFlights = [
  {
    airline: "AirwaysX",
    flightNumber: "AX123",
    departure: {
      airport: "JFK - John F. Kennedy International",
      city: "New York, USA",
      time: "2025-03-12T08:30:00",
    },
    arrival: {
      airport: "LHR - London Heathrow",
      city: "London, UK",
      time: "2025-03-12T20:45:00",
    },
    duration: "7h 15m",
    stops: 0,
    price: 450,
    currency: "USD",
    aircraft: "Boeing 777",
    seatClass: ["Economy", "Business", "First Class"],
  },
  {
    airline: "SkyJet",
    flightNumber: "SJ456",
    departure: {
      airport: "LAX - Los Angeles International",
      city: "Los Angeles, USA",
      time: "2025-03-15T10:00:00",
    },
    arrival: {
      airport: "CDG - Charles de Gaulle",
      city: "Paris, France",
      time: "2025-03-15T21:30:00",
    },
    duration: "11h 30m",
    stops: 1,
    price: 520,
    currency: "USD",
    aircraft: "Airbus A350",
    seatClass: ["Economy", "Premium Economy", "Business"],
  },
  {
    airline: "Global Air",
    flightNumber: "GA789",
    departure: {
      airport: "DXB - Dubai International",
      city: "Dubai, UAE",
      time: "2025-03-20T14:00:00",
    },
    arrival: {
      airport: "SIN - Singapore Changi",
      city: "Singapore",
      time: "2025-03-20T22:30:00",
    },
    duration: "8h 30m",
    stops: 0,
    price: 380,
    currency: "USD",
    aircraft: "Boeing 787",
    seatClass: ["Economy", "Business"],
  },
  {
    airline: "EuroFly",
    flightNumber: "EF567",
    departure: {
      airport: "FRA - Frankfurt Airport",
      city: "Frankfurt, Germany",
      time: "2025-03-25T06:45:00",
    },
    arrival: {
      airport: "JFK - John F. Kennedy International",
      city: "New York, USA",
      time: "2025-03-25T14:30:00",
    },
    duration: "8h 45m",
    stops: 0,
    price: 620,
    currency: "USD",
    aircraft: "Boeing 747",
    seatClass: ["Economy", "Business", "First Class"],
  },
  {
    airline: "Oceanic Airways",
    flightNumber: "OA999",
    departure: {
      airport: "SYD - Sydney International",
      city: "Sydney, Australia",
      time: "2025-03-30T22:00:00",
    },
    arrival: {
      airport: "LAX - Los Angeles International",
      city: "Los Angeles, USA",
      time: "2025-03-30T14:30:00",
    },
    duration: "14h 30m",
    stops: 0,
    price: 980,
    currency: "USD",
    aircraft: "Boeing 787 Dreamliner",
    seatClass: ["Economy", "Business", "First Class"],
  },
];

const searchFlights = (departure, arrival) => {
  const flights = availableFlights.map((item, index) => {
    if (
      item.departure.airport === departure &&
      item.arrival.airport === arrival
    ) {
      return item;
    }
  });

  let flightSection = document.getElementById("flights");
  if (flightSection.hasChildNodes()) {
    flightSection.innerHTML = "";
  }

  console.log(flights);

  if (flights[0]) {
    flights.forEach((item) => {
      let element = showFlights(item);
      let div = document.createElement("div");
      div.innerHTML = element;
      flightSection.appendChild(div);
    });
  } else {
    flightSection.innerHTML = '<p class="center">No flight found</p>';
  }
};

const from = document.getElementById("from");
const to = document.getElementById("to");

const flightOptions = () => {
  availableFlights.forEach((item, index) => {
    let fromOption = document.createElement("option");
    fromOption.id = item.departure.airport;
    fromOption.value = item.departure.airport;
    fromOption.textContent = item.departure.airport;
    from.appendChild(fromOption);

    let toOption = document.createElement("option");
    toOption.id = item.arrival.airport;
    toOption.value = item.arrival.airport;
    toOption.textContent = item.arrival.airport;
    to.appendChild(toOption);
  });
};

document.addEventListener("DOMContentLoaded", flightOptions);

const showFlights = (flights) => {
  console.log(flights);
  let airline = flights.airline;
  let flightNumber = flights.flightNumber;
  let aircraft = flights.aircraft;
  let departureTime = flights.departure?.time;
  let duration = flights.duration;
  let price = flights.price + flights.currency;

  return `
      <div class='flight'>
          <div class="item">
              <div class='icon'><i class='fa fa-plane-circle-check'></i></div>
              <div class="">
                  <h5>${airline}</h5>
                  <p>Flight N0: ${flightNumber}</p>
              </div>
          </div>
          <div class="">
              <h5>Aircraft</h5>
              <p>${aircraft}</p>
          </div>
          <div class="">
              <h5>Departure</h5>
              <p>${departureTime}</p>
          </div>
          <div class="">
              <h5>Flight Duration</h5>
              <p>${duration}</p>
          </div>
          <div class="">
              <h5>Price</h5>
              <p>$${price}</p>
          </div>
          <button class="get-ticket">Get Ticket <i class="fa-solid fa-arrow-right"></i></button>
      </div>
  `;
};

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(from.value);
  console.log(to.value);
  searchFlights(from.value, to.value);
});
