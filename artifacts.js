const artifacts = [
{
    name: "Ambhibian-Fossil",
    description: "The relatively short hind legs suggest some kind of primordial toad.",
    sellPrice: "150g",
    location: "Forest (0.6%), Mountain (0.6%), Fishing Chest (3.1-3.4%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Amphibian_Fossil.png"
},
{
    name: "Anchor",
    description: "It may have belonged to ancient pirates.",
    sellPrice: "100g",
    location: "Beach (4%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c0/Anchor.png"
},
{
    name: "Ancient-Doll",
    description: "An ancient doll covered in grime. This doll may have been used as a toy, a decoration, or a prop in some kind of ritual.",
    sellPrice: "60g",
    location: "Mountain (3%), Forest (2.4%), Bus Stop (2.4%), Town (0.8%), Fishing Chest (0.8-0.9%), Feast of the Winter Star, Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c0/Ancient_Doll.png"
},
{
    name: "Ancient-Drum",
    description: "It's a drum made from wood and animal skin. It has a low, reverberating tone.",
    sellPrice: "100g",
    location: "Bus Stop (0.7%), Forest (0.7%), Town (0.4%), Frozen Geode (3%), Omni Geode (1%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Ancient_Drum.png"
},
{
    name: "Ancient-Seed",
    description: "It's a dry old seed from some ancient plant. By all appearances it's long since dead...",
    sellPrice: "5g",
    location: "Forest (0.7%), Mountain (0.7%), Fishing Chest (0.8-0.9%), Monster drop (Bug, Cave Fly, Grub, Mutant Fly, Mutant Grub: 0.5%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/af/Ancient_Seed.png"
},
{
    name: "Ancient-Sword",
    description: "It's the remains of an ancient sword. Most of the blade has turned to rust, but the hilt is very finely crafted.",
    sellPrice: "100g",
    location: "Forest (0.7%), Mountain (0.6%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/76/Ancient_Sword.png"
},
{
    name: "Arrowhead",
    description: "A crudely fashioned point used for hunting.",
    sellPrice: "40g",
    location: "Mountain (1.6%), Forest (1.6%), Bus Stop (1.6%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png"
},
{
    name: "Bone-Flute",
    description: "It's a prehistoric wind instrument carved from an animal's bone. It produces an eerie tone.",
    sellPrice: "100g",
    location: "Forest (0.7%), Mountain (0.7%), Town (0.4%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Bone_Flute.png"
},
{
    name: "Chewing-Stick",
    description: "Ancient people chewed on these to keep their teeth clean.",
    sellPrice: "50g",
    location: "Mountain (1.5%), Forest (1.5%), Town (0.8%), Fishing Chest (0.8-0.9%), Duggy drop (2%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Chewing_Stick.png"
},
{
    name: "Chicken-Statue",
    description: "It's a statue of a chicken on a bronze base. The ancient people of this area must have been very fond of chickens.",
    sellPrice: "50g",
    location: "Farm (9%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/af/Chicken_Statue.png"
},
{
    name: "Chipped-Amphora",
    description: "An ancient vessel made of ceramic material. Used to transport both dry and wet goods.",
    sellPrice: "40g",
    location: "Town (3%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Chipped_Amphora.png"
},
{
    name: "Dinosaur-Egg",
    description: "A giant dino egg... The entire shell is still intact!",
    sellPrice: "40g",
    location: "Mountain (0.6%), Fishing Chest (0.8-0.9%), Foraged on prehistoric floors of the Skull Cavern, Pepper Rex drop (10%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a1/Dinosaur_Egg.png"
},
{
    name: "Dried-Starfish",
    description: "A starfish from the primordial ocean. It's an unusually pristine specimen!",
    sellPrice: "40g",
    location: "Beach (8%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/df/Dried_Starfish.png"
},
{
    name: "Dwarf-Gadget",
    description: "It's a piece of the advanced technology once known to the dwarves. It's still glowing and humming, but you're unable to understand how it works.",
    sellPrice: "200g",
    location: "Tilling in Mines (floor 41-80) (0.1%), Magma Geode (4%), Omni Geode (1%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/58/Dwarf_Gadget.png"
},
{
    name: "Dwarf-Scroll-I",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a red bow.",
    sellPrice: "1g",
    location: "Tilling in Mines/Skull Cavern (any floor) (0.16%), Several monsters (0.5% each)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Dwarf_Scroll_I.png"
},
{
    name: "Dwarf-Scroll-II",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a green ribbon.",
    sellPrice: "1g",
    location: "Tilling in Mines (floor 1-40) (0.1%), Ghost drop (0.5%), Frost Bat drop (0.5%), Dust Sprite drop (0.5%), Blue Slime drop (0.5%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Dwarf_Scroll_II.png"
},
{
    name: "Dwarf-Scroll-III",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a blue rope.",
    sellPrice: "1g",
    location: "Several monsters drop (1.5% for Blue Slime, 0.5% for others)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Dwarf_Scroll_III.png"
},
{
    name: "Dwarf-Scroll-IV",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a golden chain.",
    sellPrice: "1g",
    location: "Any Monster (other than Serpent, Skeleton, Wilderness Golem, Carbon Ghost, Iridium Bat, Iridium Crab, and Haunted Skull) (0.1%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/85/Dwarf_Scroll_IV.png"
},
{
    name: "Dwarvish-Helm",
    description: "It's one of the helmets commonly worn by dwarves. The thick metal plating protects them from falling debris and stalactites.",
    sellPrice: "100g",
    location: "Tilling in Mines (floor 1-40) (0.1%), Geode (3%), Omni Geode (1%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Dwarvish_Helm.png"
},
{
    name: "Elvish-Jewelry",
    description: "Dirty but still beautiful. On the side is a flowing script thought by some to be the ancient language of the elves. No Elvish bones have ever been found.",
    sellPrice: "200g",
    location: "Forest (0.8%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Elvish_Jewelry.png"
},
{
    name: "Glass Shards",
    description: "A mixture of glass shards smoothed by centuries of ocean surf. These could have belonged to an ancient mosaic or necklace.",
    sellPrice: "20g",
    location: "Beach (7%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Glass_Shards.png"
},
{
    name: "Golden-Mask",
    description: "A creepy golden mask probably used in an ancient magic ritual. A socket in the forehead contains a large purple gemstone.",
    sellPrice: "500g",
    location: "Desert (3%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Golden_Mask.png"
},
{
    name: "Golden-Relic",
    description: "It's a golden slab with heiroglyphs and pictures emblazoned onto the front.",
    sellPrice: "250g",
    location: "Desert (6%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/37/Golden_Relic.png"
},
{
    name: "Nautilus-Fossil",
    description: "This must've washed up ages ago from an ancient coral reef.",
    sellPrice: "80g",
    location: "Beach (1.8%), Fishing Chest (3.1-3.4%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Nautilus_Fossil.png"
},
{
    name: "Ornamental Fan",
    description: "This exquisute fan most likely belonged to a noblewoman. Historians believe that the valley was a popular sixth-era vacation spot for the wealthy.",
    sellPrice: "300g",
    location: "Beach (1.6%), Forest (0.7%), Town (0.6%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Ornamental_Fan.png"
},
{
    name: "Palm-Fossil",
    description: "Palm Fossils are relatively common, but this happens to be a particularly well-preserved specimen.",
    sellPrice: "100g",
    location: "Desert (7%), Forest (0.6% + 3-5%), Beach (0.6%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Palm_Fossil.png"
},
{
    name: "Prehistoric-Handaxe",
    description: "One of the earliest tools employed by humans. This 'crude' tool was created by striking one rock with another to form a sharp edge.",
    sellPrice: "50g",
    location: "Bus Stop (4%), Mountain (3%), Forest (3%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/07/Prehistoric_Handaxe.png"
},
{
    name: "Prehistoric-Rib",
    description: "Little gouge marks on the side suggest that this rib was someone's dinner.",
    sellPrice: "100g",
    location: "Town (2.2-4%), Farm (0.8%), Pepper Rex drop (30%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/62/Prehistoric_Rib.png"
},
{
    name: "Prehistoric-Scapula",
    description: "Commonly known as a 'shoulder blade'... It's unclear what species it belonged to.",
    sellPrice: "100g",
    location: "Forest (3-6%), Town (0.7%), Skeleton drop (0.5%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ee/Prehistoric_Scapula.png"
},
{
    name: "Prehistoric-Skull",
    description: "This is definitely a mammalian skull.",
    sellPrice: "100g",
    location: "Mountain (0.6% + 3-6%), Haunted Skull drop (1.3%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/58/Prehistoric_Skull.png"
},
{
    name: "Prehistoric-Tibia",
    description: "A thick and sturdy leg bone.",
    sellPrice: "100g",
    location: "Railroad (4-8%), Forest (0.6%), Pepper Rex drop (30%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Prehistoric_Tibia.png"
},
{
    name: "Prehistoric-Tool",
    description: "Some kind of gnarly old digging tool.",
    sellPrice: "50g",
    location: "Bus Stop (3%), Forest (2.1%), Mountain (2%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/26/Prehistoric_Tool.png"
},
{
    name: "Prehistoric-Vertebra",
    description: "A segment of some prehistoric creature's spine.",
    sellPrice: "100g",
    location: "Bus Stop (0.7% + 3-5%), Pepper Rex drop (30%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e9/Prehistoric_Vertebra.png"
},
{
    name: "Rare-Disc",
    description: "A heavy black disc studded with peculiar red stones. When you hold it, you're overwhelmed with a feeling of dread.",
    sellPrice: "300g",
    location: "Fishing Chest (0.8-0.9%), Bats drop (except Iridium Bat) (0.1%), Shadow Brute, Shadow Shaman, Spider drop (0.3%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Rare_Disc.png"
},
{
    name: "Rusty-Cog",
    description: "A well preserved cog that must have been part of some ancient machine. This could be dwarven technology.",
    sellPrice: "25g",
    location: "Mountain (4%), Tilling in Mines/Skull Cavern (any floor) (0.16%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/74/Rusty_Cog.png"
},
{
    name: "Rusty-Spoon",
    description: "A plain old spoon, probably ten years old. Not very interesting.",
    sellPrice: "25g",
    location: "Town (4% + 6-11%), Fishing Chest (0.8-0.9%), Tilling in Mines/Skull Cavern (any floor) (0.16%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Rusty_Spoon.png"
},
{
    name: "Rusty-Spur",
    description: "An old spur that was once attached to a cowboy's boot. People must have been raising animals in this area for many generations.",
    sellPrice: "25g",
    location: "Farm (10%), Tilling in Mines/Skull Cavern (any floor) (0.16%), Fishing Chest (0.8-0.9%), Artifact Trove (3.7%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Rusty_Spur.png"
},
{
    name: "Skeletal-Hand",
    description: "It's a wonder all these ancient little pieces lasted so long.",
    sellPrice: "100g",
    location: "Backwoods (4-8%), each (0.6%), Haunted Skull drop (1.3%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/da/Skeletal_Hand.png"
},
{
    name: "Skeletal-Tail",
    description: "It's pretty short for a tail.",
    sellPrice: "100g",
    location: "Tilling in Mines/Skull Cavern (any floor), Fishing Chest (3.1-3.4%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/29/Skeletal_Tail.png"
},
{
    name: "Strange-Doll", 
    description: "???",
    sellPrice: "1,000g",
    location: "Farm (0.08%), Bus Stop (0.07%), Town (0.07%), Forest (0.06%), Mountain (0.06%), Beach (0.06%), Tilling in Mines/Skull Cavern (any floor) (0.03%), Fishing Chest (≈0.14%), Secret Note #17",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/39/Strange_Doll_%28green%29.png"
},
{
    name: "Strange-Doll",
    description: "???",
    sellPrice: "1,000g",
    location: "Farm (0.08%), Bus Stop (0.07%), Town (0.07%), Forest (0.06%), Mountain (0.06%), Beach (0.06%), Tilling in Mines/Skull Cavern (any floor) (0.03%), Fishing Chest (≈0.14%), Secret Note #18",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Strange_Doll_%28yellow%29.png"
},
{
    name: "Trilobite",
    description: "A long extinct relative of the crab.",
    sellPrice: "50g",
    location: "Beach (1.7% + 2.3-5%), Forest (1.9%), Mountain (1.8%), Bone Nodes (0.8%)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Trilobite.png"
}
];

module.exports = artifacts;