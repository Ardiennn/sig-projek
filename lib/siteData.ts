export const headerData = {
    logo: 'The CoffeMap',
    navlinks: [
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

export const aboutData = {
    mainData: {
        name: "Peta Interaktif",
        about: "Selamat datang di The CoffeeMap, sebuah platform pemetaan interaktif yang dirancang khusus untuk memudahkan pencarian dan penjelajahan berbagai workspace atau tempat kerja kreatif di Kota Bogor. Dengan menggunakan teknologi QGIS (Quantum Geographic Information System), kami menggabungkan peta digital yang canggih dengan informasi tentang berbagai lokasi yang mendukung kebutuhan profesional dan kreatif di kota ini. The CoffeeMap bertujuan untuk menyediakan solusi bagi para pekerja jarak jauh, profesional, freelancer, atau siapa saja yang membutuhkan tempat untuk bekerja dengan suasana yang mendukung produktivitas. Dalam platform ini, pengguna dapat menemukan berbagai co-working space, kafe dengan fasilitas Wi-Fi, serta ruang-ruang publik lainnya yang cocok untuk bekerja sambil menikmati secangkir kopi atau teh."
    },  
};

export const servicesData = {
    mainData: {
        title: "Services",
        title2: "What I",
        title2Span: "Do",
    },
    services: [
        {
            number: '01',
            bootstrapIcon: 'bi bi-map',
            title: 'Peta Interaktif',
            description: 'Menampilkan peta interaktif Wilayah Bogor yang memuat titik-titik lokasi workspace',
        },
        {
            number: '02',
            bootstrapIcon: 'bi bi-info-circle-fill',
            title: 'Informasi Detail',
            description: 'Menampilkan informasi detail tiap titik workspace saat diklik (Nama workspace, Alamat lengkap, dll)',
        },
        {
            number: '03',
            bootstrapIcon: 'bi bi-geo-fill',
            title: 'Filter Lokasi',
            description: 'Filter lokasi workspace berdasarkan kategori tertentu (misalnya: coworking space, cafe)',
        },
        {
            number: '04',
            bootstrapIcon: 'bi bi-geo',
            title: 'Track Rute',
            description: 'Track rute lokasi agar pengguna bisa langsung mendapatkan rute ke tempat tujuan mereka',
        },
        {
            number: '05',
            bootstrapIcon: 'bi bi-search',
            title: 'Pencarian Kata Kunci',
            description: 'Pencarian lokasi workspace berdasarkan nama atau kata kunci',
        },
        {
            number: '06',
            bootstrapIcon: 'bi bi-plus',
            title: 'Kontrol zoom in-out',
            description: 'Kontrol zoom peta (perbesar dan perkecil tampilan)',
        },
        {
            number: '07',
            bootstrapIcon: 'bi bi-arrows-move',
            title: 'Radius Pencarian',
            description: 'Radius Pencarian Lokasi untuk melihat café dalam radius tertentu dari lokasi pengguna (misalnya: dalam 2 km)',
        },
    ]
};

export const mapData = {
    mainData: {
        lat: -3.745,
        lng: -38.523,
    },
};

export const footerData = {
    copyWriteText: 'Grup4-SIG, All Rights Reserved.',
};
