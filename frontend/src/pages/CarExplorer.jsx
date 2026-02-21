import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/Card';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';

const CarExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedFuelType, setSelectedFuelType] = useState('all');
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = Number(window.localStorage.getItem('carExplorerPage'));
    return Number.isInteger(storedPage) && storedPage > 0 ? storedPage : 1;
  });
  const itemsPerPage = 12;

  const getExplorerImagePath = (id) => `/images/explorer/car-${id}.png`;

  const carsData = [
    { id: 1, brand: 'BMW', model: 'M4', price: '₹54,00,000', year: 2023, fuelType: 'Petrol', image: '/images/explorer/car-1.png', rating: 4.8 },
    { id: 2, brand: 'Ferrari', model: 'F8 Tributo', price: '₹65,00,000', year: 2023, fuelType: 'Petrol', image: '/images/explorer/car-2.png', rating: 5.0 },
    { id: 3, brand: 'Mercedes-Benz', model: 'AMG GT', price: '₹74,00,000', year: 2023, fuelType: 'Petrol', image: '/images/explorer/car-3.png', rating: 4.9 },
    { id: 4, brand: 'Audi', model: 'R8', price: '₹79,00,000', year: 2023, fuelType: 'Petrol', image: '/images/explorer/car-4.png', rating: 4.7 },
    { id: 5, brand: 'Tesla', model: 'Model S', price: '₹45,00,000', year: 2023, fuelType: 'Electric', image: '/images/explorer/car-5.png', rating: 4.9 },
    { id: 6, brand: 'Hyundai', model: 'Creta', price: '₹12,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2019/11/27/13/41/car-4658987_1280.jpg', rating: 4.5 },
    { id: 7, brand: 'Maruti Suzuki', model: 'Swift', price: '₹8,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/11/23/16/06/cars-1855960_1280.jpg', rating: 4.4 },
    { id: 8, brand: 'Toyota', model: 'Innova', price: '₹18,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2015/10/29/14/37/cars-1012821_1280.jpg', rating: 4.6 },
    { id: 9, brand: 'Honda', model: 'City', price: '₹11,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.5 },
    { id: 10, brand: 'Mahindra', model: 'XUV700', price: '₹16,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2021/01/11/05/23/jeep-5908648_1280.jpg', rating: 4.7 },
    { id: 11, brand: 'Kia', model: 'Seltos', price: '₹13,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/25/09/20/car-2678925_1280.jpg', rating: 4.6 },
    { id: 12, brand: 'Volkswagen', model: 'Polo', price: '₹9,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/09/23/18/06/car-955922_1280.jpg', rating: 4.5 },
    // 100 cars with fixed data - names/brands never change on refresh
    { id: 13, brand: 'Tata', model: 'Nexon', price: '₹8,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/02/18/11/49/car-3161510_1280.jpg', rating: 4.4 },
    { id: 14, brand: 'Skoda', model: 'Superb', price: '₹27,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/27/15/34/auto-2686347_1280.jpg', rating: 4.6 },
    { id: 15, brand: 'Porsche', model: '911', price: '₹1,50,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/10/porsche-1299251_1280.jpg', rating: 5.0 },
    { id: 16, brand: 'Lamborghini', model: 'Huracan', price: '₹3,00,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/12/lamborghini-1299264_1280.jpg', rating: 5.0 },
    { id: 17, brand: 'Bugatti', model: 'Chiron', price: '₹16,00,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2019/10/07/10/24/bugatti-4531606_1280.jpg', rating: 5.0 },
    { id: 18, brand: 'Rolls-Royce', model: 'Phantom', price: '₹9,50,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/02/10/39/luxury-car-2573200_1280.jpg', rating: 5.0 },
    { id: 19, brand: 'Bentley', model: 'Continental', price: '₹3,50,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/09/22/04/35/bentley-2772172_1280.jpg', rating: 4.9 },
    { id: 20, brand: 'Range Rover', model: 'Sport', price: '₹1,45,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2019/07/30/19/35/range-rover-4373994_1280.jpg', rating: 4.7 },
    { id: 21, brand: 'Jaguar', model: 'XF', price: '₹75,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/08/jaguar-1299243_1280.jpg', rating: 4.6 },
    { id: 22, brand: 'Volvo', model: 'XC90', price: '₹1,30,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2018/09/16/16/37/volvo-3681309_1280.jpg', rating: 4.7 },
    { id: 23, brand: 'Lexus', model: 'LX', price: '₹2,00,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/05/18/11/28/lexus-3411434_1280.jpg', rating: 4.8 },
    { id: 24, brand: 'Infiniti', model: 'QX80', price: '₹1,60,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/10/17/07/27/infiniti-3752494_1280.jpg', rating: 4.6 },
    { id: 25, brand: 'Cadillac', model: 'Escalade', price: '₹1,50,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/11/07/23/10/cadillac-2928267_1280.jpg', rating: 4.5 },
    { id: 26, brand: 'Lincoln', model: 'Navigator', price: '₹1,40,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/01/02/19/47/suv-4737017_1280.jpg', rating: 4.5 },
    { id: 27, brand: 'Genesis', model: 'GV70', price: '₹70,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/02/28/12/46/car-4889093_1280.jpg', rating: 4.7 },
    { id: 28, brand: 'Subaru', model: 'Outback', price: '₹55,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2019/08/15/20/45/subaru-4408977_1280.jpg', rating: 4.6 },
    { id: 29, brand: 'Mitsubishi', model: 'Outlander', price: '₹32,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/03/31/10/50/mitsubishi-4987899_1280.jpg', rating: 4.5 },
    { id: 30, brand: 'Suzuki', model: 'Jimny', price: '₹15,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/01/22/15/38/suzuki-3098555_1280.jpg', rating: 4.4 },
    { id: 31, brand: 'Jeep', model: 'Wrangler', price: '₹60,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/01/27/08/33/jeep-4797124_1280.jpg', rating: 4.7 },
    { id: 32, brand: 'Nissan', model: 'Altima', price: '₹30,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/02/09/13/52/nissan-3142419_1280.jpg', rating: 4.5 },
    { id: 33, brand: 'Hyundai', model: 'Elantra', price: '₹13,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2021/02/04/13/59/hyundai-5980988_1280.jpg', rating: 4.4 },
    { id: 34, brand: 'Kia', model: 'Sorento', price: '₹28,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/01/13/11/23/kia-4762158_1280.jpg', rating: 4.6 },
    { id: 35, brand: 'Chevrolet', model: 'Trailblazer', price: '₹25,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/07/25/16/59/chevrolet-3560879_1280.jpg', rating: 4.5 },
    { id: 36, brand: 'Ford', model: 'Mustang', price: '₹90,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/mustang-2181307_1280.jpg', rating: 4.8 },
    { id: 37, brand: 'Dodge', model: 'Charger', price: '₹1,10,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/06/09/51/dodge-charger-2589111_1280.jpg', rating: 4.7 },
    { id: 38, brand: 'Chevrolet', model: 'Corvette', price: '₹1,20,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/corvette-2181305_1280.jpg', rating: 4.8 },
    { id: 39, brand: 'Tesla', model: 'Model 3', price: '₹42,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2020/07/20/07/48/tesla-5420518_1280.jpg', rating: 4.7 },
    { id: 40, brand: 'Tesla', model: 'Model Y', price: '₹55,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2020/12/16/13/55/tesla-model-y-5837618_1280.jpg', rating: 4.8 },
    { id: 41, brand: 'Polestar', model: '2', price: '₹65,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2020/11/28/16/16/polestar-5727898_1280.jpg', rating: 4.6 },
    { id: 42, brand: 'Rivian', model: 'R1T', price: '₹80,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2021/01/12/08/36/rivian-r1t-5912374_1280.jpg', rating: 4.7 },
    { id: 43, brand: 'Lucid', model: 'Air', price: '₹1,00,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2021/11/04/13/38/lucid-air-6769447_1280.jpg', rating: 4.8 },
    { id: 44, brand: 'Fisker', model: 'Ocean', price: '₹70,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2021/07/20/10/37/fisker-ocean-6481191_1280.jpg', rating: 4.5 },
    { id: 45, brand: 'BYD', model: 'Qin', price: '₹28,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2020/12/19/12/35/byd-5841906_1280.jpg', rating: 4.4 },
    { id: 46, brand: 'Li Auto', model: 'ONE', price: '₹45,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2021/01/20/09/11/car-5935343_1280.jpg', rating: 4.6 },
    { id: 47, brand: 'NIO', model: 'ES8', price: '₹75,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2021/01/29/13/38/nio-es8-5957877_1280.jpg', rating: 4.7 },
    { id: 48, brand: 'XPeng', model: 'G9', price: '₹55,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2021/06/03/07/40/xpeng-g3-6309649_1280.jpg', rating: 4.6 },
    { id: 49, brand: 'BMW', model: 'X5', price: '₹85,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/03/12/18/44/bmw-2137151_1280.jpg', rating: 4.8 },
    { id: 50, brand: 'Mercedes-Benz', model: 'GLE', price: '₹95,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/08/02/03/47/car-2572621_1280.jpg', rating: 4.9 },
    { id: 51, brand: 'Audi', model: 'Q7', price: '₹88,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2014/04/03/10/18/audi-r8-311309_1280.jpg', rating: 4.7 },
    { id: 52, brand: 'Tesla', model: 'Model X', price: '₹1,10,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/tesla-1282314_1280.jpg', rating: 4.9 },
    { id: 53, brand: 'Hyundai', model: 'Venue', price: '₹9,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.3 },
    { id: 54, brand: 'Maruti Suzuki', model: 'Baleno', price: '₹7,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/11/23/16/06/cars-1855960_1280.jpg', rating: 4.4 },
    { id: 55, brand: 'Toyota', model: 'Fortuner', price: '₹38,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2015/10/29/14/37/cars-1012821_1280.jpg', rating: 4.8 },
    { id: 56, brand: 'Honda', model: 'Civic', price: '₹18,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.6 },
    { id: 57, brand: 'Mahindra', model: 'Thar', price: '₹14,50,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2021/01/11/05/23/jeep-5908648_1280.jpg', rating: 4.8 },
    { id: 58, brand: 'Kia', model: 'Carnival', price: '₹32,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/08/25/09/20/car-2678925_1280.jpg', rating: 4.7 },
    { id: 59, brand: 'Volkswagen', model: 'Virtus', price: '₹12,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/09/23/18/06/car-955922_1280.jpg', rating: 4.5 },
    { id: 60, brand: 'Tata', model: 'Harrier', price: '₹16,50,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2018/02/18/11/49/car-3161510_1280.jpg', rating: 4.6 },
    { id: 61, brand: 'Skoda', model: 'Octavia', price: '₹22,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/27/15/34/auto-2686347_1280.jpg', rating: 4.5 },
    { id: 62, brand: 'Ford', model: 'EcoSport', price: '₹10,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/mustang-2181307_1280.jpg', rating: 4.4 },
    { id: 63, brand: 'Jeep', model: 'Compass', price: '₹23,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2020/01/27/08/33/jeep-4797124_1280.jpg', rating: 4.6 },
    { id: 64, brand: 'BMW', model: '3 Series', price: '₹58,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/03/12/18/44/bmw-2137151_1280.jpg', rating: 4.7 },
    { id: 65, brand: 'Mercedes-Benz', model: 'C-Class', price: '₹62,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/02/03/47/car-2572621_1280.jpg', rating: 4.8 },
    { id: 66, brand: 'Audi', model: 'A4', price: '₹52,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2014/04/03/10/18/audi-r8-311309_1280.jpg', rating: 4.6 },
    { id: 67, brand: 'Hyundai', model: 'i20', price: '₹8,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.4 },
    { id: 68, brand: 'Maruti Suzuki', model: 'Ertiga', price: '₹9,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/11/23/16/06/cars-1855960_1280.jpg', rating: 4.5 },
    { id: 69, brand: 'Toyota', model: 'Camry', price: '₹48,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/10/29/14/37/cars-1012821_1280.jpg', rating: 4.7 },
    { id: 70, brand: 'Honda', model: 'Amaze', price: '₹8,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.3 },
    { id: 71, brand: 'Mahindra', model: 'Scorpio', price: '₹15,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2021/01/11/05/23/jeep-5908648_1280.jpg', rating: 4.6 },
    { id: 72, brand: 'Kia', model: 'Carens', price: '₹11,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/25/09/20/car-2678925_1280.jpg', rating: 4.5 },
    { id: 73, brand: 'Volkswagen', model: 'Taigun', price: '₹13,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/09/23/18/06/car-955922_1280.jpg', rating: 4.6 },
    { id: 74, brand: 'Tata', model: 'Safari', price: '₹18,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2018/02/18/11/49/car-3161510_1280.jpg', rating: 4.7 },
    { id: 75, brand: 'Skoda', model: 'Kushaq', price: '₹12,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/27/15/34/auto-2686347_1280.jpg', rating: 4.5 },
    { id: 76, brand: 'Ford', model: 'Endeavour', price: '₹35,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/mustang-2181307_1280.jpg', rating: 4.7 },
    { id: 77, brand: 'Nissan', model: 'Magnite', price: '₹7,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/02/09/13/52/nissan-3142419_1280.jpg', rating: 4.3 },
    { id: 78, brand: 'Renault', model: 'Kiger', price: '₹6,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2020/01/13/11/23/kia-4762158_1280.jpg', rating: 4.2 },
    { id: 79, brand: 'MG', model: 'Hector', price: '₹17,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/07/25/16/59/chevrolet-3560879_1280.jpg', rating: 4.6 },
    { id: 80, brand: 'Citroen', model: 'C5 Aircross', price: '₹38,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/03/28/12/02/corvette-2181305_1280.jpg', rating: 4.4 },
    { id: 81, brand: 'BMW', model: 'X7', price: '₹1,25,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/03/12/18/44/bmw-2137151_1280.jpg', rating: 4.9 },
    { id: 82, brand: 'Mercedes-Benz', model: 'S-Class', price: '₹1,75,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/02/03/47/car-2572621_1280.jpg', rating: 5.0 },
    { id: 83, brand: 'Audi', model: 'Q8', price: '₹1,20,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2014/04/03/10/18/audi-r8-311309_1280.jpg', rating: 4.8 },
    { id: 84, brand: 'Tesla', model: 'Cybertruck', price: '₹75,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/tesla-1282314_1280.jpg', rating: 4.6 },
    { id: 85, brand: 'Hyundai', model: 'Tucson', price: '₹28,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.6 },
    { id: 86, brand: 'Maruti Suzuki', model: 'Ciaz', price: '₹9,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/11/23/16/06/cars-1855960_1280.jpg', rating: 4.4 },
    { id: 87, brand: 'Toyota', model: 'Glanza', price: '₹7,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/10/29/14/37/cars-1012821_1280.jpg', rating: 4.3 },
    { id: 88, brand: 'Honda', model: 'Elevate', price: '₹12,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/12/14/12/55/car-1906362_1280.jpg', rating: 4.5 },
    { id: 89, brand: 'Mahindra', model: 'Bolero', price: '₹10,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2021/01/11/05/23/jeep-5908648_1280.jpg', rating: 4.2 },
    { id: 90, brand: 'Kia', model: 'EV6', price: '₹68,00,000', year: 2023, fuelType: 'Electric', image: 'https://cdn.pixabay.com/photo/2017/08/25/09/20/car-2678925_1280.jpg', rating: 4.8 },
    { id: 91, brand: 'Volkswagen', model: 'Tiguan', price: '₹35,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2015/09/23/18/06/car-955922_1280.jpg', rating: 4.7 },
    { id: 92, brand: 'Tata', model: 'Punch', price: '₹6,50,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2018/02/18/11/49/car-3161510_1280.jpg', rating: 4.4 },
    { id: 93, brand: 'Skoda', model: 'Kodiaq', price: '₹42,00,000', year: 2023, fuelType: 'Diesel', image: 'https://cdn.pixabay.com/photo/2017/08/27/15/34/auto-2686347_1280.jpg', rating: 4.6 },
    { id: 94, brand: 'Porsche', model: 'Cayenne', price: '₹1,35,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/10/porsche-1299251_1280.jpg', rating: 4.9 },
    { id: 95, brand: 'Lamborghini', model: 'Urus', price: '₹4,00,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/12/lamborghini-1299264_1280.jpg', rating: 5.0 },
    { id: 96, brand: 'Ferrari', model: 'Roma', price: '₹3,76,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2019/10/07/10/24/bugatti-4531606_1280.jpg', rating: 5.0 },
    { id: 97, brand: 'Maserati', model: 'Levante', price: '₹1,45,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/08/02/10/39/luxury-car-2573200_1280.jpg', rating: 4.7 },
    { id: 98, brand: 'Aston Martin', model: 'DBX', price: '₹3,82,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2017/09/22/04/35/bentley-2772172_1280.jpg', rating: 4.9 },
    { id: 99, brand: 'McLaren', model: '720S', price: '₹4,65,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2019/07/30/19/35/range-rover-4373994_1280.jpg', rating: 5.0 },
    { id: 100, brand: 'Bentley', model: 'Bentayga', price: '₹4,10,00,000', year: 2023, fuelType: 'Petrol', image: 'https://cdn.pixabay.com/photo/2016/04/01/12/08/jaguar-1299243_1280.jpg', rating: 4.9 }
  ];

  const brands = ['All Brands', 'BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Hyundai', 'Maruti Suzuki', 'Toyota', 'Honda', 'Mahindra', 'Kia', 'Volkswagen', 'Tata', 'Skoda', 'Ford', 'Jeep', 'Ferrari', 'Porsche', 'Lamborghini', 'Bugatti', 'Rolls-Royce', 'Bentley', 'Range Rover', 'Jaguar', 'Volvo', 'Lexus'];
  const fuelTypes = ['All Types', 'Petrol', 'Diesel', 'Electric'];

  const filteredCars = carsData.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
    const matchesFuel = selectedFuelType === 'all' || car.fuelType === selectedFuelType;
    return matchesSearch && matchesBrand && matchesFuel;
  });

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    window.localStorage.setItem('carExplorerPage', String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Explore Our Car Collection
            </span>
          </h1>
          <p className="text-center text-muted-foreground text-lg">
            Browse through our extensive collection of vehicles
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by brand or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => { setSelectedBrand(e.target.value); setCurrentPage(1); }}
                  className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='18 15 12 9 6 15'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand === 'All Brands' ? 'all' : brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Fuel Type</label>
                <select
                  value={selectedFuelType}
                  onChange={(e) => { setSelectedFuelType(e.target.value); setCurrentPage(1); }}
                  className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='18 15 12 9 6 15'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                >
                  {fuelTypes.map(fuel => (
                    <option key={fuel} value={fuel === 'All Types' ? 'all' : fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground font-semibold">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredCars.length)} of {filteredCars.length} cars
          </p>
        </div>

        {/* Car Grid */}
        {paginatedCars.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {paginatedCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all group h-full cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-4 overflow-hidden group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <img
                      src={getExplorerImagePath(car.id)}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.dataset.fallback !== '1') {
                          e.currentTarget.dataset.fallback = '1';
                          e.currentTarget.src = car.image;
                        } else {
                          e.currentTarget.src = '/images/car-placeholder.svg';
                        }
                      }}
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{car.brand}</h3>
                      <p className="text-muted-foreground">{car.model}</p>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">{car.fuelType}</span>
                      <span className="text-muted-foreground">{car.year}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-accent">★</span>
                      <span className="text-sm text-muted-foreground">{car.rating}</span>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-2xl font-bold text-accent">{car.price}</p>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🚫</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No cars found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
          </motion.div>
        )}

        {/* Pagination */}
        {paginatedCars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 py-8 border-t border-border"
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg transition-colors font-semibold ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <span className="text-sm text-muted-foreground ml-4">
              Page {currentPage} of {totalPages}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarExplorer;
