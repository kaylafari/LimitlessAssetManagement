const gallery = (slug, count, extension = 'jpg') =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(3, '0')
    const ext = Array.isArray(extension) ? extension[index] : extension
    return `/inventory/${slug}/${number}.${ext}`
  })

export const cars = [
  { name: '2015 Mercedes-Benz G 550', body: 'G-Class · Sport Utility', category: 'SUV', miles: '61,500 mi', vin: 'WDCYC3HF6FX237736', images: gallery('2015-mercedes-benz-g-class-g-550-sport-utility-4d-wdcyc3hf6fx237736-61-500-mi', 14, 'jpeg') },
  { name: '2017 Mercedes-AMG G 63', body: 'G-Class · Sport Utility', category: 'SUV', miles: '40,988 mi', vin: 'WDCYC7DFXHX276345', images: gallery('2017-mercedes-benz-mercedes-amg-g-class-g-63-amg-sport-utility-4d-40-988-miles-wdcyc7dfxhx276345', 9, 'jpeg') },
  { name: '2018 BMW i3 s Range Extender', body: 'Hatchback · RWD', category: 'Electric', miles: '59,800 mi', vin: 'WBY7Z8C53JVB86732', images: gallery('2018-bmw-i3-s-w-range-extender-hatchback-4d-rwd-59-800-mi-wby7z8c53jvb86732', 9, 'jpeg') },
  { name: '2018 Mercedes-Benz GLS 550', body: '4MATIC · Sport Utility', category: 'SUV', miles: '48,100 mi', vin: '4JGDF7DE4JB123753', images: gallery('2018-mercedes-benz-gls-550-4matic-sport-utility-4d-48-100-mi-4jgdf7de4jb123753', 18) },
  { name: '2019 Dodge Durango R/T', body: 'Sport Utility · AWD', category: 'SUV', miles: '93,100 mi', vin: '1C4SDJCTXKC599273', images: gallery('2019-dodge-durango-r-t-sport-utility-4d-awd-4wd-93-100k-1c4sdjctxkc599273', 21, ['jpeg','jpeg','jpeg','jpg','jpeg','jpeg','jpeg','jpg','jpeg','jpeg','jpeg','jpeg','jpg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg']) },
  { name: '2019 Mercedes-AMG G 63', body: 'G-Class · Sport Utility', category: 'SUV', miles: '31,347 mi', vin: 'WDCYC7HJ1KX315586', images: gallery('2019-mercedes-benz-mercedes-amg-g-class-g-63-amg-sport-utility-4d-31-347-mi-wdcyc7hj1kx315586', 16) },
  { name: '2019 Mercedes-AMG GT 63 S', body: 'Sedan', category: 'Sedan', miles: '30,383 mi', vin: 'WDD7X8KBXKA001599', images: gallery('2019-mercedes-benz-mercedes-amg-gt-63-s-sedan-4d-30-383-mi-wdd7x8kbxka001599', 15, ['png','png','png','png','png','png','png','png','png','png','png','jpg','png','png','png']) },
  { name: '2020 Ford Expedition MAX Limited', body: 'Sport Utility · RWD', category: 'SUV', miles: '134,000 mi', vin: '1FMJK1KT5LEA87392', images: gallery('2020-ford-expedition-max-limited-sport-utility-4d-rwd-134000k-1fmjk1kt5lea87392', 6, 'jpeg') },
  { name: '2020 Ford F-150 Raptor', body: 'SuperCrew Cab · AWD', category: 'Truck', miles: '44,000 mi', vin: '1FTFW1RG6LFA72630', images: gallery('2020-ford-f150-supercrew-cab-raptor-pickup-4d-5-1-2-ft-awd-4wd-44-000-mi-1ftfw1rg6lfa72630', 25, 'jpeg') },
  { name: '2020 Ford F-150 Raptor', body: 'SuperCrew Cab · AWD', category: 'Truck', miles: '64,000 mi', vin: '1FTFW1RG4LFC66217', images: gallery('2020-ford-f150-supercrew-cab-raptor-pickup-4d-5-1-2-ft-awd-4wd-64-000m-1ftfw1rg4lfc66217', 17) },
  { name: '2020 Jeep Wrangler Unlimited Rubicon', body: 'Sport Utility · AWD', category: 'SUV', miles: '102,000 mi', vin: '1C4HJXFG8LW324117', images: gallery('2020-jeep-wrangler-unlimited-rubicon-sport-utility-4d-awd-4wd-102-000k-1c4hjxfg8lw324117', 18, 'jpeg') },
  { name: '2021 Jeep Wrangler Unlimited Willys', body: 'Sport Utility · AWD', category: 'SUV', miles: '40,200 mi', vin: '1C4HJXDN1MW563169', images: gallery('2021-jeep-wrangler-unlimited-willys-sport-utility-4d-awd-4wd-40-200-1c4hjxdn1mw563169', 7, 'jpeg') },
  { name: '2021 Mercedes-AMG E 53 Cabriolet', body: 'Cabriolet', category: 'Performance', miles: '20,500 mi', vin: 'W1K1K6BBXMF165482', images: gallery('2021-mercedes-benz-mercedes-amg-e-class-e-53-amg-cabriolet-2d-20-500m-w1k1k6bbxmf165482', 34) },
  { name: '2023 Mercedes-AMG GLE 53', body: '4MATIC · Sport Utility', category: 'SUV', miles: '33,883 mi', vin: '4JGFB6BB7PA902277', images: gallery('2023-mercedes-benz-mercedes-amg-gle-gle-53-4matic-sport-utility-4d-4jgfb6bb7pa902277-33-883-mi', 38) },
  { name: '2023 Porsche 911 Turbo S', body: 'AWD', category: 'Performance', miles: '9,404 mi', vin: 'WP0AD2A99PS257870', images: gallery('2023-porsche-911-turbo-s-awd-4wd-9404-miles-wp0ad2a99ps257870', 39) },
  { name: '2023 Tesla Model S', body: 'Standard Range · AWD', category: 'Electric', miles: '18,905 mi', vin: '5YJSA1E56PF506413', images: gallery('2023-tesla-model-s-standard-range-awd-4wd-18-905-mi-5yjsa1e56pf506413', 20, 'jpeg') },
  { name: '2024 BMW M3 Competition xDrive', body: 'Sedan · AWD', category: 'Performance', miles: '7,812 mi', vin: 'WBS43AY08RFR80079', images: gallery('2024-bmw-m3-competition-xdrive-sedan-4d-awd-4wd-7-812-mi-wbs43ay08rfr80079', 12, 'jpeg') },
  { name: '2024 Mercedes-Benz GLS 580', body: '4MATIC · Sport Utility', category: 'SUV', miles: '13,000 mi', vin: '4JGFF8FE5RB190370', images: gallery('2024-mercedes-benz-gls-580-4matic-sport-utility-4d-13-000-mi-4jgff8fe5rb190370', 20, ['jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpeg','jpg','jpg','jpg','jpg','jpeg','jpg','jpg']) },
  { name: '2024 Porsche 911 Turbo S', body: 'AWD', category: 'Performance', miles: '17,185 mi', vin: 'WP0CD2A93RS257679', images: gallery('2024-porsche-911-turbo-s-awd-4wd-17-185-mi-wp0cd2a93rs257679', 39) },
  { name: '2024 Porsche 911 Turbo S Cabriolet', body: 'AWD', category: 'Performance', miles: '10,096 mi', vin: 'WP0CD2A94RS257058', images: gallery('2024-porsche-911-turbo-s-cabriolet-2d-awd-4wd-10-096-mi-wp0cd2a94rs257058', 27) },
  { name: '2025 Mercedes-AMG GLE 63 S Coupe', body: '4MATIC · Sport Utility', category: 'SUV', miles: '11,035 mi', vin: '4JGFD8KB5SB335608', images: gallery('2025-mercedes-benz-mercedes-amg-gle-coupe-gle-63-s-4matic-sport-utility-4d-11-035-mi-4jgfd8kb5sb335608', 8, ['jpeg','jpeg','jpeg','jpeg','png','png','jpeg','jpeg']) },
  { name: '2025 Mercedes-AMG SL 55', body: 'Roadster', category: 'Performance', miles: '2,600 mi', vin: 'W1KVK8AB2SF024689', images: gallery('2025-mercedes-benz-mercedes-amg-sl-sl-55-roadster-2d-2-600-mi-w1kvk8ab2sf024689', 12, ['jpeg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpeg','jpg','jpg']) },
  { name: 'Lamborghini Urus', body: 'Sport Utility', category: 'SUV', miles: '18,079 mi', vin: 'ZPBUB3ZL5PLA23222', images: gallery('urus-18079k-zpbub3zl5pla23222', 24) },
]
