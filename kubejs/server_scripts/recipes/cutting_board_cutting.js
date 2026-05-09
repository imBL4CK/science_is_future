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
    //Crushed raw silver
    {
      id: "create/crushed_raw_silve",
      ingredients: [
        {
          "tag": "c:raw_materials/silver",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_silver"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw lead
    {
      id: "create/crushed_raw_lead",
      ingredients: [
        {
          "tag": "c:raw_materials/lead",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_lead"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw nickel
    {
      id: "create/crushed_raw_nickel",
      ingredients: [
        {
          "tag": "c:raw_materials/nickel",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_nickel"
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
      id: "create/crushed_raw_aluminum",
      ingredients: [
        {
          "tag": "c:raw_materials/aluminum",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_aluminum"
          }
        },
      ],
      tool: [
        {
          "tag": "c:tools/hammers"
        }
      ]
    },
    //Crushed raw uranium
    {
      id: "create/crushed_raw_uranium",
      ingredients: [
        {
          "tag": "c:raw_materials/uranium",
        },
      ],
      result: [
        {
          "item": {
            "id": "create:crushed_raw_uranium"
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