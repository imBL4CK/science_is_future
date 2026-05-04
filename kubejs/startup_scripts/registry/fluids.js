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
    //Molten Copper
    e.create("science_is_future:molten_copper", "thick")
        .tint(0xe97a52)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1360);
        })
    //Molten Iron
    e.create("science_is_future:molten_iron", "thick")
        .tint(0xff3333)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1810);
        })
    //Molten Gold
    e.create("science_is_future:molten_gold", "thick")
        .tint(0xfaea2e)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1340);
        })
    //Molten Zinc
    e.create("science_is_future:molten_zinc", "thick")
        .tint(0xc6c6b8)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(700);
        })
    //Molten Steel
    e.create("science_is_future:molten_steel", "thick")
        .tint(0x726b71)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1813);
        })
    //Molten Bronze
    e.create("science_is_future:molten_bronze", "thick")
        .tint(0xd3b176)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1320);
        })
    //Molten Brass
    e.create("science_is_future:molten_brass", "thick")
        .tint(0xfada84)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(900);
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