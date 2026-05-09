ServerEvents.recipes((e) => {

  const recipes = [
    //Precision Mechanism
    {
      id: "create/precision_mecanism",
      ingredient: {
        "tag": "c:plates/gold"
      },
      results: [
        {
          "id": "create:precision_mechanism",
        }
      ],
      sequence: [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:golden_sheet"
            },
            {
              "item": "create:electron_tube",
            }
          ],
          "results": [
            {
              "id": "create:golden_sheet"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:golden_sheet"
            },
            {
              "tag": "science_is_future:insulators",
            }
          ],
          "results": [
            {
              "id": "create:golden_sheet"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:golden_sheet"
            },
            {
              "item": "create:cogwheel",
            }
          ],
          "results": [
            {
              "id": "create:golden_sheet"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:golden_sheet"
            },
            {
              "item": "create:large_cogwheel",
            }
          ],
          "results": [
            {
              "id": "create:golden_sheet"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "create:golden_sheet"
            }
          ],
          "results": [
            {
              "id": "create:golden_sheet"
            }
          ]
        }
      ],
      loops: 1,
      transitional_item: {
        "id": "create:incomplete_precision_mechanism"
      }
    }
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