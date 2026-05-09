ItemEvents.modifyTooltips((e) => {
  const pink = 0xff55ff
  const yellow = 0xffd200
  const red = 0xf44336
  const green = 0x1ef000

  e.modify("#science_is_future:enables_jade", (tooltip) => {
    tooltip.insert(1, Text.of("Enables block visualization overlay").color(pink));
  });
  e.modify("minecraft:spyglass", (tooltip) => {
    tooltip.insert(2, Text.of("Use a keybind to zoom with the spyglass equipped").color(green));
  });
})