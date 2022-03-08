// Packages
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

// Server settings
const PORT = 5000;
const app = express();
const pageRoutes = [
    {
        title: 'Introduction',
        route: '/',
        template: 'index.njk'
    },
    {
        title: 'Nav',
        route: '/nav',
        template: 'nav.njk'
    },
    {
        id: 3,
        title: 'Sections',
        route: '/sections',
        template: 'sections.njk'
    },
    {
        title: 'Visual',
        route: '/visual',
        template: 'visual.njk'
    },
    {
        id: 5,
        title: 'Content',
        route: '/content',
        template: 'content.njk'
    },
    {
        route: '/links',
        title: 'Links',
        template: 'links.njk'
    },
    {
        title: 'Embed',
        route: '/embed',
        template: 'embed.njk'
    },
    {
        title: 'Holygrail',
        route: '/holygrail',
        template: 'holygrail.njk'
    },
    {
        title: 'Messages',
        route: '/messages',
        template: 'messages.njk'
    },
    {
        title: 'Forms',
        route: '/forms',
        template: 'forms.njk'
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
