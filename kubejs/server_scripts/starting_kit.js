PlayerEvents.loggedIn((e) => {

  if (!e.player.stages.has("starting_kit")) {
    e.player.stages.add("starting_kit");
    e.player.give(Item.of('supplementaries:sack', '{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"farmersdelight:glow_berry_custard"},{Count:1b,Slot:1b,id:"farmersdelight:stuffed_pumpkin"},{Count:1b,Slot:2b,id:"farmersdelight:beef_stew"},{Count:1b,Slot:3b,id:"farmersdelight:pasta_with_mutton_chop"},{Count:1b,Slot:4b,id:"farmersdelight:honey_glazed_ham"}],id:"minecraft:shulker_box"}}'))
  }
});
