export default defineAppConfig({
  pages: [
    'pages/miners/index',
    'pages/asteroids/index',
    'pages/planets/index',

    'pages/minerHistory/index',
    'pages/createMiner/index',
  ],
  window: {
    navigationStyle: 'custom',
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/miners/index',
        text: 'Miners',
      },
      {
        pagePath: 'pages/asteroids/index',
        text: 'Asteroids',
      },
      {
        pagePath: 'pages/planets/index',
        text: 'Planets',
      },
    ]
  },
})
