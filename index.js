// Packages
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

// Server settings
const PORT = 5000;
const app = express();
const pageRoutes = [
    {
        id: 1,
        title: 'Introduction',
        route: '/',
        template: 'index.njk'
    },
    {
        id: 2,
        title: 'Sections',
        route: '/sections',
        template: 'sections.njk'
    },
    {
        id: 3,
        title: 'Visual',
        route: '/visual',
        template: 'visual.njk'
    },
    {
        id: 4,
        title: 'Content',
        route: '/content',
        template: 'content.njk'
    },
    {
        id: 5,
        route: '/links',
        title: 'Links',
        template: 'links.njk'
    },
    {
        id: 6,
        title: 'Tables',
        route: '/tables',
        template: 'tables.njk'
    },
    {
        id: 7,
        title: 'Embed',
        route: '/embed',
        template: 'embed.njk'
    },
    {
        id: 8,
        title: 'Holygrail',
        route: '/holygrail',
        template: 'holygrail.njk'
    }
];
app.use(express.static(path.join(__dirname, '/')));
nunjucks.configure('views', {
    express: app,
    watch: true,
});

// Routes
pageRoutes.forEach(({ route, template, title }) => {
    app.get(route, (req, res) => {
        res.render(template, { title });
    });
});

// Server
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});
