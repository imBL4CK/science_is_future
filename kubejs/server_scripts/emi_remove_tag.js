ServerEvents.tags("item", (e) => {
  const customtag = [
    //Emi remove Stacks
    {
      tag: "c:hidden_from_recipe_viewers",
    },
  ];
  customtag.forEach((custom) => {
    e.add(custom.tag, custom.item);
  });
});
