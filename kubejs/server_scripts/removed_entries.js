let entry = [
];
ServerEvents.recipes((e) => {
  entry.forEach((remove) => {
    e.remove({ input: remove });
    e.remove({ output: remove });
  });
});
ServerEvents.tags("item", (e) => {
  entry.forEach((remove) => {
    e.add("c:hidden_from_recipe_viewers", remove);
    e.add("science_is_future:removed_feature", remove);
  });
});
