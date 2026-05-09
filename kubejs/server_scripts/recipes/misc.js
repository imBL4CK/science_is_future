ServerEvents.recipes((e) => {
  //Advanced Electronic Component
  e.custom({
    type: "immersiveengineering:blueprint",
    category: "components",
    inputs: [
      {
        tag: "c:plastics",
      },
      {
        basePredicate: {
          item: "create:electron_tube",
        },
        count: 2,
      },
      {
        tag: "c:wires/aluminum",
      },
    ],
    result: {
      id: "immersiveengineering:component_electronic_adv",
    },
  }).id("science_is_future:immersiveengineering/blueprint/advanced_electronic_component",);
  //Circuit Backplane
  e.custom({
    type: "immersiveengineering:blueprint",
    category: "components",
    inputs: [
      {
        tag: "c:plastics",
      },
      {
        tag: "c:plates/copper",
      },
    ],
    result: {
      id: "immersiveengineering:circuit_board",
    },
  }).id("science_is_future:immersiveengineering/blueprint/circuit_backplane",);
  //Bronze
  e.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        "tag": "c:ingots/zinc"
      },
      {
        "tag": "c:ingots/copper"
      },
      {
        "tag": "c:ingots/copper"
      },
      {
        "tag": "c:ingots/copper"
      },
    ],
    energy: 51200,
    input: {
      "basePredicate": {
        "item": "create:cinder_flour",
      },
      "count": 4
    },
    results: [
      {
        "basePredicate": {
          "tag": "c:ingots/bronze"
        },
        "count": 4
      }
    ],
    time: 100,
  }).id("science_is_future:immersiveengineering/arc_furnace/bronze_ingot",);
  //Netherite
  e.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        "tag": "c:ingots/gold"
      },
      {
        "tag": "c:ingots/gold"
      },
      {
        "tag": "c:ingots/gold"
      },
      {
        "tag": "c:ingots/gold"
      },
    ],
    energy: 51200,
    input: {
      "basePredicate": {
        "item": "minecraft:netherite_scrap",
      },
      "count": 4
    },
    results: [
      {
        "item": "minecraft:netherite_ingot",
      }
    ],
    time: 100,
  }).id("science_is_future:immersiveengineering/arc_furnace/netherite_ingot_by_gold_ingots",);
  e.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        "tag": "c:dusts/gold"
      },
      {
        "tag": "c:dusts/gold"
      },
      {
        "tag": "c:dusts/gold"
      },
      {
        "tag": "c:dusts/gold"
      },
    ],
    energy: 51200,
    input: {
      "basePredicate": {
        "item": "minecraft:netherite_scrap",
      },
      "count": 4
    },
    results: [
      {
        "item": "minecraft:netherite_ingot",
      }
    ],
    time: 100,
  }).id("science_is_future:immersiveengineering/arc_furnace/netherite_ingot_by_gold_dusts",);
});
