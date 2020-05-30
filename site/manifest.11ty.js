class Template {
    data() {
        return {
            permalink: "/site.manifest"
        };
    }
  
    render(data) {
        const manifest = {
            "name": data.site.title,
            "short_name": data.site.title,
            "icons": [
                {
                    "src": "/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            "theme_color": "#ffffff",
            "background_color": "#ffffff",
            "display": "standalone"
        };
        
        return JSON.stringify(manifest, null, 4);
    }
}
  
module.exports = Template;
