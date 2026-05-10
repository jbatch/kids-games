import { defineConfig } from 'vite'

export default defineConfig({
  // Serve the current directory as a static site
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Treat all HTML files as entry points
      input: {
        main:           'index.html',
        mouseAdventure: 'mouse-adventure.html',
        letterHunt:     'letter-hunt.html',
        letterKeyboard: 'letter-keyboard.html',
        emojiMadLibs:   'emoji-mad-libs.html',
        platformer:     'platformer.html',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
