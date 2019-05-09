/**
 * Convert hex values to rgba
 * @example
 * hexToRGBA("FFF", 0.5);
 * @param {String} hex
 * @param {Number} alpha
 * @returns {String} rgba(255, 255, 255, 1)
 */
const hexToRGBA = (hex, alpha = 1) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shortHandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shortHandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const a = Number(alpha);
  return result ? `rgba(${r}, ${g}, ${b}, ${a})` : null;
};

export default hexToRGBA;
