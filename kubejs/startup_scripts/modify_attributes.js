ItemEvents.modification((e) => {
  e.modify("science_is_future:rubber_boots", item => {
    const entry = Item.of(item.item().id).attributeModifiers;
    const attributes = entry.withModifierAdded(
      "neoforge:swim_speed",
      { amount: 0.2, id: "identifier", operation: "add_multiplied_base", }, 
      "feet"
    ).withModifierAdded(
      "minecraft:generic.movement_speed",
      { amount: 0.1, id: "identifier", operation: "add_multiplied_base", }, 
      "feet"
    ).withModifierAdded(
      "minecraft:generic.fall_damage_multiplier",
      { amount: -0.5, id: "identifier", operation: "add_multiplied_base", }, 
      "feet"
    )
    item.setAttributeModifiersWithTooltip(attributes.modifiers())
  })
});