import { defineConfig } from "@unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [presetUno(), presetWebFonts({
    fonts: {
      title: 'Montserrat:300,400,700,900',
    }
  })],
});