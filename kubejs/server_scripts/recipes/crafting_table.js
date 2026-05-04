ServerEvents.recipes((e) => {

  const recipes = [
    //Sack
    {
      result: "supplementaries:sack",
      id: "supplementaries/sack_by_canvas",
      pattern: [
        "CRC",
        "C C",
        "CCC"
      ],
      keys: {
        C: "farmersdelight:canvas",
        R: "#c:ropes",
      },
    },
    {
      result: "supplementaries:sack",
      id: "supplementaries/sack_by_flax",
      pattern: [
        "FRF",
        "F F",
        "FFF"
      ],
      keys: {
        F: "supplementaries:flax",
        R: "#c:ropes",
      },
    },
    //Andesite Funnel
    {
      result: "4x create:andesite_funnel",
      id: "create/andesite_funnel",
      pattern: [
        "A",
        "I"
      ],
      keys: {
        A: "create:andesite_alloy",
        I: "#science_is_future:insulators"
      },
    },
    //Andesite Tunnel
    {
      result: "4x create:andesite_tunnel",
      id: "create/andesite_tunnel",
      pattern: [
        "AA",
        "II"
      ],
      keys: {
        A: "create:andesite_alloy",
        I: "#science_is_future:insulators"
      },
    },
    //Brass Funnel
    {
      result: "2x create:brass_funnel",
      id: "create/brass_funnel",
      pattern: [
        "E",
        "B",
        "I"
      ],
      keys: {
        E: "create:electron_tube",
        B: "#c:ingots/brass",
        I: "#science_is_future:insulators"
      },
    },
    //Brass Tunnel
    {
      result: "2x create:brass_tunnel",
      id: "create/brass_tunnel",
      pattern: [
        "E ",
        "BB",
        "II"
      ],
      keys: {
        E: "create:electron_tube",
        B: "#c:ingots/brass",
        I: "#science_is_future:insulators"
      },
    },
    //Mechanical Belt
    {
      result: "6x create:belt_connector",
      id: "create/mechanical_belt",
      pattern: [
        "III",
        "III",
      ],
      keys: {
        I: "#science_is_future:insulators"
      },
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.keys).id(`science_is_future:minecraft/crafting_table/${recipe.id}`);
  });
});
