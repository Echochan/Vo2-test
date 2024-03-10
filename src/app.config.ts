export default defineAppConfig({
  pages: [
    'pages/miners/index',
    'pages/planets/index',
    'pages/asteroids/index',
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
