import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

function App() {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handlePlaceSelected = (place) => {
        setSelectedPlace(place); // Actualiza selectedPlace con el lugar seleccionado
    };

    return (
        <Router>
            <>
                <Header onPlaceSelected={handlePlaceSelected} /> {/* Pasa la función handlePlaceSelected a Header */}
                <Content selectedPlace={selectedPlace} /> {/* Pasa selectedPlace a Content */}
            </>
        </Router>
    );
}

export default App;


// import React, { useState } from 'react';
// import Content from './components/Content';
// import Header from './components/Header';

// function App() {
//     const [selectedPlace, setSelectedPlace] = useState(null);

//     const handlePlaceSelected = (place) => {
//         setSelectedPlace(place); // Actualiza selectedPlace con el lugar seleccionado
//     };

//     return (
//         <>
//             <Header onPlaceSelected={handlePlaceSelected} /> {/* Pasa la función handlePlaceSelected a Header */}
//             <Content selectedPlace={selectedPlace} /> {/* Pasa selectedPlace a Content */}
//         </>
//     );
// }

// export default App;


// import { useState } from 'react';
// import Content from './components/Content';
// import Header from './components/Header';

// function App() {
//   const [selectedPlace, setSelectedPlace] = useState(null);

//     const handlePlaceSelected = (place) => {
//         setSelectedPlace(place); // Actualiza selectedPlace con el lugar seleccionado
//     };

//   return (
//     <>
//       {/* <Header /> */}
//       <Header onPlaceSelected={handlePlaceSelected} /> {/* Pasa la función handlePlaceSelected a Header */}

//       <Content />
       
//     </>
//   );
// }

// export default App;
