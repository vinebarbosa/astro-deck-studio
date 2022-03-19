/* eslint-disable import/no-absolute-path */
import windowsImagePath from '/img/windows.png'
import discordImagePath from '/img/discord.png'
import spotifyImagePath from '/img/spotify.png'

export const data = [
  {
    key: 'system',
    slug: 'Sistema',
    path: windowsImagePath,
    actions: [
      {
        id: '',
        index: -1,
        iconPath: '',
        label: 'Lançar uma aplicação',
        key: 'system',
        command: {
          type: 'launch',
          category: '',
          content: ''
        }
      },
      {
        id: '',
        index: -1,
        iconPath: '',
        label: 'Dispositivo de saída',
        key: 'system',
        command: {
          type: '',
          category: '',
          content: ''
        }
      },
      {
        id: '',
        index: -1,
        iconPath: '',
        label: 'Constrole de Mídia',
        key: 'system',
        command: {
          type: '',
          category: '',
          content: ''
        }
      },
      {
        id: '',
        index: -1,
        iconPath: '',
        label: 'Captura de Tela',
        key: 'system',
        command: {
          type: '',
          category: '',
          content: ''
        }
      }
    ]
  },
  {
    key: 'discord',
    slug: 'Discord',
    path: discordImagePath,
    actions: []
  },
  {
    key: 'spotify',
    slug: 'Spotify',
    path: spotifyImagePath,
    actions: []
  }
]
