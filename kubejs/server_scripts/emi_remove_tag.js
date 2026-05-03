ServerEvents.tags("item", (e) => {
  const customtag = [
    //Emi remove Stacks
    {
      tag: "c:hidden_from_recipe_viewers",
      item: ["#forge:ores/redstone", "ae2:facade"],
    },
  ];
  customtag.forEach((custom) => {
    e.add(custom.tag, custom.item);
  });
});
