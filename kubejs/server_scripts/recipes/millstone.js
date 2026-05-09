ServerEvents.recipes((e) => {

  const recipes = [
    //Granite
    {
      ingredients: [
        {
          "tag": "create:stone_types/granite",
        },
      ],
      id: "create/granite",
      processingTime: 100,
      results: [
        {
          "id": "minecraft:red_sand"
        },
        {
          "id": "bountifulfares:feldspar", 
          "count": 2
        },
        {
          "id": "bountifulfares:feldspar", 
          "chance": 0.5,
        },
      ],
    },
    //Diorite
    {
      ingredients: [
        {
          "tag": "create:stone_types/diorite",
        },
      ],
      id: "create/diorite",
      processingTime: 100,
      results: [
        {
          "id": "minecraft:quartz",
          "chance": 0.25,
        },
        {
          "id": "bountifulfares:feldspar", 
          "count": 2
        },
        {
          "id": "bountifulfares:feldspar", 
          "chance": 0.5,
        },
      ],
    },
    //Andesite
    {
      ingredients: [
        {
          "tag": "create:stone_types/andesite",
        },
      ],
      id: "create/andesite",
      processingTime: 100,
      results: [
        {
          "id": "minecraft:cobblestone"
        },
        {
          "id": "bountifulfares:feldspar", 
          "count": 2
        },
        {
          "id": "bountifulfares:feldspar", 
          "chance": 0.5,
        },
      ],
    },
    //Maize
    {
      ingredients: [
        {
          "item": "bountifulfares:maize",
        },
      ],
      id: "bountifulfares/maize",
      processingTime: 100,
      results: [
        {
          "id": "bountifulfares:flour"
        },
        {
          "id": "bountifulfares:flour", 
          "chance": 0.25,
          "count": 2
        },
        {
          "id": "bountifulfares:maize_seeds", 
          "chance": 0.25,
        },
      ],
    },
    //Grass
    {
      ingredients: [
        {
          "item": "minecraft:short_grass",
        },
      ],
      id: "minecraft/short_grass",
      processingTime: 100,
      results: [
        {
          "id": "bountifulfares:grass_seeds",
          "count": 2
        },
      ],
    },
    //Walnut Mulch
    {
      ingredients: [
        {
          "item": "bountifulfares:walnut",
        },
      ],
      id: "bountifulfares/walnut_mulch",
      processingTime: 100,
      results: [
        {
          "id": "bountifulfares:walnut_mulch"
        },
      ],
    },
    //Palm Mulch
    {
      ingredients: [
        {
          "item": "bountifulfares:palm_frond",
        },
      ],
      id: "bountifulfares/palm_mulch",
      processingTime: 100,
      results: [
        {
          "id": "bountifulfares:palm_mulch"
        },
      ],
    },
    //Coconut Coir
    {
      ingredients: [
        {
          "item": "bountifulfares:coconut",
        },
      ],
      id: "bountifulfares/coconut_coir",
      processingTime: 100,
      results: [
        {
          "id": "bountifulfares:coconut_coir"
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "create:milling",
      processing_time: recipe.processingTime,
      ingredients: recipe.ingredients,
      results: recipe.results,
    }).id(`science_is_future:create/milling/${recipe.id}`);
  });
})