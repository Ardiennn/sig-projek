// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/lib/siteData.ts
export const headerData = {
    logo: 'The CoffeeMap', //
    navlinks: [ //
        {
            url: '/#about',
            title: 'About',
        },
        {
            url: '/#services',
            title: 'Services',
        },
        {
            url: '/#map',
            title: 'Map',
        },
    ],
};

export const aboutData = { //
    mainData: { //
        name: "Peta Interaktif", //
        about: "Selamat datang di The CoffeeMap, sebuah platform pemetaan interaktif yang dirancang khusus untuk memudahkan pencarian dan penjelajahan berbagai workspace atau tempat kerja kreatif di Kota Bogor. Dengan menggunakan teknologi QGIS (Quantum Geographic Information System), kami menggabungkan peta digital yang canggih dengan informasi tentang berbagai lokasi yang mendukung kebutuhan profesional dan kreatif di kota ini. The CoffeeMap bertujuan untuk menyediakan solusi bagi para pekerja jarak jauh, profesional, freelancer, atau siapa saja yang membutuhkan tempat untuk bekerja dengan suasana yang mendukung produktivitas. Dalam platform ini, pengguna dapat menemukan berbagai co-working space, kafe dengan fasilitas Wi-Fi, serta ruang-ruang publik lainnya yang cocok untuk bekerja sambil menikmati secangkir kopi atau teh." //
    },  
};

export const servicesData = { //
    mainData: { //
        title: "Layanan Kami",
        title2: "Apa yang Kami",
        title2Span: "Tawarkan",
    },
    services: [ //
        {
            number: '01',
            bootstrapIcon: 'bi bi-map-fill', // Ikon diubah
            title: 'Peta Interaktif',
            description: 'Tampilan peta interaktif Bogor dengan titik-titik lokasi workspace yang jelas.',
        },
        {
            number: '02',
            bootstrapIcon: 'bi bi-info-circle-fill',
            title: 'Informasi Detail',
            description: 'Dapatkan info lengkap tiap workspace: nama, alamat, jam buka, dan fasilitas.',
        },
        {
            number: '03',
            bootstrapIcon: 'bi bi-filter-circle-fill', // Ikon diubah
            title: 'Filter Lokasi',
            description: 'Saring lokasi berdasarkan kategori (cafe, coworking) untuk temuan yang pas.',
        },
        {
            number: '04',
            bootstrapIcon: 'bi bi-sign-turn-right-fill', // Ikon diubah
            title: 'Panduan Rute',
            description: 'Dapatkan rute termudah dan tercepat langsung ke workspace tujuanmu.',
        },
        {
            number: '05',
            bootstrapIcon: 'bi bi-search-heart-fill', // Ikon diubah
            title: 'Pencarian Cepat',
            description: 'Cari workspace favoritmu berdasarkan nama atau kata kunci spesifik.',
        },
        {
            number: '06',
            bootstrapIcon: 'bi bi-zoom-in', // Ikon diubah
            title: 'Kontrol Zoom',
            description: 'Perbesar atau perkecil peta untuk melihat detail atau gambaran umum.',
        },
        {
            number: '07',
            bootstrapIcon: 'bi bi-geo-alt-fill', // Ikon diubah
            title: 'Radius Pencarian',
            description: 'Temukan cafe dalam radius tertentu dari lokasimu saat ini (misal: 2 km).',
        },
    ]
};

export const mapData = { //
    mainData: { //
        lat: -3.745, //
        lng: -38.523, //
    },
};

export const footerData = { //
    copyWriteText: 'Grup4-SIG, All Rights Reserved.', //
};