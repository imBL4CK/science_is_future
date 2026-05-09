StartupEvents.registry("fluid", (e) => {
    //Crude Oil
    e.create("science_is_future:crude_oil", "thick")
        .stillTexture("science_is_future:block/crude_oil_still")
        .flowingTexture("science_is_future:block/crude_oil_flow")
        .tint(0x332635)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molte Rubber
    e.create("science_is_future:molten_rubber", "thick")
        .tint(0x505058)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molte Plastic
    e.create("science_is_future:molten_plastic", "thick")
        .tint(0xddf6ff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
});