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
})
