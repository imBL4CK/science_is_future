ServerEvents.recipes((e) => {

  const recipes = [
    /*Iron Ingot
    {
      id: "minecraft/iron_ingot",
      ingredient: {
        "item": "science_is_future:ingot_cast"
      },
      results: [
        {
          "item": { "id": "science_is_future:ingot_cast" },
          "chance": 1.0,
          "count": 1
        },
        {
          "item": { "id": "minecraft:iron_ingot" },
          "chance": 1.0,
          "count": 1
        }
      ],
      sequence: [
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "science_is_future:ingot_cast"
            },
            {
              "fluid": "science_is_future:molten_iron",
              "type": "fluid_stack",
              "amount": 90
            }
          ],
          "results": [
            {
              "id": "science_is_future:ingot_cast"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "science_is_future:ingot_cast"
            }
          ],
          "results": [
            {
              "id": "science_is_future:ingot_cast"
            }
          ]
        }
      ],
      loops: 1,
      transitional_item: {
        "id": "science_is_future:iron_ingot_cast"
      }
    }*/
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: recipe.ingredient,
      results: recipe.results,
      sequence: recipe.sequence,
      loops: recipe.loops,
      transitional_item: recipe.transitional_item
    }).id(`science_is_future:create/sequenced_assembly/${recipe.id}`);
  });
})