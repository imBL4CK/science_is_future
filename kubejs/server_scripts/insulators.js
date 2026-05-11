ColdSweatEvents.registries((e) => {
    e.addInsulator((entry) => {
        entry.items("science_is_future:tanned_leather")
            .insulation(2,2)
            .slot("item")
    })
    e.addInsulator((entry) => {
        entry.items("science_is_future:rubber", "science_is_future:plastic_sheet")
            .insulation(1,1)
            .slot("item")
    })
    e.addInsulator((entry) => {
        entry.items("science_is_future:engineer_suit", "science_is_future:engineer_leggings")
            .insulation(4,4)
            .slot("armor")
            .immuneToModifier("cold_sweat:blocks", 0.25)
            .immuneToModifier("cold_sweat:freezing", 0.5)
            .immuneToModifier("cold_sweat:on_fire", 0.5)
    })
})
