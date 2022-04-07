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
import sceneImagePath from '/img/scene.png'
import streamImagePath from '/img/stream.png'
import recordImagePath from '/img/record.png'
export interface ActionDataProps {
  id: string
  index: number
  iconPath: string
  alternativeIconPath: string
  label: string
  command: {
    type: string
    category: string
    content: any
  }
}

const systemGroup = {
  key: 'system',
  slug: 'Sistema',
  path: windowsImagePath,
  actions: [
    {
      id: '',
      index: -1,
      iconPath: rocketImagePath,
      alternativeIconPath: rocketImagePath,
      label: 'Lançar uma aplicação',
      command: {
        type: 'application',
        category: 'system',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: speakerImagePath,
      alternativeIconPath: speakerImagePath,
      label: 'Dispositivo de saída',
      command: {
        type: 'device-output',
        category: 'system',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: musicPlayerImagePath,
      alternativeIconPath: musicPlayerImagePath,
      label: 'Constrole de mídia',
      command: {
        type: 'media-control',
        category: 'system',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: cameraImagePath,
      alternativeIconPath: cameraImagePath,
      label: 'Captura de tela',
      command: {
        type: 'screenshot',
        category: 'system',
        content: ''
      }
    }
  ]
}

const discordGroup = {
  key: 'discord',
  slug: 'Discord',
  path: discordImagePath,
  actions: [
    {
      id: '',
      index: -1,
      iconPath: speakerMutedImagePath,
      alternativeIconPath: speakerMutedImagePath,
      label: 'Silenciar/dessilenciar áudio',
      command: {
        type: 'output-mute',
        category: 'discord',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: micMutedImagePath,
      alternativeIconPath: micMutedImagePath,
      label: 'Silenciar/dessilenciar o microfone',
      command: {
        type: 'microphone-mute',
        category: 'discord',
        content: ''
      }
    }
  ]
}

const obsStudioGroup = {
  key: 'obs-studio',
  slug: 'Obs Studio',
  path: obsStudioImagePath,
  actions: [
    {
      id: '',
      index: -1,
      iconPath: sceneImagePath,
      alternativeIconPath: sceneImagePath,
      label: 'Alternar cena',
      command: {
        type: 'scene',
        category: 'obs-studio',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: streamImagePath,
      alternativeIconPath: streamImagePath,
      label: 'Transmissão',
      command: {
        type: 'stream',
        category: 'obs-studio',
        content: ''
      }
    },
    {
      id: '',
      index: -1,
      iconPath: recordImagePath,
      alternativeIconPath: recordImagePath,
      label: 'Gravação',
      command: {
        type: 'record',
        category: 'obs-studio',
        content: ''
      }
    }
  ]
}

const astroSoftwareGroup = {
  key: 'astro',
  slug: 'Astro',
  path: moonImagePath,
  actions: [
    {
      id: '',
      index: -1,
      iconPath: folderImagePath,
      alternativeIconPath: folderImagePath,
      label: 'Agrupar ações',
      command: {
        type: 'group',
        category: 'astro-software',
        content: ''
      }
    }
  ]
}

const spotifyGroup = {
  key: 'spotify',
  slug: 'Spotify',
  path: spotifyImagePath,
  actions: []
}

export const data = [
  systemGroup,
  discordGroup,
  obsStudioGroup,
  astroSoftwareGroup,
  spotifyGroup
]
