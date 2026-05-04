ServerEvents.recipes((e) => {

  const recipes = [
    //Iron Ingot
    {
      id: "minecraft/iron_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_iron",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "minecraft:iron_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Copper Ingot
    {
      id: "minecraft/copper_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_copper",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "minecraft:copper_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Gold Ingot
    {
      id: "minecraft/gold_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_gold",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "minecraft:gold_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Zinc Ingot
    {
      id: "create/zinc_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_zinc",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "create:zinc_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Steel Ingot
    {
      id: "alloyed/steel_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_steel",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "alloyed:steel_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Bronze Ingot
    {
      id: "alloyed/bronze_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_bronze",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "alloyed:bronze_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
    //Brass Ingot
    {
      id: "create/brass_ingot",
      ingredients: [
        {
          "fluid": "science_is_future:molten_brass",
          "type": "fluid_stack",
          "amount": 90
        },
        {
          "item": "science_is_future:terracotta_ingot_cast",
        },
      ],
      results: [
        {
          "id": "create:brass_ingot"
        },
        {
          "id": "science_is_future:terracotta_ingot_cast",
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "create:compacting",
      ingredients: recipe.ingredients,
      results: recipe.results,
    }).id(`science_is_future:create/compacting/${recipe.id}`);
  });
})