import { HUE_MAX, LIGHTNESS, SATURATION } from "@/constants/Helper.constants";
import { HSLColor } from "@/types/Helper.types";

export const getRandomHSL = (): HSLColor => {
  return {
    hue: Math.floor(Math.random() * HUE_MAX),
    saturation: SATURATION,
    ligthness: LIGHTNESS,
  };
};
