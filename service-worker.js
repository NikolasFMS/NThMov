const CACHE_NAME = 'NotKinoV1'; // Уникальное имя для кэша
const URLS_TO_CACHE = [
    'index.html',
    '/css/styles.css',
    'scripts/script.js',
    'service-worker.js',
    'manifest.json',
    'audio/click.mp3',

    // Images
    'img/card.svg',
    'img/desk.svg',
    'img/jet1.svg',
    'img/jet2.svg',
    'img/logo.svg',
    'img/logo1.svg',
    'img/neget.svg',
    'img/pos.svg',
    'img/star.svg',

    // Иконки
    'ico/favicon.ico',
    'ico/icon_x48.png',
    'ico/icon_x72.png',
    'ico/icon_x96.png',
    'ico/icon_x128.png',
    'ico/icon_x192.png',
    'ico/icon_x384.png',
    'ico/icon_x512.png'
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кэширование ресурсов');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Если есть кэшированный ресурс, возвращаем его
                if (response) {
                    return response;
                }
                // Если нет, загружаем ресурс из сети
                return fetch(event.request);
            })
    );
});

// Обновление кэша при активации нового Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Массив с допустимыми именами кэшей
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем старые кэши
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});