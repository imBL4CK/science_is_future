StartupEvents.registry("item", (e) => {
    e.create("science_is_future:rubber_boots", "boots").material("science_is_future:rubber").tag("minecraft:freeze_immune_wearables").maxDamage(131).unstackable();
    e.create("science_is_future:flint_hammer").maxDamage(131).unstackable().tag("c:tools/hammers");
    e.create("science_is_future:bronze_hammer").maxDamage(500).unstackable().tag("c:tools/hammers");
    e.create("science_is_future:steel_hammer").maxDamage(1000).unstackable().tag("c:tools/hammers");
    e.create("science_is_future:wrought_iron_ingot").tag("c:ingots/wrought_iron").tag("c:ingots");
    e.create("science_is_future:iron_reinforced_plating");
    e.create("science_is_future:diamond_reinforced_plating");
    e.create("science_is_future:netherite_reinforced_plating");
    e.create("science_is_future:rubber").tag("c:rubbers").tag("science_is_future:insulators");
    e.create("science_is_future:plastic_sheet").tag("c:plastics").tag("science_is_future:insulators");
    e.create("science_is_future:tanned_leather");
});