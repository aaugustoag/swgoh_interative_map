Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		selectedMission: '',
		seen: false,
		hide: function() {
			this.seen = false;
		},
		squads: {
			'Negociator Full': {
			capital: 'negociator',
			toons: ['anakin_jedi_starfighter','umbaran_starfighter','btl-b_y-wing'],
			reinforcement: ['clone_sergeant_arc-170', 'plo_koon_jedi_starfighter','ahsoka_tano_jedi_starfighter', 'rex_arc-170'],
			},
			'Negociator Alt': {
			capital: 'negociator',
			toons: ['anakin_jedi_starfighter','umbaran_starfighter','biggs_darklighter_x-wing'],
			reinforcement: ['clone_sergeant_arc-170', 'plo_koon_jedi_starfighter','ahsoka_tano_jedi_starfighter', 'han_millennium_falcon'],
			},
			'Milf Full': {
			capital: 'home_one',
			toons: ['han_millennium_falcon','bistan_u-wing','rebel_ywing'],
			reinforcement: ['phantom_ii','biggs_darklighter_x-wing','cassian_u-wing','ghost'],
			},
			'Milf Red Squadrom': {
			capital: 'home_one',
			toons: ['han_millennium_falcon','bistan_u-wing','biggs_darklighter_x-wing'],
			reinforcement: ['phantom_ii','cassian_u-wing','ghost','wedge_antilles_x-wing'],
			},
			'Raddus Full': {
			capital: 'raddus',
			toons: ['rey_mf','resistance_xwing','biggs_xwing','sargy_arc','poe_xwing','ebon_hawk','lando_mf']
			},
			'Padmé C3': {
			leader: 'padme_amidala',
			toons: ['ahsoka_tano', 'c-3po', 'general_kenobi', 'jedi_knight_anakin']
			},
			'Padmé Clones': {
			leader: 'padme_amidala',
			toons: ['echo', 'arc_trooper', 'ct-7567_rex', 'fives']
			},
			'Padmé Barris': {
			leader: 'padme_amidala',
			toons: ['ahsoka_tano', 'barriss_offee', 'general_kenobi', 'jedi_knight_anakin']
			},
			'Slow Padmé': {
			leader: 'padme_amidala',
			toons: ['ahsoka_tano', 'barriss_offee', 'clone_wars_chewbacca', 'jedi_knight_anakin']
			},
			'GS and Padawan': {
			leader: 'general_skywalker',
			toons: ['ahsoka_tano']
			},
			'JKRevan': {
			leader: 'jedi_knight_revan',
			toons: ['grand_master_yoda', 'jolee_bindo', 'bastila_shan', 'general_kenobi']
			},
			'Republic Revan': {
			leader: 'jedi_knight_revan',
			toons: ['grand_master_yoda', 'jolee_bindo', 'jedi_knight_anakin', 'general_kenobi']
			},
			'Hermit Revan': {
			leader: 'jedi_knight_revan',
			toons: ['grand_master_yoda', 'jolee_bindo', 'bastila_shan', 'hermit_yoda']
			},
			'GS': {
			leader: 'general_skywalker',
			toons: ['echo', 'arc_trooper', 'ct-7567_rex', 'fives']
			},
			'CLS': {
			leader: 'commander_luke_skywalker',
			toons: ['c-3po', 'r2-d2', 'chewbacca', 'han_solo']
			},
			'RTJ': {
			leader: 'rey_(jedi_training)',
			toons: ['bb-8', 'c-3po', 'r2-d2', 'resistance_trooper']
			},
			'Rey Heros': {
			leader: 'gl_rey',
			toons: ['hero_finn', 'hero_poe', 'finn', 'poe']
			},
			'Shaaki Ti Family': {
			leader: 'shaak_ti',
			toons: ['echo', 'arc_trooper', 'ct-7567_rex', 'fives']
			},
		},
		territorys: {
			'formations_ls': {
			abilities: [
				"Level 1: The allied Capital Ship gains two abilities, Assault Formation and Defensive Formation. Allied ships start in Defensive Formation.",
				"Level 2: Add to Defensive Formation: Allied non-Capital ships recover 25% of their Max Health and all of their Protection.", 
				"Level 3: Add to Assault Formation: Until a new Formation is issued, allied non-Capital ships deal 100% more damage.",	
			],
			skills: [
				"Assault Formation: Reduce allied non-Capital ships' cooldowns by 2 and they gain 50% Turn Meter. This ship takes a bonus turn without reducing its cooldowns. This ability starts on cooldown and shares a cooldown with Defensive Formation. (Cooldown: 2).",
				"Defensive Formation: Until a new Formation is issued, allied Tanks Taunt at the start of each turn if they don't already have it. This ship takes a bonus turn without reducing its cooldowns. This ability starts on cooldown and shares a cooldown with Assault Formation. (Cooldown: 2)",
			],
			},
			'republic_resolve_ls': {
			abilities: [
				"Level 1: All Galactic Republic characters have +10% Tenacity and Potency.",
				"Level 2: All Galactic Republic characters have +10% Tenacity and Potency, deal 25% more damage when they use an ability targeting an Elite enemy and are immune to Stun.",
				"Level 3: All Galactic Republic characters have +25% Tenacity and Potency, deal 25% more damage when they use an ability targeting an Elite enemy, are immune to Stun, and take a bonus turn whenever they defeat an enemy.",//3
			],
			},
			'core_ship_ls': {
			conditions: [
				"Starts at Level 3",
			],
			abilities: [
				"Level 3: All Separatist characters have +15% Offense and Speed, and call another random Separatist ally to assist, dealing 40% less damage, whenever they use an ability during their turn. This damage penalty excludes attacks based on Health.",
				"Level 2: All Separatist characters have +15% Offense and Speed.",
				"Level 1: All Separatist characters have +15% Offense.",
				"Disabled: (Core Ship destroyed)",
			],
			},
			'hailfire_tank_ls': {
			conditions: [
				"Starts at Level 3",
			],
			abilities: [
				"Level 3: Deal Physical damage to all enemies and inflict Defense Down, Offense Down, Stagger, Tenacity Down, and 3 Damage Over Time debuffs for 2 turns.",
				"Level 2: Deal Physical damage to target enemy and two random enemies, dealing 20% less damage. Inflict 3 Damage Over Time debuffs on each of them and Stagger them for 2 turns.",
				"Level 1: Deal Physical damage to target enemy, dealing 40% less damage, and inflict 3 Damage Over Time debuffs for 2 turns.",
				"Disabled: (Hailfire Tank destroyed)",
			],
			},
			'at_te_ls': {
			conditions: [
				"Granted to Galactic Republic characters only",
			],
			abilities: [
				"Level 1: Deal Physical damage to all enemies and inflict Healing Immunity for 2 turns.This attack can't be evaded. This ability starts on cooldown.",
				"Level 2: Deal Physical damage to all enemies dealing 25% more damage, and inflict Healing Immunity for 2 turns. Remove 10 stacks of Droid Battalion from all B1s and 3 stacks of Droid Battalion from all B2s. This attack can't be evaded. This ability starts on cooldown.",
				"Level 3: Deal Physical damage to all enemies, dealing 50% more damage, and inflict Healing Immunity for 2 turns. Deal massive damage to target non-Elite enemy. Remove 10 stacks of Droid Battalion from all B1s and 3 stacks of Droid Battalion from all B2s. This attack can't be evaded. This ability starts on cooldown.",
			],
			},
			'laat_ls': {
			abilities: [
				"Level 1: Deal Physical damage to all enemies and dispel all buffs on them",
				"Level 2: Deal Physical damage to all enemies, dealing 20% more damage, inflict 2 Damage Over Time debuffs for 2 turns, and dispel all buffs on them.",
				"Level 3: Deal Physical damage to all enemies, dealing 40% more damage, and inflict 2 Damage Over Time, Defense Down, and Offense Down debuffs for 2 turns, and dispel all buffs on them."]
			},
			'metal_mayhem_ls': {
			conditions: [
				"Starts on Level 3",
			],
			abilities: [
				"Level 3: All Droid allies have 35% Critical CHance and Critical Damage. Whenever they critically hit an enemy, they inflict a Damage Over Time debuff for 2 turns, which can't be evaded or resisted, and gain 10% Turn Meter",
				"Level 2: All Droid allies have +20% Critical Chance. Whenever they critically hit an enemy, they inflict a Damage Over Time debuff for 2 turns, which can't be evaded or resisted",
				"Level 1: All Droid allies have +10% Critical Chance.",
				"Disabled: (Metal Mayhem destroyed)"
			]
			},
			'droid_factory_ls': {
			conditions: [
				"Starts at Level 3",
			],
			abilities: [
				"Level 3: Summon a B2 Rocket Trooper to the ally slot if it's available. This B2 Rocket Trooper Taunts for 1 turn at the end of each of its turns. Droid allies reset their cooldowns at the start of their turn for 2 turns, and Separatist allies gain 50% Turn Meter. Dispel all buffs on all enemies, which can't be evaded.",
				"Level 2: Summon a Geonosis B1 Battle Droid Commander to the ally slot if it's available. Separatist allies gain 50% Turn Meter. Dispel all buffs on all enemies, which can't be evaded.",
				"Level 1: Summon a Geonosis B1 Battle Droid to the ally slot if it's available. Dispel all buffs on all enemies, which can't be evaded.",
				"Disabled: (Droid Factory destroyed)"
			]
			},
		},
		squadron: [
			{	
			id: 0,
			name: 'Squadron 1',
			toons: [
			['first_order_tie_fighter','hyena_bomber','tie_reaper','tie_advanced_x1','tie_silencer'],
			['lando_millennium_falcon','ebon_hawk','hyena_bomber','btl-b_y-wing','han_millennium_falcon'],
			['ahsoka_tano_jedi_starfighter','vulture_droid','plo_koon_jedi_starfighter','jedi_consular_starfighter','emperor_shuttle']
			]},
			{	
			id: 1,
			name: 'Squadron 2',
			toons: [
			['biggs_darklighter_x-wing','han_millennium_falcon','geonosian_spy_starfighter','sun_fac_starfighter','btl-b_y-wing'],
			['scimitar','hyena_bomber','emperor_shuttle','geonosian_spy_starfighter','btl-b_y-wing'],
			['cassian_u-wing','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','ebon_hawk']
			]},
			{	
			id: 2,
			name: 'Squadron 3',
			toons: [
			['ahsoka_tano_jedi_starfighter','jedi_consular_starfighter','rex_arc-170','vulture_droid','plo_koon_jedi_starfighter'],
			['ebon_hawk','gauntlet_starfighter','wedge_antilles_x-wing','phantom_ii','hyena_bomber'],
			['vulture_droid','rex_arc-170','poe_dameron_x-wing','biggs_darklighter_x-wing','wedge_antilles_x-wing']
			]},
			{	
			id: 3,
			name: 'Squadron 4',
			toons: [
			['wedge_antilles_x-wing','poe_dameron_x-wing','plo_koon_jedi_starfighter','han_millennium_falcon','tie_silencer'],
			['cassian_u-wing','ebon_hawk','geonosian_spy_starfighter','poe_dameron_x-wing','scimitar'],
			['ahsoka_tano_jedi_starfighter','emperor_shuttle','plo_koon_jedi_starfighter','vulture_droid','rex_arc-170']
			]},
			{	
			id: 4,
			name: 'Squadron 5',
			toons: [
			['han_millennium_falcon','ig-2000','rey_millennium_falcon','btl-b_y-wing','xanadu_blood'],
			['ebon_hawk','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','ghost'],
			['btl-b_y-wing','phantom_ii','gauntlet_starfighter','rex_arc-170','umbaran_starfighter']
			]},
			{	
			id: 5,
			name: 'Squadron 6',
			toons: [
			['han_millennium_falcon','phantom_ii','kylo_ren_command_shuttle','emperor_shuttle','cassian_u-wing'],
			['han_millennium_falcon','rex_arc-170','btl-b_y-wing','xanadu_blood','gauntlet_starfighter'],
			['vulture_droid','han_millennium_falcon','ebon_hawk','plo_koon_jedi_starfighter','umbaran_starfighter']
			]},
			{	
			id: 6,
			name: 'Squadron 1',
			toons: [
			['bb-8','hera_syndulla','garazeb_zeb_orrelios','chirrut_imwe','general_kenobi'],
			['barriss_offee','r2-d2','sabine_wren','rose_tico','amilyn_holdo'],
			['coruscant_underworld_police','stormtrooper_han','resistance_trooper','resistance_pilot','rey_(scavenger)']
			]},
			{	
			id: 7,
			name: 'Squadron 2',
			toons: [
			['c-3po','finn','garazeb_zeb_orrelios','hermit_yoda','enfys_nest'],
			['ahsoka_tano','c-3po','biggs_darklighter','shaak_ti','visas_marr'],
			['commander_luke_skywalker','enfys_nest','general_kenobi','finn','r2-d2']
			]},
			{	
			id: 8,
			name: 'Squadron 3',
			toons: [
			['bb-8','commander_luke_skywalker','garazeb_zeb_orrelios','finn','hera_syndulla'],
			['amilyn_holdo','r2-d2','barriss_offee','sabine_wren','c-3po'],
			['l3-37','pao','luminara_unduli','ahsoka_tano_(fulcrum)','princess_leia']
			]},
			{	
			id: 9,
			name: 'Squadron 4',
			toons: [
			['c-3po','hera_syndulla','garazeb_zeb_orrelios','hermit_yoda','finn'],
			['baze_malbus','rey_(jedi_training)','visas_marr','c-3po','biggs_darklighter'],
			['amilyn_holdo','r2-d2','barriss_offee','sabine_wren','c-3po']
			]},
			{	
			id: 10,
			name: 'Squadron 5',
			toons: [
			['ahsoka_tano','rose_tico','biggs_darklighter','chirrut_imwe','visas_marr'],
			['chewbacca','rey_(jedi_training)','luminara_unduli','l3-37','princess_leia'],
			['ahsoka_tano','c-3po','biggs_darklighter','hera_syndulla','visas_marr']
			]},
			{	
			id: 11,
			name: 'Squadron 6',
			toons: [
			['coruscant_underworld_police','stormtrooper_han','resistance_trooper','resistance_pilot','rey_(scavenger)'],
			['commander_luke_skywalker','shaak_ti','hermit_yoda','finn','r2-d2'],
			['ct-7567_rex','jawa_scavenger','cc-2224_cody','echo','ugnaught']
			]},
			{	
			id: 12,
			name: 'Squadron 1',
			toons: [
			['baze_malbus','rey_(jedi_training)','visas_marr','bb-8','biggs_darklighter'],
			['l3-37','lobot','bb-8','ahsoka_tano_(fulcrum)','princess_leia'],
			['ugnaught','jawa','r2-d2','hoth_rebel_soldier','admiral_ackbar']
			]},
			{	
			id: 13,
			name: 'Squadron 2',
			toons: [
			['c-3po','commander_luke_skywalker','garazeb_zeb_orrelios','general_kenobi','enfys_nest'],
			['ahsoka_tano','commander_luke_skywalker','biggs_darklighter','shaak_ti','visas_marr'],
			['finn','bb-8','garazeb_zeb_orrelios','commander_luke_skywalker','enfys_nest']
			]},
			{	
			id: 14,
			name: 'Squadron 3',
			toons: [
			['general_kenobi','commander_luke_skywalker','bb-8','finn','hermit_yoda'],
			['barriss_offee','hera_syndulla','hoth_rebel_scout','commander_luke_skywalker','amilyn_holdo'],
			['coruscant_underworld_police','stormtrooper_han','resistance_trooper','resistance_pilot','r2-d2']
			]},
			{	
			id: 15,
			name: 'Squadron 4',
			toons: [
			['hermit_yoda','ahsoka_tano_(fulcrum)','garazeb_zeb_orrelios','finn','shaak_ti'],
			['amilyn_holdo','r2-d2','barriss_offee','biggs_darklighter','rose_tico'],
			['admiral_ackbar','princess_leia','luminara_unduli','ahsoka_tano_(fulcrum)','bb-8']
			]},
			{	
			id: 16,
			name: 'Squadron 5',
			toons: [
			['bb-8','lobot','r2-d2','ahsoka_tano_(fulcrum)','princess_leia'],
			['rey_(jedi_training)','shaak_ti','baze_malbus','rose_tico','visas_marr'],
			['c-3po','ct-7567_rex','garazeb_zeb_orrelios','hermit_yoda','l3-37']
			]},
			{	
			id: 17,
			name: 'Squadron 6',
			toons: [
			['coruscant_underworld_police','stormtrooper_han','resistance_trooper','resistance_pilot','rey_(scavenger)'],
			['chewbacca','princess_leia','luminara_unduli','bb-8','admiral_ackbar'],
			['ahsoka_tano','c-3po','biggs_darklighter','shaak_ti','visas_marr']
			]},
			],
			alertVector: [
				"Don't get star",
				"Only ONE star",
				"Only TWO star",
				"Total Focus",
				"Focus on Bottom Missions",
				"Focus on Middle Missions",
				"ONLY Bottom Missions",
				"ONLY Middle Missions",
			],
			
			missions: [{		
				id: 'abi_1', 
				name: 'Bravery', 
				type: 'bravery_ls',
				instruction: 'null', 
				position: 'right',
				description: "Whenever this character uses an ability, they deal bonus damage equal to 5% of their target's Max Health if the target does not have Droid Battalion active on them, which can't be evaded. Also, whenever this character uses and ability targeting an enemy with Droid Battalion during their turn, they attack again using their Basic ability (limited once per turn).",
				},
				{		
				id: 'd1t', 
				name: 'Galactic Republic Fleet', 
				type: 'squad_deploy',
				instruction: 'null',
				position: 'left',
				stars: ["42,475,000",
					"84,950,000",
					"141,580,000",
					],
				},
				{		
				id: 'd1m', 
				name: "Count Dooku's Hangar", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["110,240,000",
					"166,640,000",
					"256,370,000",
					],
				},
				{		
				id: 'd1b', 
				name: "Rear Flank", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["86,275,000",
					"120,425,000",
					"179,740,000",
					],
				},
				{		
				id: 'd2t', 
				name: "Contested Air Space (Republic)", 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["71,075,000",
					"133,535,000",
					"215,380,000",
					],
				},
				{		
				id: 'd2m', 
				name: "Battleground", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["96,220,000",
					"174,235,000",
					"260,055,000",
					],
				},
				{		
				id: 'd2b', 
				name: "Sand Dunes", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["121,030,000",
					"217,235,000",
					"310,335,000",
					],
				},  
				{
				id: 'd3t', 
				name: "Contested Air Space (Separatist)", 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["91,395,000",
					"152,325,000",
					"217,610,000",
					],
				}, 
				{
				id: 'd3m', 
				name: "Separatist Command", 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["132,310,000",
					"257,065,000",
					"378,035,000",
					],
				},  
				{	
				id: 'd3b', 
				name: "Petranaki Arena", 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["110,615,000",
					"165,925,000",
					"221,230,000",
					],
				}, 
				{	
				id: 'd4t', 
				name: "Separatist Armada", 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["122,490,000",
					"340,255,000",
					"453,670,000",
					],
				}, 
				{	
				id: 'd4m', 
				name: "Factory Waste", 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["152,945,000",
					"270,930,000",
					"436,980,000",
					],
				},  
				{	
				id: 'd4b', 
				name: "Canyons", 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["117,510,000",
					"268,600,000",
					"335,750,000",
					],
				}, 
				{
				id: 'p1t',
				name: 'Formations',
				type: 'formations_ls',
				instruction: 'null',
				position: 'left',
				territoryBonus: ['formations_ls'],
				platoons: 'geo_ls_1t',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p1m', 
				name: 'Republic Resolve', 
				type: 'republic_resolve_ls', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['republic_resolve_ls'],
				platoons: 'geo_ls_1m',
				platoonSquadron_1: [6,7,8],
				platoonSquadron_2: [9,10,11],
				},
				{
				id: 'p1b', 
				name: 'AT-TE', 
				type: 'at_te_ls', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['at_te_ls'],
				platoons: 'geo_ls_1b',
				platoonSquadron_1: [12,13,14],
				platoonSquadron_2: [15,16,17],
				},
				{
				id: 'p2t',
				name: 'Core Ship',
				type: 'core_ship_ls',
				instruction: 'null',
				position: 'left',
				territoryBonus: ['core_ship_ls'],
				platoons: 'geo_ls_2t',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p2m', 
				name: 'Hailfire Tank', 
				type: 'hailfire_tank_ls', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['hailfire_tank_ls'],
				platoons: 'geo_ls_2m',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				}, 
				{
				id: 'p2b', 
				name: 'AT-TE', 
				type: 'at_te_ls', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['at_te_ls'],
				platoons: 'geo_ls_2b',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p3t',
				name: 'LAAT',
				type: 'laat_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['laat_ls'],
				platoons: 'geo_ls_3t',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p3m',
				name: 'Metal Mayhem',
				type: 'metal_mayhem_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['metal_mayhem_ls'],
				platoons: 'geo_ls_3m',
				platoonSquadron_1: [6,7,8],
				platoonSquadron_2: [9,10,11],
				},
				{
				id: 'p3b',
				name: 'Republic Resolve',
				type: 'republic_resolve_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['republic_resolve_ls'],
				platoons: 'geo_ls_3b',
				platoonSquadron_1: [12,13,14],
				platoonSquadron_2: [15,16,17],
				},
				{
				id: 'p4t',
				name: 'Droid Factory',
				type: 'droid_factory_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['droid_factory_ls'],
				platoons: 'geo_ls_4t',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p4m',
				name: 'Hailfire Tank',
				type: 'hailfire_tank_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['hailfire_tank_ls'],
				platoons: 'geo_ls_4m',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				{
				id: 'p4b',
				name: 'AT-TE',
				type: 'at_te_ls',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['at_te_ls'],
				platoons: 'geo_ls_4b',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				},
				
				{
				id: 'c1t1',//1n
				name: 'lsc1t1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'Negociator Alt',
				    'Milf Red Squadrom'
				    ],
				position: 'left',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				{
				id: 'c1m1',//1c Jedi
				name: 'lsc1m1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Padmé C3',
				    'Rey Heros'
				    ],
				position: 'left',
				requirements: [
					"Light Side",
					],
				rewards: [
					'Wave 1: 403,000',
					'Wave 2: 573,500',
					'Wave 3: 840,000',
					'Wave 4: 1,155,000'
					],
				},
				{
				id: 'c1m2',//1c
				name: 'lsc1m2',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'JKRevan',
				    'Republic Revan'
				    ],
				position: 'left',
				requirements: [
					"Jedi",
					],
				rewards: [
					'Wave 1: 403,000',
					'Wave 2: 573,500',
					'Wave 3: 840,000',
					'Wave 4: 1,155,000'
					],
				}, 
				{
				id: 's1m',
				name: 'lss1m',
				type: 'special',
				instruction: 'red',
				preferredSquads: [
				    'Slow Padmé',
				    'Padmé Barris',
				    'Padmé C3',
				    ],
				position: 'left',
				requirementsImage: [ //0
					'padme_amidala',
					],
				requirements: [
					"7* 16.500PG",//5
					'Galatic Republic',//2
					],
				rewards: ['x15 GET2',],
				rewardsImage: ['get2',],
				},
				{
				id: 'c1b1',//2c
				name: 'lsc1b1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Padmé C3',
                    'Rey Heros'
				    ],
				position: 'left',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 403,000',
					'Wave 2: 573,500',
					'Wave 3: 840,000',
					'Wave 4: 1,155,000'
					],
				},
				{
				id: 'c1b2',//2c Jedi
				name: 'lsc1b2',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'JKRevan',
				    'Republic Revan'
				    ],
				position: 'left',
				requirements: [
					'Jedi',
					],
				rewards: [
					'Wave 1: 523,900',
					'Wave 2: 745,550',
					'Wave 3: 1,092,000',
					'Wave 4: 1,501,500'
					],
				},
				{
				id: 'c2t1',
				name: 'lsc2t1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'Negociator Alt',
				    'Milf Red Squadrom'],
				position: 'left',
				requirements: [
					"Light Side", //0
					],
				rewards: [
					'Wave 1: 900,000',
					],
				},
				{
				id: 's2t',
				name: 'lss2t',
				type: 'special',
				instruction: 'red',
				preferredSquads: ['Negociator Alt'],
				position: 'left',
				requirements: [
					'Light Side',
					],
				rewards: ['x21 GET2',],
				rewardsImage: ['get2',],
				},
				{
				id: 'c2m1',
				name: 'lsc2m1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Padmé C3',
                    'Rey Heros'
				    ],
				position: 'left',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 434,000',
					'Wave 2: 704,000',
					'Wave 3: 1,014,750',
					'Wave 4: 1,377,000'
					],
				},
				{
				id: 'c2m2',
				name: 'lsc2m2',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'Shaaki Ti Family',
				    'Padmé C3'
				    ],
				position: 'left',
				requirements: [
					"7* 21.000PG",
					'Galatic Republic',
					],
				rewards: [
					'Wave 1: 434,000',
					'Wave 2: 704,000',
					'Wave 3: 1,014,750',
					'Wave 4: 1,377,000'
					],
				},
				{
				id: 'c2m3',
				name: 'lsc2m3',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['GS and Padawan'],
				position: 'left',
				requirementsImage: [
					'general_skywalker',
					'ahsoka_tano',
					],
				requirements: [
					"7* 21.000PG",
					"Light Side",
					],
				rewards: [
					'Wave 1: 564,200',
					'Wave 2: 915,200',
					'Wave 3: 1,319,175',
					'Wave 4: 1,790,100'
					],
				},
				{
				id: 'c2b1',
				name: 'lsc2b1',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['GS'],
				position: 'left',
				requirements: [
					"Light Side",
					],
				rewards: [
					'Wave 1: 434,000',
					'Wave 2: 704,000',
					'Wave 3: 1,014,750',
					'Wave 4: 1,377,000'
					],
				},
				{
				id: 'c2b2',
				name: 'lsc2b2',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['GS'],
				position: 'left',
				requirements: [
					"7* 21.000PG",//6
					"Jedi",   //1
					],
				rewards: [
					'Wave 1: 434,000',
					'Wave 2: 704,000',
					'Wave 3: 1,014,750',
					'Wave 4: 1,377,000'
					],
				},
				{
				id: 's2b',
				name: 'lss2b',
				type: 'special',
				instruction: 'red',
				preferredSquads: ['GS'],
				position: 'left',
				requirementsImage: [ //0
					'general_kenobi',	//12	                             
					'cc-2224_cody',  //13
					'clone_sergeant',
					],
				requirements: [
					"7* 21.000PG",//6
					"Light Side",   //14
					],
				rewards: ['x21 GET2',],
				rewardsImage: ['get2',],
				},
                {
				id: 'c3t1',//1n
				name: 'lsc3t1',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['Negociator Full'],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				{
				id: 's3t',
				name: 'lss3t',
				type: 'special',
				instruction: 'null',
				preferredSquads: ['Negociator Full'],
				position: 'right',
				requirementsImage: [
					"anakin_jedi_starfighter",
					],
				requirements: [
					"7* Galactic Republic",
					],
				rewards: ['x32 GET2',],
				rewardsImage: ['get2',],
				},
                {
				id: 'c3m1',//1n
				name: 'lsc3m1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Padmé C3'
				    ],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c3m2',//1n
				name: 'lsc3m2',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Padmé C3'
				    ],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c3m3',//1n
				name: 'lsc3m3',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['GS'],
				position: 'right',
				requirements: [
					'7* 22,000PG',
					'Jedi',
					'Galactic Republic'
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c3b1',//1n
				name: 'lsc3b1',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['JKRevan'],
				position: 'right',
				requirements: [
					'7* 22,000PG',
					'Jedi',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				{
				id: 's3b', 
				name: 'lss3b', 
				type: 'ki_adi_mundi', 
				instruction: 'null',
				preferredSquads: ['GS'],
				requirementsImage: [
					'shaak_ti',
					"arc_trooper",
					],
				position: 'right', 
				requirements: [
				    "7* 22,000PG",
					"Clone Troopers",
					],
				rewards: ['x1 Ki Adi Mundi',],
				rewardsImage: ['shard_ki_adi_mundi',],
				},
                {
				id: 'c4t1',//1n
				name: 'lsc4t1',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['Negociator Full'],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				{
				id: 's4t',
				name: 'lss4t',
				type: 'special',
				instruction: 'null',
				preferredSquads: ['Negociator Full'],
				requirementsImage: [
					'negociator',
					"anakin_jedi_starfighter",
					],
				position: 'right',
				requirements: [
					"7* Galactic Republic",   //14
					],
				rewards: ['x20 Get2',],
				rewardsImage: ['get2',],
				},
                {
				id: 'c4m1',//1n
				name: 'lsc4m1',
				type: 'req',
				instruction: 'null',
				preferredSquads: [
				    'CLS',
				    'RTJ'
				    ],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c4m2',//1n
				name: 'lsc4m2',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['JKRevan'],
				position: 'right',
				requirements: [
					'7* 23,000PG',
					'Jedi',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				{
				id: 's4m',
				name: 'lss4m',
				type: 'special',
				instruction: 'null',
				preferredSquads: ['GS'],
				requirementsImage: [
					'shaak_ti',
					"ki_adi_mundi",
					],
				position: 'right',
				requirements: [
					"7* 23,000PG",   //14
					],
				rewards: ['x25 Get2',],
				rewardsImage: ['get2',],
				},
                {
				id: 'c4b1',//1n
				name: 'lsc4b1',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['Padmé C3'],
				requirementsImage: [
					'padme_amidala',
					"jedi_knight_anakin",
					'general_kenobi'
					],
				position: 'right',
				requirements: [
					'7* 23,000PG',
					'Galactic Republic',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c4b2',//1n
				name: 'lsc4b2',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['Rey Heros'],
				position: 'right',
				requirements: [
					'Light Side',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
                {
				id: 'c4b3',//1n
				name: 'lsc4b3',
				type: 'req',
				instruction: 'null',
				preferredSquads: ['GS'],
				requirementsImage: [
					'general_skywalker',
					],
				position: 'right',
				requirements: [
					'7* 23,000PG',
					'501st',
					],
				rewards: [
					'Wave 1: 1,249,998'
					],
				},
				
			],
			}
	},
	template: '#mission',
});

letapp = new Vue(
	{
	el: '#app',
	data: {
		isVisible: false},
	}
);

function svgMap() {
    window.history.forward(1);
	var svgMap_Top_1 = "m 604.64054,168.37596 15.53425,-10.75447 2.38988,-10.75448 268.8619,2.38988 3.58483, 22.7039 -99.18017,69.30662 1.19494,59.74709 -59.74709,2.38988 -7.16965,-20.31401 -96.79028, -44.21284 -2.38989,-33.45837 z";
	var svgMap_Mid_1 = "m 895.0114,171.96079 -99.18017,69.30662 1.19494,59.74709 -59.74709,2.38988 7.16965, 143.39302 21.50896,16.72918 26.28871,-28.6786 h 77.67122 l 64.52686,-129.05371 37.04319,-14.3393 17.92413, -53.77238 -32.26343,-68.11169 -34.65331,4.77977 z";
	var svgMap_Bot_1 = "m 971.48767,291.45497 27.48366,23.89883 3.58487,194.77551 -17.92417,13.14436 3.58483, 10.75448 -47.79767,48.99261 -164.90197,-7.16965 -9.55953,-112.32453 26.28871, -28.6786 h 77.67122 l 64.52686,-129.05371 z";
	var svgMap_Top_2 = "m 534.13898,329.6931 h 86.03581 l 34.65331,-28.6786 82.45098,2.38988 -7.16965, -20.31401 -96.79028, -44.21284 -2.38989,-33.45837 -26.28872,-37.0432 h -14.3393 l -19.11907,-31.06848 -33.45837, 11.94941 v 76.47628 l -50.18755,44.21284 z";
	var svgMap_Mid_2 = "m 737.27908,303.40438 -82.45098,-2.38988 -34.65331,28.6786 h -86.03581 l -1.19494, 70.50157 41.82296,50.18755 32.26343,-20.31401 h 74.08639 l 25.09378,19.11907 38.23813,-2.38988 z";
	var svgMap_Bot_2 = "m 574.767,450.38222 7.16965,124.27395 193.58057,1.19494 -9.55953,-112.32453 -21.50896, -16.72918 -38.23813,2.38988 -25.09378,-19.11907 h -74.08639 z";
	var svgMap_Top_3 = "m 274.83661,149.25689 59.74709,46.60273 v 76.47628 l 152.95255,-2.38989 50.18755, -44.21284 v -76.47628 z";
	var svgMap_Mid_3 = "m 334.5837,272.3359 152.95255,-2.38989 46.60273,59.74709 -1.19494,70.50157 -191.19069,-8.36459 -50.18755, 48.99261 -64.52686,1.19494 19.11907,-99.18017 z";
	var svgMap_Bot_3 = "m 227.03894,442.01763 64.52686,-1.19494 50.18755,-48.99261 191.19069,8.36459 41.82296,50.18755 7.16965, 124.27395 -381.18643,1.19494 z";
	var svgMap_Top_4 = "M 70,210 L 150,210 270,320 335,270 335, 200 270,150 260,130 240,130 180,100 110,120z";
	var svgMap_Mid_4 = "M 70,210 L 150,210 270,320 250,340 230,410 140,360 55,360 70,295 85,260 z";
	var svgMap_Bot_4 = "M 55,360 L 140,360 230,410 200,575 45,575 0,535 z";
  	document.getElementById("top_1").setAttribute("d", svgMap_Top_1);
  	document.getElementById("mid_1").setAttribute("d", svgMap_Mid_1);
  	document.getElementById("bot_1").setAttribute("d", svgMap_Bot_1);
  	document.getElementById("top_2").setAttribute("d", svgMap_Top_2);
  	document.getElementById("mid_2").setAttribute("d", svgMap_Mid_2);
  	document.getElementById("bot_2").setAttribute("d", svgMap_Bot_2);
  	document.getElementById("top_3").setAttribute("d", svgMap_Top_3);
  	document.getElementById("mid_3").setAttribute("d", svgMap_Mid_3);
  	document.getElementById("bot_3").setAttribute("d", svgMap_Bot_3);
  	document.getElementById("top_4").setAttribute("d", svgMap_Top_4);
  	document.getElementById("mid_4").setAttribute("d", svgMap_Mid_4);
  	document.getElementById("bot_4").setAttribute("d", svgMap_Bot_4);
}

function selectPhase() {
	var battle = document.getElementById("battle");
	var mediaDir = "media/page/";
	var phase = document.getElementById("phase");
	var battlePhase = mediaDir.concat(battle.value,"_",phase.value,".png");
  	document.getElementById("phase_img").setAttribute("src", battlePhase);
  	var phase_0 = ['null','null','null',
  	                'null','null','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_1 = ['alert','alert','alert',
  	                'null','null','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_2 = ['3_star','3_star','red',
  	                'null','null','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_3 = ['3_star','3_star','alert',
  	                'alert','alert','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_4 = ['3_star','3_star','3_star',
  	                '2_star','2_star','null',
  	                'null','null','null',
  	                'null','null','null',];
	var mediaDirSvg = "media/svg/mission_";
    var attack_phase;

  	var mapPhase_0 = ['','','',
  	                '','','',
  	                '','','',
  	                '','','',];
  	var mapPhase_1 = ['','','',
  	                'black','black','black',
  	                'black','black','black',
  	                'black','black','black',];
  	var mapPhase_2 = ['','','red',
  	                'black','black','black',
  	                'black','black','black',
  	                'black','black','black',];
  	var mapPhase_3 = ['','','',
  	                '','','black',
  	                'black','black','black',
  	                'black','black','black',];
  	var mapPhase_4 = ['','','',
  	                '','','red',
  	                'black','black','black',
  	                'black','black','black',];
	var classTarget = "part_";
    var mapPhase;

	if (phase.value === 'p1'){
	    attack_phase = phase_1;
	    mapPhase = mapPhase_1;
	}
	else if (phase.value === 'p2'){
        attack_phase = phase_2;
	    mapPhase = mapPhase_2;
    }
	else if (phase.value === 'p3'){
        attack_phase = phase_3;
	    mapPhase = mapPhase_3;
    }
	else if (phase.value === 'p4'){
        attack_phase = phase_4;
	    mapPhase = mapPhase_4;
    }

  	var instruct = [mediaDirSvg.concat(attack_phase[0],".svg"),
  	                mediaDirSvg.concat(attack_phase[1],".svg"),
  	                mediaDirSvg.concat(attack_phase[2],".svg"),
  	                mediaDirSvg.concat(attack_phase[3],".svg"),
  	                mediaDirSvg.concat(attack_phase[4],".svg"),
  	                mediaDirSvg.concat(attack_phase[5],".svg"),
  	                mediaDirSvg.concat(attack_phase[6],".svg"),
  	                mediaDirSvg.concat(attack_phase[7],".svg"),
  	                mediaDirSvg.concat(attack_phase[8],".svg"),
  	                mediaDirSvg.concat(attack_phase[9],".svg"),
  	                mediaDirSvg.concat(attack_phase[10],".svg"),
  	                mediaDirSvg.concat(attack_phase[11],".svg"),];

  	var mapFill = [classTarget.concat(mapPhase[0]),
  	               classTarget.concat(mapPhase[1]),
  	               classTarget.concat(mapPhase[2]),
  	               classTarget.concat(mapPhase[3]),
  	               classTarget.concat(mapPhase[4]),
  	               classTarget.concat(mapPhase[5]),
  	               classTarget.concat(mapPhase[6]),
  	               classTarget.concat(mapPhase[7]),
  	               classTarget.concat(mapPhase[8]),
  	               classTarget.concat(mapPhase[9]),
  	               classTarget.concat(mapPhase[10]),
  	               classTarget.concat(mapPhase[11]),];

  	document.getElementById("d1t").setAttribute("src", instruct[0]);
  	document.getElementById("d1m").setAttribute("src", instruct[1]);
  	document.getElementById("d1b").setAttribute("src", instruct[2]);
  	document.getElementById("d2t").setAttribute("src", instruct[3]);
  	document.getElementById("d2m").setAttribute("src", instruct[4]);
  	document.getElementById("d2b").setAttribute("src", instruct[5]);
  	document.getElementById("d3t").setAttribute("src", instruct[6]);
  	document.getElementById("d3m").setAttribute("src", instruct[7]);
  	document.getElementById("d3b").setAttribute("src", instruct[8]);
  	document.getElementById("d4t").setAttribute("src", instruct[9]);
  	document.getElementById("d4m").setAttribute("src", instruct[10]);
  	document.getElementById("d4b").setAttribute("src", instruct[11]);

  	document.getElementById("top_1").setAttribute("class", mapFill[0]);
  	document.getElementById("mid_1").setAttribute("class", mapFill[1]);
  	document.getElementById("bot_1").setAttribute("class", mapFill[2]);
  	document.getElementById("top_2").setAttribute("class", mapFill[3]);
  	document.getElementById("mid_2").setAttribute("class", mapFill[4]);
  	document.getElementById("bot_2").setAttribute("class", mapFill[5]);
  	document.getElementById("top_3").setAttribute("class", mapFill[6]);
  	document.getElementById("mid_3").setAttribute("class", mapFill[7]);
  	document.getElementById("bot_3").setAttribute("class", mapFill[8]);
  	document.getElementById("top_4").setAttribute("class", mapFill[9]);
  	document.getElementById("mid_4").setAttribute("class", mapFill[10]);
  	document.getElementById("bot_4").setAttribute("class", mapFill[11]);
}