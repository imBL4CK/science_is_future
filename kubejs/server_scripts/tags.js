ServerEvents.tags("item", (e) => {
  //Add
  e.add("c:flours/wheat", ["bountifulfares:flour"]);
  e.add("c:foods/cooked_egg", ["bountifulfares:cooked_egg"]);
  e.add("science_is_future:enables_jade", ["create:goggles", "minecraft:spyglass"]);
  e.add("curios:trinket", ["the_beyond:magnet", "minecraft:spyglass", "supplementaries:quiver", "travelertoolbelt:belt", "travelertoolbelt:copper_belt", "travelertoolbelt:iron_belt", "travelertoolbelt:gold_belt", "travelertoolbelt:diamond_belt", "travelertoolbelt:netherite_belt"]);
  e.add("curios:key_item", ["reliable_gliders:glider"]);
  //Remove
  e.remove("curios:belt", ["minecraft:spyglass", "supplementaries:quiver", "travelertoolbelt:belt", "travelertoolbelt:copper_belt", "travelertoolbelt:iron_belt", "travelertoolbelt:gold_belt", "travelertoolbelt:diamond_belt", "travelertoolbelt:netherite_belt"]);
  e.remove("curios:back", ["reliable_gliders:glider"]);
})