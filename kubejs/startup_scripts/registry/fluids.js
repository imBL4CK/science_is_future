StartupEvents.registry("fluid", (e) => {
    //Crude Oil
    e.create("science_is_future:crude_oil", "thick")
        .stillTexture("science_is_future:block/crude_oil_still")
        .flowingTexture("science_is_future:block/crude_oil_flow")
        .tag("c:crude_oil")
        .tint(0x332635)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Heavy Fuel
    e.create("science_is_future:heavy_fuel", "thin")
        .stillTexture("science_is_future:block/water_still")
        .flowingTexture("science_is_future:block/water_flow")
        .tag("c:heavy_fuel")
        .tint(0xb83145)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Light Fuel
    e.create("science_is_future:light_fuel", "thin")
        .stillTexture("science_is_future:block/water_still")
        .flowingTexture("science_is_future:block/water_flow")
        .tag("c:light_fuel")
        .tint(0xc77142)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Refined Fuel
    e.create("science_is_future:refined_fuel", "thin")
        .stillTexture("science_is_future:block/water_still")
        .flowingTexture("science_is_future:block/water_flow")
        .tag("c:refined_fuel")
        .tint(0xf7c431)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molte Rubber
    e.create("science_is_future:molten_rubber", "thick")
        .tag("c:molten_rubber")
        .tag("c:rubber")
        .tint(0x505058)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molte Plastic
    e.create("science_is_future:molten_plastic", "thick")
        .tag("c:molten_plastic")
        .tag("c:plastic")
        .tint(0xddf6ff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
});