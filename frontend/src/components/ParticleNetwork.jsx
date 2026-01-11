import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function ParticleNetwork() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(() => ({
    fullScreen: false,
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'bubble'],
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
            color: '#ff10f0',
          },
        },
        bubble: {
          distance: 150,
          size: 6,
          duration: 0.4,
          opacity: 1,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#ff10f0', '#06b6d4', '#a855f7', '#22c563'],
      },
      links: {
        color: {
          value: '#ffffff',
        },
        distance: 150,
        enable: true,
        opacity: 0.08,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.02,
        },
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.6,
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle'],
      },
      size: {
        value: {
          min: 1,
          max: 4,
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.03,
          opacity: 1,
          color: {
            value: '#ff10f0',
          },
        },
        lines: {
          enable: true,
          frequency: 0.005,
          opacity: 0.5,
          color: {
            value: '#ff10f0',
          },
        },
      },
    },
    detectRetina: true,
  }), [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  )
}

export default ParticleNetwork

