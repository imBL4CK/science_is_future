StartupEvents.registry("armor_material", (e) => {
    e.create("science_is_future:rubber")
    .defense({
        helmet: 0, 
        chestplate: 0,
        leggings: 0,
        boots: 2
    })
    .equipSound("minecraft:item.armor.equip_leather")
    .repairIngredient(() => "science_is_future:rubber")
});