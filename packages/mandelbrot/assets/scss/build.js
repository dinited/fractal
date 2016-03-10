'use strict';

const fs = require('fs');

const schemes = [{
    name: 'default',
    accent: '#07d',
    palette: 'cool'
},{
    name: 'aqua',
    accent: '#7df',
    palette: 'cool'
},{
    name: 'black',
    accent: '#111',
    palette: 'cool'
},{
    name: 'blue',
    accent: '#07d',
    palette: 'cool'
},{
    name: 'fuchsia',
    accent: '#e1b',
    palette: 'cool'
},{
    name: 'green',
    accent: '#3c4',
    palette: 'cool'
},{
    name: 'grey',
    accent: '#aaa',
    palette: 'cool'
},{
    name: 'lime',
    accent: '#0f7',
    palette: 'cool'
},{
    name: 'maroon',
    accent: '#815',
    palette: 'cool'
},{
    name: 'navy',
    accent: '#024',
    palette: 'cool'
},{
    name: 'olive',
    accent: '#497',
    palette: 'cool'
},{
    name: 'orange',
    accent: '#f82',
    palette: 'cool'
},{
    name: 'purple',
    accent: '#a1c',
    palette: 'cool'
},{
    name: 'red',
    accent: '#f43',
    palette: 'cool'
},{
    name: 'teal',
    accent: '#3cc',
    palette: 'cool'
},{
    name: 'yellow',
    accent: '#fd0',
    palette: 'cool'
}];

for (let scheme of schemes) {
    fs.writeFile(`./assets/scss/schemes/${scheme.name}.scss`,
`
$color-accent: ${scheme.accent};

@import '../palettes/${scheme.palette}';
@import '../core/all';
@import "../components/**/*.scss";`);
}