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