const gallery = document.getElementById('gallery');
const images = [
    'https://images.unsplash.com/photo-1531384448336-33c686dc5eb1?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1531384448336-33c686dc5eb1?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60'
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'AI generated girl';
    gallery.appendChild(img);
});
