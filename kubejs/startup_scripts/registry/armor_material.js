StartupEvents.registry("armor_material", (e) => {
    //Rubber
    e.create("science_is_future:rubber")
        .defense({
            helmet: 0, 
            chestplate: 0,
            leggings: 0,
            boots: 2
        })
        .equipSound("minecraft:item.armor.equip_leather")
        .repairIngredient(() => "science_is_future:rubber")
    //Engineer Suit
    e.create("science_is_future:engineer_suit")
        .defense({
            helmet: 0, 
            chestplate: 6,
            leggings: 4,
            boots: 0
        })
        .equipSound("minecraft:item.armor.equip_leather")
        .repairIngredient(() => "science_is_future:tanned_leather")
});