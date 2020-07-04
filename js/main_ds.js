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
			'Droids Tambor': {
			leader: 'general_grievous',
			toons: ['b1_battle_droid', 'b2_super_battle_droid', 'droideka', 'wat_tambor'],
			},
			'Separatists Tambor': {
			leader: 'nute_gunray',
			toons: ['count_dooku', 'b1_battle_droid', 'droideka', 'wat_tambor'],
			},
			'Separatist Dooku': {
			leader: 'count_dooku',
			toons: ['nute_gunray', 'geonosian_spy', 'asajj_ventress', 'ig-100_magnaguard'],
			},
			'Sith Empire': {
			leader: 'darth_revan',
			toons: ['bastila_shan_(fallen)', 'hk-47', 'sith_marauder', 'darth_malak'],
			},
			'First Order': {
			leader: 'kylo_ren_(unmasked)',
			toons: ['first_order_stormtrooper', 'first_order_executioner', 'fo_sith_trooper', 'general_hux'],
			},
			'Bossk Hunters': {
			leader: 'bossk',
			toons: ['jango_fett', 'boba_fett', 'dengar', 'cad_bane']
			},
			'Empire': {
			leader: 'emperor_palpatine',
			toons: ['darth_vader', 'grand_admiral_thrawn', 'grand_moff_tarkin', 'tie_fighter_pilot']
			},
			'Night Sisters': {
			leader: 'mother_talzin',
			toons: ['asajj_ventress', 'nightsister_zombie', 'old_daka', 'nightsister_spirit']
			},
			'Sith Triumvirate': {
			leader: 'darth_traya',
			toons: ['darth_sion', 'darth_nihilus', 'sith_trooper', 'count_dooku']
			},
			'Separatist Droids': {
			leader: 'general_grievous',
			toons: ['b2_super_battle_droid', 'b1_battle_droid', 'droideka', 'ig-100_magnaguard']
			},
			'Geonosians': {
			leader: 'geonosian_brood_alfa',
			toons: ['sun_fac', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser']
			},
			'Nute P1': {
			leader: 'nute_gunray',
			toons: ['b1_battle_droid', 'b2_super_battle_droid', 'droideka', 'ig-100_magnaguard' ]
			},
			'Dooku + Ventress': {
			leader: 'count_dooku',
			toons: ['asajj_ventress']
			},
			'Night Sisters P2': {
			leader: 'mother_talzin',
			toons: ['nightsister_zombie', 'old_daka', 'nightsister_spirit', 'talia' ]
			},
			'Sith Triumvirate P2': {
			leader: 'darth_traya',
			toons: ['darth_sion', 'darth_nihilus', 'sith_trooper', 'savage_opress']
			},
			'Test squad': {
			leader: 'count_dooku',
			toons: ['general_grievous', 'b2_super_battle_droid', 'nute_gunray', 'b1_battle_droid']
			},
			'Poggle Geonosians': {
			leader: 'poggle_the_lesser',
			toons: ['sun_fac', 'geonosian_soldier', 'geonosian_spy', 'geonosian_brood_alfa']
			},
			'Chimaera Imperial': {
			capital: 'chimaera',
			toons: ['hounds_tooth', 'imperial_tie_fighter', 'tie_silencer'],
			reinforcement: ['xanadu_blood', 'tie_advanced_x1','slave_i', 'emperor_shuttle'],
			},
			'Executrix Imperial': {
			capital: 'executrix',
			toons: ['hounds_tooth', 'imperial_tie_fighter', 'tie_silencer'],
			reinforcement: ['xanadu_blood', 'tie_advanced_x1','slave_i', 'emperor_shuttle'],
			},
			'Chimaera HT Bugs': {
			capital: 'chimaera',
			toons: ['hounds_tooth', 'geonosian_spy_starfighter', 'geonosian_soldier_starfighter'],
			reinforcement: ['sun_fac_starfighter', 'gauntlet_starfighter', 'slave_i','xanadu_blood'],
			},
			'Chimaera Vulture P2': {
			capital: 'chimaera',
			toons: ['hounds_tooth', 'geonosian_spy_starfighter', 'geonosian_soldier_starfighter'],
			reinforcement: ['sun_fac_starfighter', 'gauntlet_starfighter', 'vulture_droid','xanadu_blood'],
			},
			'Chimaera Bugs': {
			capital: 'chimaera',
			toons: ['sun_fac_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier_starfighter'],
			reinforcement: ['gauntlet_starfighter', 'slave_i','xanadu_blood', 'emperor_shuttle'],
			},
			'Executrix Bugs': {
			capital: 'executrix',
			toons: ['sun_fac_starfighter', 'geonosian_spy_starfighter','geonosian_soldier_starfighter'],
			reinforcement: ['gauntlet_starfighter', 'slave_i','xanadu_blood', 'emperor_shuttle'],
			},
			'Executrix FO': {
			capital: 'executrix',
			toons: ['b-28_extinction-class_bomber', 'tie_silencer', 'kylo_ren_command_shuttle'],
			reinforcement: ['tie_advanced_x1', 'slave_i','xanadu_blood', 'emperor_shuttle'],
			},
		},
		territorys: {
			'droid_factory_ds': {
			abilities: [
				"Level 1: Summon a Geonosis B1 Battle Droid to the ally slot if it is available. Dispel all buffs on all enemies, which can't be evaded.",
				"Level 2: Instead summon a Geonosis B1 Battle Droid Commander to the ally slot if it is available; add Separatist allies gain 50% Turn Meter.",
				"Level 3: Instead summon a B2 Rocket Trooper to the ally slot if it is available; add Droid allies reset their cooldowns at the start of their turn for 2 turns.",//3
			],
			},
			'republic_resolve_ds': {
			conditions: [
				"Starts at Level 3",
			],	
			abilities: [
				"Level 3: All Galactic Republic characters have +25% Critical Avoidance and take a bonus turn whenever they defeat an enemy. Also, they gain 5% Turn Meter whenever an enemy gains any bonus Turn Meter.",
				"Level 2: -10% Critical Avoidance and Galactic Republic characters don't gain Turn Meter when an enemy gains bonus Turn Meter",
				"Level 1: -15% Critical Avoidance",
				"Disabled: (Republic Resolve destroyed)",
			],
			},
			'metal_mayhem_ds': {
			conditions: [
				"Granted to Galactic Republic characters only",
			],
			abilities: [
				"Level 1: All Droid allies have +10% Critical Chance",
				"Level 2: +10% Critical Chance; add inflictt a Damage Over Time debuff for 2 turns whenever they critically hit an enemy.",
				"Level 3: +15% Critical Chance and +35% Critical Damage; add gain 10% Turn Meter whenever they critically hit an enemy",
			],
			},
			'core_ship_ds': {
			abilities: [
				"Level 1: All allies have +15% Offense, doubled for Separatist allies.",
				"Level 2: Add all allies have +10% Speed",
				"Level 3: +5% Speed; add at the start of each Separatist ally's turn they recover 5% Health and then equalize Health with all other Separtist allies.",
			],
			},
			'hailfire_tank_ds': {
			conditions: [
				"Granted to Separatist characters only",
			],	
			abilities: [
				"Level 1: Deal Physical damage to target enemy and inflict 3 Damage Over Time Debuffs for 2 turns.",
				"Level 2: +20% ddamage; add 2 random enemies affected, and inflict Stagger for 2 turns on those enemies and target enemy",
				"Level 3: +20% damage, affect all enemies; add inflict Defense Down, Offense Down, and Tenacity Down for 2 turns"
			],
			},
			'at_te_ds': {
			conditions: [
				"Starts at Level 3",
			],	
			abilities: [
				"Level 3: Deal massive damage to target enemy and another random enemy. Deal Physical damage to all other enemies and inflict Healing Immunity for 2 turns (starts on cooldown).",
				"Level 2: Remove massive damage to a random enemy",
				"Level 1: Remove massive damage to target enemy",
				"Disabled: (AT-TE Destroyed),"
			],
			},
			'laat_ds': {
			conditions: [
				"Starts at Level 3",
			],	
			abilities: [
				"Level 3: Deal Physical damage to all enemies, dispel all buffs on them, and inflict Defense Down, Offense Down, and 2 Damage Over Timee debuffs for 2 turns.",
				"Level 2: -20% Damage and remove Defense Down and Offense Down for 2 turns",
				"Level 1: Remove 2 Damage Over Time debuffs for 2 turns",
				"Disabled: (LAAT Destroyed)"
			],
			},
		},
		squadron: [
			{	
			id: 0,
			name: 'Squadron 1',
			toons: [
			['old_daka','mother_talzin','nightsister_acolyte','nightsister_initiate','talia'],
			['bastila_shan_(fallen)','general_veers','ig-86_sentinel_droid','ig-88','darth_traya'],
			['captain_phasma','first_order_stormtrooper','first_order_tie_pilot','first_order_officer','kylo_ren'],
			]},
			{	
			id: 1,
			name: 'Squadron 2',
			toons: [
			['darth_sidious','darth_maul','savage_opress','general_veers','sith_trooper'],
			['hk-47','bossk','ig-86_sentinel_droid','wampa','range_trooper'],
			['jango_fett','range_trooper','darth_traya','bossk','mother_talzin'],
			]},
			{	
			id: 2,
			name: 'Squadron 3',
			toons: [
			['talia','mother_talzin','old_daka','nightsister_acolyte','nightsister_initiate'],
			['bastila_shan_(fallen)','jango_fett','ig-86_sentinel_droid','bossk','general_veers'],
			['gar_saxon','death_trooper','royal_guard','director_krennic','tie_fighter_pilot'],
			]},
			{	
			id: 3,
			name: 'Squadron 4',
			toons: [
			['darth_nihilus','sith_assassin','sith_trooper','darth_maul','savage_opress'],
			['hk-47','general_veers','ig-86_sentinel_droid','wampa','bossk'],
			['talia','mother_talzin','old_daka','nightsister_acolyte','nightsister_initiate'],
			]},
			{	
			id: 4,
			name: 'Squadron 5',
			toons: [
			['grand_admiral_thrawn','emperor_palpatine','royal_guard','gar_saxon','tie_fighter_pilot'],
			['darth_sidious','darth_maul','savage_opress','sith_assassin','sith_trooper'],
			['darth_sidious','darth_maul','savage_opress','general_veers','sith_trooper'],
			]},
			{	
			id: 5,
			name: 'Squadron 6',
			toons: [
			['jango_fett','general_veers','wampa','bossk','mother_talzin'],
			['captain_phasma','first_order_stormtrooper','first_order_tie_pilot','first_order_officer','kylo_ren'],
			['darth_revan','tusken_raider','tusken_shaman','asajj_ventress',"urorrur_r_r"],
			]},
			{	
			id: 6,
			name: 'Squadron 1',
			toons: [
			['gar_saxon','imperial_super_commando','bastila_shan_(fallen)','director_krennic','tie_fighter_pilot'],
			['darth_nihilus','sith_assassin','sith_trooper','bastila_shan_(fallen)','savage_opress'],
			['urorrur_r_r','tusken_shaman','mother_talzin','mob_enforcer','grand_moff_tarkin'],
			]},
			{	
			id: 7,
			name: 'Squadron 2',
			toons: [
			['darth_sidious','darth_maul','savage_opress','general_veers','sith_trooper'],
			['hk-47','jango_fett','ig-86_sentinel_droid','darth_traya','range_trooper'],
			['bossk','bastila_shan_(fallen)','ig-86_sentinel_droid','jango_fett','range_trooper'],
			]},
			{	
			id: 8,
			name: 'Squadron 3',
			toons: [
			['old_daka','general_veers','nightsister_zombie','nightsister_initiate','talia'],
			['darth_traya','jango_fett','bastila_shan_(fallen)','bossk','wampa'],
			['captain_phasma','first_order_stormtrooper','first_order_tie_pilot','first_order_officer','mother_talzin'],
			]},
			{	
			id: 9,
			name: 'Squadron 4',
			toons: [
			['talia','mother_talzin','old_daka','savage_opress','nightsister_initiate'],
			['wampa','director_krennic','ig-86_sentinel_droid','bossk','general_veers'],
			['grand_moff_tarkin','tie_fighter_pilot','royal_guard','director_krennic','bastila_shan_(fallen)'],
			]},
			{	
			id: 10,
			name: 'Squadron 5',
			toons: [
			['emperor_palpatine','general_veers','darth_nihilus','darth_maul','sith_trooper'],
			['bastila_shan_(fallen)','imperial_super_commando','mother_talzin','director_krennic','tie_fighter_pilot'],
			['hk-47','darth_revan','ig-86_sentinel_droid','wampa','gar_saxon'],
			]},
			{	
			id: 11,
			name: 'Squadron 6',
			toons: [
			['grand_admiral_thrawn','tie_fighter_pilot','royal_guard','bastila_shan_(fallen)','grand_moff_tarkin'],
			['captain_phasma','first_order_stormtrooper','first_order_tie_pilot','first_order_officer','kylo_ren'],
			['darth_sidious','darth_maul','savage_opress','general_veers','sith_trooper'],
			]},
			
			
			{	
			id: 12,
			name: 'Squadron 1',
			toons: [
			['lando_millennium_falcon','ebon_hawk','imperial_tie_fighter','slave_i','hounds_tooth'],
			['first_order_tie_fighter','imperial_tie_fighter','tie_reaper','tie_advanced_x1','tie_silencer'],
			['ahsoka_tano_jedi_starfighter','clone_sergeant_arc-170','plo_koon_jedi_starfighter','jedi_consular_starfighter','emperor_shuttle'],
			]},
			{	
			id: 13,
			name: 'Squadron 2',
			toons: [
			['scimitar','imperial_tie_fighter','emperor_shuttle','geonosian_spy_starfighter','slave_i'],
			['biggs_darklighter_x-wing','hounds_tooth','geonosian_soldier_starfighter','sun_fac_starfighter','slave_i'],
			['cassian_u-wing','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','ebon_hawk'],
			]},
			{	
			id: 14,
			name: 'Squadron 3',
			toons: [['ebon_hawk','gauntlet_starfighter','wedge_antilles_x-wing','phantom_ii','imperial_tie_fighter'],
			['ahsoka_tano_jedi_starfighter','jedi_consular_starfighter','rex_arc-170','clone_sergeant_arc-170','plo_koon_jedi_starfighter'],
			['clone_sergeant_arc-170','rex_arc-170','poe_dameron_x-wing','biggs_darklighter_x-wing','wedge_antilles_x-wing'],
			]},
			{	
			id: 15,
			name: 'Squadron 4',
			toons: [['cassian_u-wing','ebon_hawk','geonosian_spy_starfighter','poe_dameron_x-wing','scimitar'],
			['wedge_antilles_x-wing','poe_dameron_x-wing','plo_koon_jedi_starfighter','hounds_tooth','tie_silencer'],
			['ahsoka_tano_jedi_starfighter','emperor_shuttle','plo_koon_jedi_starfighter','clone_sergeant_arc-170','rex_arc-170'],
			]},
			{	
			id: 16,
			name: 'Squadron 5',
			toons: [['ebon_hawk','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','ghost'],
			['hounds_tooth','ig-2000','rey_millennium_falcon','slave_i','xanadu_blood'],
			['slave_i','phantom_ii','gauntlet_starfighter','rex_arc-170','umbaran_starfighter'],
			]},
			{	
			id: 17,
			name: 'Squadron 6',
			toons: [['hounds_tooth','b-28_extinction-class_bomber','slave_i','xanadu_blood','gauntlet_starfighter'],
			['hounds_tooth','phantom_ii','kylo_ren_command_shuttle','emperor_shuttle','cassian_u-wing'],
			['clone_sergeant_arc-170','rex_arc-170','ebon_hawk','plo_koon_jedi_starfighter','umbaran_starfighter'],
			]},
			{	
			id: 18,
			name: 'Squadron 1',
			toons: [
			['general_grievous','darth_maul','cad_bane','zam_wesell','darth_revan'],
			['b1_battle_droid','stormtrooper','general_grievous','magmatrooper','imperial_probe_droid'],
			['mother_talzin','bossk','darth_maul','jango_fett','old_daka'],
			]},
			{	
			id: 19,
			name: 'Squadron 2',
			toons: [
			['cad_bane','droideka','darth_sidious','darth_revan','general_grievous'],
			['grand_moff_tarkin','shoretrooper','stormtrooper','imperial_probe_droid','droideka'],
			['nightsister_acolyte','nightsister_zombie','nightsister_spirit','bossk','old_daka'],
			]},
			{	
			id: 20,
			name: 'Squadron 3',
			toons: [
			['darth_sion','darth_nihilus','sith_assassin','sith_marauder','sith_trooper'],
			['droideka','b1_battle_droid','nute_gunray','darth_traya','general_grievous'],
			['darth_revan','jango_fett','first_order_tie_pilot','kylo_ren_(unmasked)','first_order_stormtrooper'],
			]},
			{	
			id: 21,
			name: 'Squadron 4',
			toons: [
			['cad_bane','jango_fett','mother_talzin','bossk','embo'],
			['captain_phasma','kylo_ren','first_order_stormtrooper','first_order_tie_pilot','bastila_shan_(fallen)'],
			['colonel_starck','range_trooper','stormtrooper','death_trooper','general_grievous'],
			]},
			{	
			id: 22,
			name: 'Squadron 5',
			toons: [
			['bastila_shan_(fallen)','mob_enforcer','aurra_sing','bossk','imperial_probe_droid'],
			['jango_fett','zam_wesell','bastila_shan_(fallen)','boba_fett','greedo'],
			['jango_fett','darth_revan','general_grievous','droideka','b1_battle_droid'],
			]},
			{	
			id: 23,
			name: 'Squadron 6',
			toons: [
			['bastila_shan_(fallen)','darth_nihilus','sith_marauder','mother_talzin','hk-47'],
			['first_order_executioner','first_order_officer','first_order_sf_tie_pilot','first_order_tie_pilot','darth_traya'],
			['nute_gunray','darth_revan','jango_fett','droideka','b1_battle_droid'],
			]},
			{	
			id: 24,
			name: 'Squadron 1',
			toons: [
			['general_grievous','death_trooper','stormtrooper','tie_fighter_pilot','darth_vader'],
			['mother_talzin','darth_revan','darth_traya','old_daka','nightsister_acolyte'],
			['bastila_shan_(fallen)','nightsister_spirit','bossk','mother_talzin','darth_traya'],
			]},
			{	
			id: 25,
			name: 'Squadron 2',
			toons: [
			['imperial_super_commando','darth_revan','jango_fett','greedo','bossk'],
			['tie_fighter_pilot','darth_vader','bastila_shan_(fallen)','shoretrooper','imperial_probe_droid'],
			['nightsister_initiate','nightsister_spirit','mother_talzin','general_grievous','savage_opress'],
			]},
			{	
			id: 26,
			name: 'Squadron 3',
			toons: [
			['first_order_officer','general_grievous','first_order_stormtrooper','kylo_ren_(unmasked)','mob_enforcer'],
			['first_order_stormtrooper','kylo_ren','kylo_ren_(unmasked)','darth_sidious','darth_revan'],
			['jango_fett','bossk','hk-47','bastila_shan_(fallen)','dengar'],
			]},
			{	
			id: 27,
			name: 'Squadron 4',
			toons: [
			['general_grievous','bastila_shan_(fallen)','darth_sidious','darth_traya','jango_fett'],
			['mother_talzin','darth_maul','kylo_ren_(unmasked)','general_grievous','bossk'],
			['cad_bane','ig-86_sentinel_droid','ig-100_magnaguard','darth_revan','b2_super_battle_droid'],
			]},
			{	
			id: 28,
			name: 'Squadron 5',
			toons: [
			['bastila_shan_(fallen)','canderous_ordo','mother_talzin','darth_sion','hk-47'],
			['kylo_ren_(unmasked)','first_order_stormtrooper','first_order_tie_pilot','darth_revan','mob_enforcer'],
			['darth_traya','death_trooper','shoretrooper','stormtrooper','general_grievous'],
			]},
			{	
			id: 29,
			name: 'Squadron 6',
			toons: [
			['darth_revan','gar_saxon','jango_fett','stormtrooper','range_trooper'],
			['darth_sidious','darth_traya','tusken_raider','tusken_shaman','urorrur_r_r'],
			['general_grievous','droideka','b1_battle_droid','bastila_shan_(fallen)','jango_fett'],
			]},
			
			
			{	
			id: 30,
			name: 'Squadron 1',
			toons: [
			['hounds_tooth','gauntlet_starfighter','wedge_antilles_x-wing','ebon_hawk','imperial_tie_fighter'],
			['clone_sergeant_arc-170','rex_arc-170','ebon_hawk','plo_koon_jedi_starfighter','anakin_jedi_starfighter'],
			['first_order_tie_fighter','imperial_tie_fighter','han_millennium_falcon','tie_advanced_x1','emperor_shuttle'],
			]},
			{	
			id: 31,
			name: 'Squadron 2',
			toons: [
			['cassian_u-wing','hounds_tooth','han_millennium_falcon','emperor_shuttle','scimitar'],
			['wedge_antilles_x-wing','poe_dameron_x-wing','han_millennium_falcon','hounds_tooth','emperor_shuttle'],
			['anakin_jedi_starfighter','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','hounds_tooth'],
			]},
			{	
			id: 32,
			name: 'Squadron 3',
			toons: [
			['hounds_tooth','ig-2000','ebon_hawk','xanadu_blood','gauntlet_starfighter'],
			['clone_sergeant_arc-170','rex_arc-170','poe_dameron_x-wing','biggs_darklighter_x-wing','ebon_hawk'],
			['ahsoka_tano_jedi_starfighter','jedi_consular_starfighter','han_millennium_falcon','clone_sergeant_arc-170','plo_koon_jedi_starfighter'],
			]},
			{	
			id: 33,
			name: 'Squadron 4',
			toons: [
			['lando_millennium_falcon','biggs_darklighter_x-wing','imperial_tie_fighter','emperor_shuttle','hounds_tooth'],
			['hounds_tooth','ig-2000','rey_millennium_falcon','slave_i','xanadu_blood'],
			['han_millennium_falcon','anakin_jedi_starfighter','ebon_hawk','jedi_consular_starfighter','rex_arc-170'],
			]},
			{	
			id: 34,
			name: 'Squadron 5',
			toons: [
			['han_millennium_falcon','imperial_tie_fighter','tie_advanced_x1','ebon_hawk','slave_i'],
			['biggs_darklighter_x-wing','rey_millennium_falcon','anakin_jedi_starfighter','han_millennium_falcon','emperor_shuttle'],
			['hounds_tooth','anakin_jedi_starfighter','kylo_ren_command_shuttle','gauntlet_starfighter','emperor_shuttle'],
			]},
			{	
			id: 35,
			name: 'Squadron 6',
			toons: [
			['ebon_hawk','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','hounds_tooth'],
			['sith_fighter','b-28_extinction-class_bomber','ebon_hawk','xanadu_blood','ig-2000'],
			['slave_i','anakin_jedi_starfighter','gauntlet_starfighter','ebon_hawk','umbaran_starfighter'],
			]},
			{	
			id: 36,
			name: 'Squadron 1',
			toons: [
			['captain_phasma','darth_malak','bossk','first_order_executioner','first_order_sf_tie_pilot'],
			['mother_talzin','talia','darth_revan','savage_opress','old_daka'],
			['emperor_palpatine','tie_fighter_pilot','aurra_sing','director_krennic','death_trooper'],
			]},
			{	
			id: 37,
			name: 'Squadron 2',
			toons: [
			['asajj_ventress','range_trooper','bastila_shan_(fallen)','darth_revan','darth_malak'],
			['mother_talzin','emperor_palpatine','jango_fett','grand_admiral_thrawn','imperial_probe_droid'],
			['nightsister_initiate','mother_talzin','bossk','savage_opress','old_daka'],
			]},
			{	
			id: 38,
			name: 'Squadron 3',
			toons: [
			['bossk','emperor_palpatine','grand_admiral_thrawn','range_trooper','darth_revan'],
			['mother_talzin','death_trooper','shoretrooper','stormtrooper','grand_moff_tarkin'],
			['tie_fighter_pilot','wampa','colonel_starck','shoretrooper','imperial_probe_droid'],
			]},
			{	
			id: 39,
			name: 'Squadron 4',
			toons: [
			['bastila_shan_(fallen)','canderous_ordo','hk-47','bossk','darth_revan'],
			['jango_fett','shoretrooper','grand_admiral_thrawn','wampa','royal_guard'],
			['darth_malak','old_daka','nightsister_spirit','mother_talzin','nightsister_acolyte'],
			]},
			{	
			id: 40,
			name: 'Squadron 5',
			toons: [
			['darth_traya','jango_fett','sith_marauder','sith_trooper','darth_sion'],
			['captain_phasma','first_order_officer','darth_revan','bossk','first_order_stormtrooper'],
			['general_veers','darth_malak','bossk','wampa','snowtrooper'],
			]},
			{	
			id: 41,
			name: 'Squadron 6',
			toons: [
			['bastila_shan_(fallen)','canderous_ordo','sith_marauder','sith_trooper','mother_talzin'],
			['first_order_tie_pilot','kylo_ren_(unmasked)','darth_revan','first_order_executioner','first_order_officer'],
			['embo','jango_fett','darth_malak','darth_revan','asajj_ventress'],
			]},
			{	
			id: 42,
			name: 'Squadron 1',
			toons: [
			['grand_moff_tarkin','darth_revan','emperor_palpatine','grand_admiral_thrawn','wampa'],
			['general_veers','snowtrooper','darth_revan','emperor_palpatine','grand_moff_tarkin'],
			['general_veers','kylo_ren_(unmasked)','snowtrooper','tie_fighter_pilot','imperial_super_commando'],
			]},
			{	
			id: 43,
			name: 'Squadron 2',
			toons: [
			['grand_moff_tarkin','emperor_palpatine','magmatrooper','bossk','range_trooper'],
			['captain_phasma','first_order_officer','darth_revan','first_order_stormtrooper','ig-86_sentinel_droid'],
			['bossk','jango_fett','aurra_sing','embo','dengar'],
			]},
			{	
			id: 44,
			name: 'Squadron 3',
			toons: [
			['talia','mother_talzin','asajj_ventress','old_daka','jango_fett'],
			['tusken_raider','stormtrooper','bossk','snowtrooper','magmatrooper'],
			['darth_sion','darth_traya','darth_nihilus','sith_assassin','sith_marauder'],
			]},
			{	
			id: 45,
			name: 'Squadron 4',
			toons: [
			['embo','aurra_sing','darth_revan','nute_gunray','shoretrooper'],
			['general_veers','first_order_officer','first_order_stormtrooper','first_order_tie_pilot','kylo_ren_(unmasked)'],
			['wampa','darth_malak','tusken_raider','tusken_shaman','grand_admiral_thrawn'],
			]},
			{	
			id: 46,
			name: 'Squadron 5',
			toons: [
			['darth_malak','aurra_sing','jango_fett','cad_bane','bossk'],
			['nightsister_acolyte','nightsister_zombie','bossk','grand_admiral_thrawn','range_trooper'],
			['tusken_raider','range_trooper','urorrur_r_r','tie_fighter_pilot','darth_revan'],
			]},
			{	
			id: 47,
			name: 'Squadron 6',
			toons: [
			['tusken_shaman','urorrur_r_r','bossk','tusken_raider','mob_enforcer'],
			['sith_marauder','darth_revan','urorrur_r_r','bossk','shoretrooper'],
			['grand_admiral_thrawn','ig-86_sentinel_droid','darth_malak','darth_revan','ig-88'],
			]},
			
			
			{	
			id: 48,
			name: 'Squadron 1',
			toons: [
			['emperor_shuttle','bistan_u-wing','wedge_antilles_x-wing','biggs_darklighter_x-wing','hounds_tooth'],
			['ahsoka_tano_jedi_starfighter','emperor_shuttle','plo_koon_jedi_starfighter','jedi_consular_starfighter','hounds_tooth'],
			['tie_reaper','imperial_tie_fighter','emperor_shuttle','ebon_hawk','tie_advanced_x1'],
			]},
			{	
			id: 49,
			name: 'Squadron 2',
			toons: [
			['ebon_hawk','anakin_jedi_starfighter','biggs_darklighter_x-wing','hounds_tooth','clone_sergeant_arc-170'],
			['han_millennium_falcon','anakin_jedi_starfighter','hounds_tooth','ebon_hawk','slave_i'],
			['umbaran_starfighter','emperor_shuttle','ebon_hawk','ahsoka_tano_jedi_starfighter','hounds_tooth'],
			]},
			{	
			id: 50,
			name: 'Squadron 3',
			toons: [
			['hounds_tooth','imperial_tie_fighter','tie_advanced_x1','ebon_hawk','slave_i'],
			['wedge_antilles_x-wing','hounds_tooth','han_millennium_falcon','anakin_jedi_starfighter','tie_silencer'],
			['han_millennium_falcon','rey_millennium_falcon','lando_millennium_falcon','anakin_jedi_starfighter','hounds_tooth'],
			]},
			{	
			id: 51,
			name: 'Squadron 4',
			toons: [
			['emperor_shuttle','tie_silencer','first_order_tie_fighter','hounds_tooth','tie_reaper'],
			['ahsoka_tano_jedi_starfighter','jedi_consular_starfighter','ebon_hawk','emperor_shuttle','plo_koon_jedi_starfighter'],
			['hounds_tooth','rey_millennium_falcon','han_millennium_falcon','ebon_hawk','lando_millennium_falcon'],
			]},
			{	
			id: 52,
			name: 'Squadron 5',
			toons: [
			['slave_i','anakin_jedi_starfighter','gauntlet_starfighter','hounds_tooth','umbaran_starfighter'],
			['geonosian_spy_starfighter','geonosian_soldier_starfighter','sun_fac_starfighter','hounds_tooth','ebon_hawk'],
			['b-28_extinction-class_bomber','xanadu_blood','ig-2000','sith_fighter','scimitar'],
			]},
			{	
			id: 53,
			name: 'Squadron 6',
			toons: [
			['hounds_tooth','ig-2000','slave_i','xanadu_blood','gauntlet_starfighter'],
			['emperor_shuttle','hounds_tooth','ebon_hawk','biggs_darklighter_x-wing','wedge_antilles_x-wing'],
			['emperor_shuttle','ebon_hawk','kylo_ren_command_shuttle','hounds_tooth','rey_millennium_falcon'],
			]},
			{	
			id: 54,
			name: 'Squadron 1',
			toons: [
			['captain_phasma','bossk','first_order_stormtrooper','first_order_executioner','first_order_sf_tie_pilot'],
			['darth_revan','bossk','zam_wesell','savage_opress','old_daka'],
			['first_order_sf_tie_pilot','first_order_executioner','darth_malak','first_order_tie_pilot','first_order_stormtrooper'],
			]},
			{	
			id: 55,
			name: 'Squadron 2',
			toons: [
			['emperor_palpatine','darth_malak','death_trooper','director_krennic','sith_trooper'],
			['mother_talzin','death_trooper','grand_admiral_thrawn','wampa','darth_revan'],
			['nightsister_initiate','nightsister_spirit','bossk','savage_opress','old_daka'],
			]},
			{	
			id: 56,
			name: 'Squadron 3',
			toons: [
			['jango_fett','bossk','darth_malak','darth_sidious','darth_revan'],
			['jango_fett','zam_wesell','ig-88','bossk','ig-86_sentinel_droid'],
			['darth_revan','mother_talzin','ig-86_sentinel_droid','jango_fett','nightsister_spirit'],
			]},
			{	
			id: 57,
			name: 'Squadron 4',
			toons: [
			['darth_sion','darth_traya','darth_nihilus','darth_revan','sith_marauder'],
			['dengar','darth_malak','aurra_sing','bossk','boba_fett'],
			['darth_revan','nightsister_spirit','nightsister_zombie','mother_talzin','nightsister_acolyte'],
			]},
			{	
			id: 58,
			name: 'Squadron 5',
			toons: [
			['mother_talzin','dengar','boba_fett','wampa','bossk'],
			['darth_traya','darth_malak','canderous_ordo','darth_revan','darth_sion'],
			['darth_revan','bossk','nightsister_spirit','savage_opress','urorrur_r_r'],
			]},
			{	
			id: 59,
			name: 'Squadron 6',
			toons: [
			['bastila_shan_(fallen)','canderous_ordo','darth_nihilus','sith_trooper','darth_sion'],
			['gamorrean_guard','gar_saxon','grand_admiral_thrawn','wampa','snowtrooper'],
			['darth_revan','darth_malak','jango_fett','mother_talzin','bossk'],
			]},
			{	
			id: 60,
			name: 'Squadron 1',
			toons: [
			['grand_admiral_thrawn','emperor_palpatine','mob_enforcer','death_trooper','magmatrooper'],
			['darth_revan','darth_malak','darth_sidious','kylo_ren_(unmasked)','wampa'],
			['emperor_palpatine','darth_vader','grand_admiral_thrawn','mother_talzin','death_trooper'],
			]},
			{	
			id: 61,
			name: 'Squadron 2',
			toons: [
			['grand_moff_tarkin','emperor_palpatine','tie_fighter_pilot','stormtrooper','bossk'],
			['mother_talzin','first_order_officer','first_order_sf_tie_pilot','first_order_tie_pilot','first_order_executioner'],
			['tusken_shaman','ig-86_sentinel_droid','darth_revan','bossk','darth_malak'],
			]},
			{	
			id: 62,
			name: 'Squadron 3',
			toons: [
			['imperial_super_commando','emperor_palpatine','grand_admiral_thrawn','range_trooper','darth_malak'],
			['director_krennic','death_trooper','grand_admiral_thrawn','mob_enforcer','bossk'],
			['darth_revan','greedo','death_trooper','tie_fighter_pilot','range_trooper'],
			]},
			{	
			id: 63,
			name: 'Squadron 4',
			toons: [
			['ig-88','bossk','gamorrean_guard','mob_enforcer','tusken_raider'],
			['bossk','darth_sion','wampa','hk-47','sith_assassin'],
			['kylo_ren_(unmasked)','first_order_officer','darth_revan','darth_traya','darth_malak'],
			]},
			{	
			id: 64,
			name: 'Squadron 5',
			toons: [
			['wampa','dengar','bossk','aurra_sing','darth_revan'],
			['darth_malak','urorrur_r_r','tusken_raider','wampa','gar_saxon'],
			['magmatrooper','bossk','death_trooper','tie_fighter_pilot','imperial_super_commando'],
			]},
			{	
			id: 65,
			name: 'Squadron 6',
			toons: [
			['darth_revan','jango_fett','mother_talzin','darth_malak','darth_maul'],
			['bastila_shan_(fallen)','canderous_ordo','hk-47','sith_trooper','darth_traya'],
			['darth_malak','wampa','darth_revan','jango_fett','mother_talzin'],
			]},
			
			
			],
			alertVector: [
				"Focus on Platoons, consult your Officers",
				"Focus on South Missions first",
				"Focus on Middle Missions first",
				"Don't use General Kenobi in this Mission",
				"The other Mission First (Jedi)",
				"The other Mission First (Galatic Republic)",
			],
			
			missions: [{		
				id: 'abi_1', 
				name: 'Separatist Motives', 
				type: 'separatist_motives_ds',
				instruction: 'null', 
				position: 'right',
				description: 'Whenever this character defeats an enemy, all Separatist allies gain 1 stack of Separatist Affiliation for the rest of the battle (max 10 stacks). Separatist Affiliation becomes Separatist Loyalty at max stacks.',
				},
				{		
				id: 'abi_2', 
				name: 'Separatist Affiliation', 
				type: 'separatist_affiliation_ds',
				instruction: 'null', 
				position: 'right',
				description: 'Deal 5% more damage per stack with attacks not based on Health.',
				},
				{		
				id: 'abi_3', 
				name: 'Separatist Loyalty', 
				type: 'separatist_loyalty_ds', 
				instruction: 'null',
				position: 'right',
				description: "Deal 50% more damage with attacks not based on Health, at the start of turn recover 10% Health and Protection, and when defeated all other allies with Separatist Loyalty recover 50% of their Max Health and Max Protection and they gain 100% of the defeated ally's Offense and 15% of their Max Heath until the end of their next turn.",
				},
				{		
				id: 'd1m', 
				name: 'Droid Factory', 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["65,720,000", 
					"84,340,000", 
					"109,530,000",
					],
				},
				{		
				id: 'd1b', 
				name: 'Canyons', 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["36,465,000", 
					"67,725,000", 
					"104,190,000",
					],
				},
				{		
				id: 'd2t', 
				name: 'Core Ship Yards', 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["26,605,000", 
					"66,515,000", 
					"106,425,000",
					],
				},
				{		
				id: 'd2m', 
				name: 'Separatist Command', 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["61,025,000", 
					"95,355,000", 
					"190,710,000",
					],
				}, 
				{		
				id: 'd2b', 
				name: 'Petranaki Aren', 
				type: 'deploy', 
				instruction: 'null',
				position: 'right',
				stars: ["42,740,000", 
					"88,530,000", 
					"152,635,000",
					],
				}, 
				{
				id: 'd3t', 
				name: 'Contested Air Space', 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["34,225,000", 
					"92,410,000", 
					"142,600,000",
					],
				}, 
				{
				id: 'd3m', 
				name: 'Battleground', 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["58,945,000", 
					"109,465,000", 
					"168,410,000",
					],
				},  
				{	
				id: 'd3b', 
				name: 'Sand Dunes', 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["60,315,000", 
					"94,780,000", 
					"172,325,000",
					],
				}, 
				{	
				id: 'd4t', 
				name: 'Republic Fleet', 
				type: 'squad_deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["54,000,000", 
					"118,800,000", 
					"200,000,000",
					],
				}, 
				{	
				id: 'd4m', 
				name: "Count Dooku's Hangar", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["70,460,000", 
					"192,160,000", 
					"320,265,000",
					],
				},  
				{	
				id: 'd4b', 
				name: "Republic Fleet", 
				type: 'deploy', 
				instruction: 'null',
				position: 'left',
				stars: ["67,565,000", 
					"144,775,000", 
					"241,295,000",
					],
				}, 
				{
				id: 'p1m', 
				name: 'Droid Factory', 
				type: 'droid_factory_ds', 
				instruction: 'null',
				position: 'right', 
				territoryBonus: ['droid_factory_ds'],
				platoons: 'geo_ds_1m',
				platoonSquadron_1: [0,1,2],
				platoonSquadron_2: [3,4,5],
				}, 
				{
				id: 'p1b',  
				name: 'Republic Resolve', 
				type: 'republic_resolve_ds', 
				instruction: 'null',
				position: 'right', 
				territoryBonus: ['republic_resolve_ds'],
				platoons: 'geo_ds_1b',
				platoonSquadron_1: [6,7,8],
				platoonSquadron_2: [9,10,11],
				},
				{
				id: 'p2t',
				name: 'Core Ship',
				type: 'core_ship_ds',
				instruction: 'null',
				position: 'right',
				territoryBonus: ['core_ship_ds'],
				platoons: 'geo_ds_2t',
				platoonSquadron_1: [12,13,14],
				platoonSquadron_2: [15,16,17],
				},
				{
				id: 'p2m', 
				name: 'Hailfire Tank', 
				type: 'hailfire_tank_ds', 
				instruction: 'null',
				position: 'right', 
				territoryBonus: ['hailfire_tank_ds'],
				platoons: 'geo_ds_2m',
				platoonSquadron_1: [18,19,20],
				platoonSquadron_2: [21,22,23],
				}, 
				{
				id: 'p2b', 
				name: 'Metal Mayhem',
				type: 'metal_mayhem_ds', 
				instruction: 'null',
				position: 'right', 
				territoryBonus: ['metal_mayhem_ds'],
				platoons: 'geo_ds_2b',
				platoonSquadron_1: [24,25,26],
				platoonSquadron_2: [27,28,29],
				},
				{
				id: 'p3t',
				name: 'Core Ship',
				type: 'core_ship_ds',
				instruction: 'null',
				position: 'left',
				territoryBonus: ['core_ship_ds'],
				platoons: 'geo_ds_3t',
				platoonSquadron_1: [30,31,32],
				platoonSquadron_2: [33,34,35],
				},
				{
				id: 'p3m', 
				name: 'Hailfire Tank', 
				type: 'hailfire_tank_ds', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['hailfire_tank_ds'],
				platoons: 'geo_ds_3m',
				platoonSquadron_1: [36,37,38],
				platoonSquadron_2: [39,40,41],
				}, 
				{
				id: 'p3b', 
				name: 'AT-TE', 
				type: 'at_te_ds', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['at_te_ds'],
				platoons: 'geo_ds_3b',
				platoonSquadron_1: [42,43,44],
				platoonSquadron_2: [45,46,47],
				},
				{
				id: 'p4t',
				name: 'LAAT',
				type: 'laat_ds',
				instruction: 'null',
				position: 'left',
				territoryBonus: ['laat_ds'],
				platoons: 'geo_ds_4t',
				platoonSquadron_1: [48,49,50],
				platoonSquadron_2: [51,52,53],
				},
				{
				id: 'p4m', 
				name: 'Republic Resolve', 
				type: 'republic_resolve_ds', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['republic_resolve_ds'],
				platoons: 'geo_ds_4m',
				platoonSquadron_1: [54,55,56],
				platoonSquadron_2: [57,58,59],
				}, 
				{
				id: 'p4b', 
				name: 'AT-TE', 
				type: 'at_te_ds', 
				instruction: 'null',
				position: 'left', 
				territoryBonus: ['at_te_ds'],
				platoons: 'geo_ds_4b',
				platoonSquadron_1: [60,61,62],
				platoonSquadron_2: [63,64,65],
				},
				{
				id: 's1b',
				name: 's1b',
				type: 'special',
				instruction: 'null',
				position: 'right',
				preferredSquads: ['Nute P1'],
				requirementsImage: [
					'nute_gunray', 
					'b1_battle_droid', 
					'b2_super_battle_droid', 
					'droideka'
					],
				requirements: [
					"6* 16.500PG",
					'Separatist',
					],
				rewards: ['x15 GET2',],
				rewardsImage: ['get2',],
				},
				{
				id: 's2b',
				name: 's2b',
				type: 'special',
				instruction: 'null',
				position: 'right',
				preferredSquads: ['Geonosians'],
				requirements: [
					"6* 16.500PG",//6
					"Geonosian",   //14
					],
				rewards: ['x21 GET2',],
				rewardsImage: ['get2',],
				},
				{
				id: 's3m', 
				name: 's3m', 
				type: 'wat_tambor', 
				instruction: 'null',
				position: 'left',
				preferredSquads: ['Geonosians'],
				requirementsImage: [ //0
					'geonosian_brood_alfa',
					], 
				requirements: [
					"7* 16,500",  
					"Geonosian"
					],
				rewards: ['x1 wat_tambor',],
				rewardsImage: ['shard_wat_tambor',],
				},
				{
				id: 's4b',
				name: 's4b',
				type: 'special',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Separatists Tambor',
					'Droids Tambor',
					],
				requirementsImage: [ //0
					'wat_tambor',
					], 
				requirements: [
					'7* 16.500PG',
					'Separatist',
					],
				rewards: ['x40 GET2',],
				rewardsImage: ['get2',],
				},
				{
				id: 'c1m1',//1c Jedi
				name: 'c1m1',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: ['Poggle Geonosians'],
				requirementsImage: [ 
					'poggle_the_lesser',
					'sun_fac', 
					'geonosian_soldier'
					], 
				requirements: [
					"6*",
					"Separatist",
					],
				rewards: [
					'Wave 1: 187,500',
					'Wave 2: 297,500',
					'Wave 3: 500,000',
					'Wave 4: 792,000'
					],
				},
				{
				id: 'c1m2',//1c
				name: 'c1m2',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Sith Empire',
					'First Order',
					'Empire',
					'Bossk Hunters'],
				requirements: [
					'6* Dark Side'
					],
				rewards: [
					'Wave 1: 187,500',
					'Wave 2: 297,500',
					'Wave 3: 500,000',
					'Wave 4: 792,000'
					],
				},
				{
				id: 'c1b1',
				name: 'c1b1',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'First Order',
					'Empire',
					'Night Sisters',
					'Sith Triumvirate'
					],
				requirements: [
					'6* Dark Side'
					],
				rewards: [
					'Wave 1: 187,500',
					'Wave 2: 297,500',
					'Wave 3: 500,000',
					'Wave 4: 792,000'
					],
				},
				{
				id: 'c1b2',
				name: 'c1b2',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'First Order',
					'Empire',
					'Night Sisters',
					'Sith Triumvirate'
					],
				requirements: [
					'6* Dark Side'
					],
				rewards: [
					'Wave 1: 187,500',
					'Wave 2: 297,500',
					'Wave 3: 500,000',
					'Wave 4: 792,000'
					],
				},
				{
				id: 'c2t1',
				name: 'c2t1',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Chimaera Vulture P2'
					],
				requirementsImage: [ 
					'chimaera',
					'vulture_droid'
					], 
				requirements: [
					"6* Dark Side",
					],
				rewards: [
					'Wave 1: 1,072,500',
					],
				},
				{
				id: 'c2t2',
				name: 'c2t2',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Executrix Bugs',
					'Executrix FO'
					],
				requirementsImage: [ 
					'executrix'
					], 
				requirements: [
					'6* Dark Side'
					],
				rewards: [
					'Wave 1: 825,000',
					],
				},
				{
				id: 'c2m1',
				name: 'c2m1',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'First Order',
					'Bossk Hunters',
					'Empire',
					'Sith Triumvirate P2'
					],
				requirements: [
					'6* Dark Side'
					],
				rewards: [
					'Wave 1: 270,000',
					'Wave 2: 420,000',
					'Wave 3: 708,000',
					'Wave 4: 1,080,000'
					],
				},
				{
				id: 'c2m2',
				name: 'c2m2',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Dooku + Ventress'
					],
				requirementsImage: [
					'count_dooku', 
					'asajj_ventress'
					],
				requirements: [
					"6* 16.500PG",
					],
				rewards: [
					'Wave 1: 351,000',
					'Wave 2: 546,000',
					'Wave 3: 920,400',
					'Wave 4: 1,404,000'
					],
				},
				{
				id: 'c2m3',
				name: 'c2m3',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'First Order',
					'Bossk Hunters',
					'Empire',
					'Sith Triumvirate P2'
					],
				requirements: [
					"6* Dark Side",
					],
				rewards: [
					'Wave 1: 270,000',
					'Wave 2: 420,000',
					'Wave 3: 708,000',
					'Wave 4: 1,080,000'
					],
				},
				{
				id: 'c2b1',
				name: 'c2b1',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Sith Empire',
					'Empire',
					'Separatist Droids',
					'Night Sisters P2',
					'Sith Triumvirate P2'
					],
				requirements: [
					"6* Dark Side"
					],
				rewards: [
					'Wave 1: 270,000',
					'Wave 2: 420,000',
					'Wave 3: 708,000',
					'Wave 4: 1,080,000'
					],
				},
				{
				id: 'c2b2',
				name: 'c2b2',
				type: 'usual',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'Sith Empire',
					'Empire',
					'Separatist Droids',
					'Night Sisters P2',
					'Sith Triumvirate P2'
					],
				requirements: [
					"6* Dark Side"
					],
				rewards: [
					'Wave 1: 270,000',
					'Wave 2: 420,000',
					'Wave 3: 708,000',
					'Wave 4: 1,080,000'
					],
				},
				{
				id: 'c3t1',//1c Jedi
				name: 'c3t1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Executrix Bugs',
					'Chimaera Bugs'
					],
				requirementsImage: [ 
					'sun_fac_starfighter', 
					'geonosian_spy_starfighter',
					'geonosian_soldier_starfighter'
					], 
				requirements: [
					"7* Dark Side",
					],
				rewards: [
					'Wave 1: 2,164,500'
					],
				},
				{
				id: 'c3t2',//1c
				name: 'c3t2',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Executrix Imperial',
					'Chimaera Imperial'],
				requirements: [
					'7* Dark Side',
					],
				rewards: [
					'Wave 1: 1,665,000'
					],
				},
				{
				id: 'c3m1',//1c Jedi
				name: 'c3m1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Empire',
					'Night Sisters',
					'Sith Triumvirate'],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 336,000',
					'Wave 2: 540,000',
					'Wave 3: 910,000',
					'Wave 4: 1,352,000'
					],
				},
				{
				id: 'c3m2',//1c
				name: 'c3m2',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Separatist Droids'],
				requirements: [
					'7*',
					'Droids Separatist'
					],
				rewards: [
					'Wave 1: 336,000',
					'Wave 2: 540,000',
					'Wave 3: 910,000',
					'Wave 4: 1,352,000'
					],
				},
				{
				id: 'c3b1',
				name: 'c3b1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'First Order',
					'Empire',
					'Bossk Hunters',
					'Sith Empire'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 336,000',
					'Wave 2: 540,000',
					'Wave 3: 910,000',
					'Wave 4: 1,352,000'
					],
				},
				{
				id: 'c3b2',
				name: 'c3b2',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'First Order',
					'Empire',
					'Bossk Hunters',
					'Sith Empire'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 336,000',
					'Wave 2: 540,000',
					'Wave 3: 910,000',
					'Wave 4: 1,352,000'
					],
				},
				{
				id: 'c4t1',
				name: 'c4t1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Chimaera Bugs',
					'Chimaera HT Bugs',
					'Chimaera Imperial'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 900,000',
					],
				},
				{
				id: 'c4m1',
				name: 'c4m1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Separatist Dooku',
					],
				requirementsImage: [ 
					'count_dooku'
					], 
				requirements: [
					'7* 16.500PG',
					'Separatist'
					],
				rewards: [
					'Wave 1: 405,000',
					'Wave 2: 675,000',
					'Wave 3: 1,038,500',
					'Wave 4: 1,564,000'
					],
				},
				{
				id: 'c4m2',
				name: 'c4m2',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Separatist Droids',
					'Geonosians',
					'Night Sisters',
					'Empire',
					'Sith Triumvirate P2'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 405,000',
					'Wave 2: 675,000',
					'Wave 3: 1,038,500',
					'Wave 4: 1,564,000'
					],
				},
				{
				id: 'c4m3',
				name: 'c4m3',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Separatist Droids',
					'Geonosians',
					'Night Sisters',
					'Empire',
					'Sith Triumvirate P2'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 405,000',
					'Wave 2: 675,000',
					'Wave 3: 1,038,500',
					'Wave 4: 1,564,000'
					],
				},
				{
				id: 'c4b1',
				name: 'c4b1',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Sith Empire',
					'Empire',
					'Bossk Hunters',
					'First Order',
					'Sith Triumvirate P2'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 405,000',
					'Wave 2: 675,000',
					'Wave 3: 1,038,500',
					'Wave 4: 1,564,000'
					],
				},
				{
				id: 'c4b2',
				name: 'c4b2',
				type: 'usual',
				instruction: 'null',
				position: 'left',
				preferredSquads: [
					'Sith Empire',
					'Empire',
					'Bossk Hunters',
					'First Order',
					'Sith Triumvirate P2'
					],
				requirements: [
					'7* Dark Side'
					],
				rewards: [
					'Wave 1: 405,000',
					'Wave 2: 675,000',
					'Wave 3: 1,038,500',
					'Wave 4: 1,564,000'
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
	var svgMap_Top_1 = "";
	var svgMap_Mid_1 = "m 274.83661,149.25689 59.74709,46.60273 v 76.47628 l -88.42569,70.50156 -186.410921, 7.16965 25.093778,-97.98522 -15.534243,-63.33192 34.653316,-75.28133 76.47627,-15.534244 52.57744,26.288724 h 26.28872 z";
	var svgMap_Bot_1 = "M 59.747089,350.00711 C 32.575648,398.87862 13.246382,449.71068 -1.1949418, 501.76472 v 27.48366 l 44.2128458,41.82296 157.732316,4.77977 45.40779,-233.01365 z";
	var svgMap_Top_2 = "m 274.83661,149.25689 59.74709,46.60273 v 76.47628 l 152.95255,-2.38989 50.18755, -44.21284 v -76.47628 z";
	var svgMap_Mid_2 = "m 334.5837,272.3359 152.95255,-2.38989 46.60273,59.74709 -1.19494,70.50157 -191.19069,-8.36459 -50.18755, 48.99261 -64.52686,1.19494 19.11907,-99.18017 z";
	var svgMap_Bot_2 = "m 227.03894,442.01763 64.52686,-1.19494 50.18755,-48.99261 191.19069,8.36459 41.82296,50.18755 7.16965, 124.27395 -381.18643,1.19494 z";
	var svgMap_Top_3 = "m 534.13898,329.6931 h 86.03581 l 34.65331,-28.6786 82.45098,2.38988 -7.16965, -20.31401 -96.79028, -44.21284 -2.38989,-33.45837 -26.28872,-37.0432 h -14.3393 l -19.11907,-31.06848 -33.45837, 11.94941 v 76.47628 l -50.18755,44.21284 z";
	var svgMap_Mid_3 = "m 737.27908,303.40438 -82.45098,-2.38988 -34.65331,28.6786 h -86.03581 l -1.19494, 70.50157 41.82296,50.18755 32.26343,-20.31401 h 74.08639 l 25.09378,19.11907 38.23813,-2.38988 z";
	var svgMap_Bot_3 = "m 574.767,450.38222 7.16965,124.27395 193.58057,1.19494 -9.55953,-112.32453 -21.50896, -16.72918 -38.23813,2.38988 -25.09378,-19.11907 h -74.08639 z";
	var svgMap_Top_4 = "m 604.64054,168.37596 15.53425,-10.75447 2.38988,-10.75448 268.8619,2.38988 3.58483, 22.7039 -99.18017,69.30662 1.19494,59.74709 -59.74709,2.38988 -7.16965,-20.31401 -96.79028, -44.21284 -2.38989,-33.45837 z";
	var svgMap_Mid_4 = "m 895.0114,171.96079 -99.18017,69.30662 1.19494,59.74709 -59.74709,2.38988 7.16965, 143.39302 21.50896,16.72918 26.28871,-28.6786 h 77.67122 l 64.52686,-129.05371 37.04319,-14.3393 17.92413, -53.77238 -32.26343,-68.11169 -34.65331,4.77977 z";
	var svgMap_Bot_4 = "m 971.48767,291.45497 27.48366,23.89883 3.58487,194.77551 -17.92417,13.14436 3.58483, 10.75448 -47.79767,48.99261 -164.90197,-7.16965 -9.55953,-112.32453 26.28871, -28.6786 h 77.67122 l 64.52686,-129.05371 z";
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
  	var phase_0 = ['null','null',
  	                'null','null','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_1 = ['3_star','3_star',
  	                'null','null','null',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_2 = ['3_star','3_star',
  	                '3_star','3_star','3_star',
  	                'null','null','null',
  	                'null','null','null',];
  	var phase_3 = ['3_star','3_star',
  	                '3_star','3_star','3_star',
  	                '3_star','red','3_star',
  	                'null','null','null',];
  	var phase_4 = ['3_star','3_star',
  	                '3_star','3_star','3_star',
  	                '3_star','3_star','3_star',
  	                '2_star','null','1_star',];
	var mediaDirSvg = "media/svg/mission_";
    var attack_phase;

  	var mapPhase_0 = ['','',
  	                '','','',
  	                '','','',
  	                '','','',];
  	var mapPhase_1 = ['','',
  	                'black','black','black',
  	                'black','black','black',
  	                'black','black','black',];
  	var mapPhase_2 = ['','',
  	                '','','',
  	                'black','black','black',
  	                'black','black','black',];
  	var mapPhase_3 = ['','',
  	                '','','',
  	                '','red','',
  	                'black','black','black',];
  	var mapPhase_4 = ['','',
  	                '','','',
  	                '','','',
  	                '','black','',];
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
  	                ];

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
  	               ];

  	document.getElementById("d1m").setAttribute("src", instruct[0]);
  	document.getElementById("d1b").setAttribute("src", instruct[1]);
  	document.getElementById("d2t").setAttribute("src", instruct[2]);
  	document.getElementById("d2m").setAttribute("src", instruct[3]);
  	document.getElementById("d2b").setAttribute("src", instruct[4]);
  	document.getElementById("d3t").setAttribute("src", instruct[5]);
  	document.getElementById("d3m").setAttribute("src", instruct[6]);
  	document.getElementById("d3b").setAttribute("src", instruct[7]);
  	document.getElementById("d4t").setAttribute("src", instruct[8]);
  	document.getElementById("d4m").setAttribute("src", instruct[9]);
  	document.getElementById("d4b").setAttribute("src", instruct[10]);

  	document.getElementById("mid_1").setAttribute("class", mapFill[0]);
  	document.getElementById("bot_1").setAttribute("class", mapFill[1]);
  	document.getElementById("top_2").setAttribute("class", mapFill[2]);
  	document.getElementById("mid_2").setAttribute("class", mapFill[3]);
  	document.getElementById("bot_2").setAttribute("class", mapFill[4]);
  	document.getElementById("top_3").setAttribute("class", mapFill[5]);
  	document.getElementById("mid_3").setAttribute("class", mapFill[6]);
  	document.getElementById("bot_3").setAttribute("class", mapFill[7]);
  	document.getElementById("top_4").setAttribute("class", mapFill[8]);
  	document.getElementById("mid_4").setAttribute("class", mapFill[9]);
  	document.getElementById("bot_4").setAttribute("class", mapFill[10]);
}