ServerEvents.recipes((e) => {

  const recipes = [
    //Crushed raw iron
    {
      id: "create/crushed_raw_iron",
      ingredients: [
        {
          "tag": "c:raw_materials/iron",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_iron"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw copper
    {
      id: "create/crushed_raw_copper",
      ingredients: [
        {
          "tag": "c:raw_materials/copper",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_copper"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw gold
    {
      id: "create/crushed_raw_gold",
      ingredients: [
        {
          "tag": "c:raw_materials/gold",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_gold"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw zinc
    {
      id: "create/crushed_raw_zinc",
      ingredients: [
        {
          "tag": "c:raw_materials/zinc",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_zinc"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "farmersdelight:cutting",
      ingredients: recipe.ingredients,
      result: recipe.result,
      tool: recipe.tool
    }).id(`science_is_future:farmersdelight/cutting/${recipe.id}`);
  });
})