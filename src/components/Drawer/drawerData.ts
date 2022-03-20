/* eslint-disable import/no-absolute-path */
import windowsImagePath from '/img/windows.png'
import discordImagePath from '/img/discord.png'
import spotifyImagePath from '/img/spotify.png'
import rocketImagePath from '/img/rocket.png'
import speakerImagePath from '/img/speaker.png'
import musicPlayerImagePath from '/img/music-player.png'
import cameraImagePath from '/img/camera.png'
import speakerMutedImagePath from '/img/speaker-muted.png'
import micMutedImagePath from '/img/mic-muted.png'
import obsStudioImagePath from '/img/obs.png'
import moonImagePath from '/img/lua.png'
import folderImagePath from '/img/folder.png'
export interface ActionProps {
  id: string
  index: number
  iconPath: string
  label: string
  key: string
  command: {
    type: string
    category: string
    content: any
  }
}

export const data = [
  {
    key: 'system',
    slug: 'Sistema',
    path: windowsImagePath,
    actions: [
      {
        id: '',
        index: -1,
        iconPath: rocketImagePath,
        label: 'Lançar uma aplicação',
        key: 'system',
        command: {
          type: 'system',
          category: 'application',
          content: ''
        }
      },
      {
        id: '',
        index: -1,
        iconPath: speakerImagePath,
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
        iconPath: musicPlayerImagePath,
        label: 'Constrole de mídia',
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
        iconPath: cameraImagePath,
        label: 'Captura de tela',
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
    actions: [
      {
        id: '',
        index: -1,
        iconPath: speakerMutedImagePath,
        label: 'Silenciar/dessilenciar áudio',
        key: 'discord',
        command: {
          type: '',
          category: '',
          content: ''
        }
      },
      {
        id: '',
        index: -1,
        iconPath: micMutedImagePath,
        label: 'Silenciar/dessilenciar o microfone',
        key: 'discord',
        command: {
          type: '',
          category: '',
          content: ''
        }
      }
    ]
  },
  {
    key: 'spotify',
    slug: 'Spotify',
    path: spotifyImagePath,
    actions: []
  },
  {
    key: 'obs',
    slug: 'Obs Studio',
    path: obsStudioImagePath,
    actions: []
  },
  {
    key: 'astro',
    slug: 'Astro',
    path: moonImagePath,
    actions: [
      {
        id: '',
        index: -1,
        iconPath: folderImagePath,
        label: 'Criar grupo',
        key: 'discord',
        command: {
          type: '',
          category: '',
          content: ''
        }
      }
    ]
  }
]
