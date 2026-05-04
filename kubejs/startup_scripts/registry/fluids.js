StartupEvents.registry("fluid", (e) => {
    //Crude Oil
    e.create("cogs_and_clocks:crude_oil", "thick")
        .stillTexture("cogs_and_clocks:block/crude_oil_still")
        .flowingTexture("cogs_and_clocks:block/crude_oil_flow")
        .tint(0x332635)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molten Copper
    e.create("cogs_and_clocks:molten_copper", "thick")
        .tint(0xe97a52)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1360);
        })
    //Molten Iron
    e.create("cogs_and_clocks:molten_iron", "thick")
        .tint(0xff3333)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1810);
        })
    //Molten Gold
    e.create("cogs_and_clocks:molten_gold", "thick")
        .tint(0xfaea2e)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1340);
        })
    //Molten Zinc
    e.create("cogs_and_clocks:molten_zinc", "thick")
        .tint(0xc6c6b8)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(700);
        })
    //Molten Steel
    e.create("cogs_and_clocks:molten_steel", "thick")
        .tint(0x726b71)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1813);
        })
    //Molten Bronze
    e.create("cogs_and_clocks:molten_bronze", "thick")
        .tint(0xd3b176)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(1320);
        })
    //Molten Brass
    e.create("cogs_and_clocks:molten_brass", "thick")
        .tint(0xfada84)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(900);
        })
    //Molte Rubber
    e.create("cogs_and_clocks:molten_rubber", "thick")
        .tint(0x505058)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Molte Plastic
    e.create("cogs_and_clocks:molten_plastic", "thick")
        .tint(0xddf6ff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
});