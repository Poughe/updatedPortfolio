module.exports = {
  email: 'poughe@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Poughe',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ecpough/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/PoughErnest',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ernestpough/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: '/#blog', //#jobs
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#FFFFFF', //<-- replaced with white// original: '#64ffda',
    navy: '#FFA500', //<-- replaced with orange// original: '#0a192f',
    darkNavy: 'FF0000', //<-- replaced with red// original:'#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
