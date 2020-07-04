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
			toons: ['han_millennium_falcon','bistan_u-wing','hounds_tooth'],
			reinforcement: ['phantom_ii','biggs_darklighter_x-wing','cassian_u-wing','ghost'],
			},
			'Milf Red Squadrom': {
			capital: 'home_one',
			toons: ['han_millennium_falcon','hounds_tooth','biggs_darklighter_x-wing'],
			reinforcement: ['phantom_ii','cassian_u-wing','ghost','wedge_antilles_x-wing'],
			},
			'Chimaera Bugs': {
			capital: 'chimaera',
			toons: ['sun_fac_starfighter','geonosian_spy_starfighter','geonosian_soldier_starfighter'],
			reinforcement: ['slave_i','tie_advanced_x1','imperial_tie_fighter','tie_reaper'],
			},
			'Chimaera Imperial': {
			capital: 'chimaera',
			toons: ['tie_silencer','imperial_tie_fighter','hounds_tooth'],
			reinforcement: ['tie_advanced_x1','xanadu_blood','tie_reaper','slave_i'],
			},
			'Executrix Bugs': {
			capital: 'executrix',
			toons: ['sun_fac_starfighter','geonosian_spy_starfighter','geonosian_soldier_starfighter'],
			reinforcement: ['slave_i','tie_advanced_x1','imperial_tie_fighter','tie_reaper'],
			},
			'Executrix Imperial': {
			capital: 'executrix',
			toons: ['tie_silencer','imperial_tie_fighter','hounds_tooth'],
			reinforcement: ['tie_advanced_x1','xanadu_blood','tie_reaper','slave_i'],
			},
			'Raddus': {
			capital: 'raddus',
			toons: ['rey_millennium_falcon','poe_dameron_x-wing','ebon_hawk'],
			reinforcement: ['resistance_xwing','slave_i','lando_millennium_falcon','ebon_hawk'],
			},
			'Finalizer': {
			capital: 'finalizer',
			toons: ['tie_silencer','kylo_ren_command_shuttle','first_order_sf_tie_fighter'],
			reinforcement: ['sun_fac_starfighter','geonosian_spy_starfighter','geonosian_soldier_starfighter','first_order_tie_fighter'],
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
			toons: ['hero_finn', 'hero_poe', 'general_kenobi', 'barriss_offee']
			},
			'Shaaki Ti Family': {
			leader: 'shaak_ti',
			toons: ['echo', 'arc_trooper', 'ct-7567_rex', 'fives']
			},
			'FO': {
			leader: 'kylo_ren_(unmasked)',
			toons: ['first_order_stormtrooper', 'general_hux', 'first_order_officer', 'kylo_ren']
			},
			'FO Phasma': {
			leader: 'captain_phasma',
			toons: ['fo_sith_trooper', 'first_order_sf_tie_pilot', 'first_order_tie_pilot', 'first_order_executioner']
			},
			'BH': {
			leader: 'bossk',
			toons: ['jango_fett', 'boba_fett', 'dengar', 'cad_bane']
			},
			'BH Fett': {
			leader: 'jango_fett',
			toons: ['bossk', 'boba_fett', 'dengar', 'cad_bane']
			},
			'Momy NS': {
			leader: 'mother_talzin',
			toons: ['nightsister_zombie', 'nightsister_spirit', 'asajj_ventress', 'old_daka']
			},
			'Aprendiz NS': {
			leader: 'asajj_ventress',
			toons: ['nightsister_zombie', 'nightsister_spirit', 'mother_talzin', 'old_daka']
			},
			'Geonosian': {
			leader: 'geonosian_brood_alfa',
			toons: ['sun_fac', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser']
			},
			'GG Droids': {
			leader: 'general_grievous',
			toons: ['b2_super_battle_droid', 'ig-100_magnaguard', 'b1_battle_droid', 'droideka']
			},
			'Nute Droids': {
			leader: 'nute_gunray',
			toons: ['b2_super_battle_droid', 'ig-100_magnaguard', 'b1_battle_droid', 'droideka']
			},
		},
			
			missions: [
				{
				id: 't1',
				name: 't1',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'JKRevan',
				    'Hermit Revan'
				    ],
				requirements: [
				    'Revan 100k+',
					],
				},
				{
				id: 't2',
				name: 't2',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
					'GG Droids',
					'Nute Droids',
				    ],
				requirements: [
					'Droids 100k+',
					],
				},
				{
				id: 't3',
				name: 't3',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				missionAlert: [
                    "Não alocar Malevolence",
                    "Não alocar Negociator",
                    "Não alocar Milf",
                    "Não alocar Hound`s Tooth se tiver Malevolence ou Negociator ou Milf"
				    ],
				preferredSquads: [
				    'Chimaera Bugs',
				    'Chimaera Imperial',
				    'Executrix Bugs',
				    'Executrix Imperial',
				    'Finalizer',
				    'Raddus',
				    ],
				requirements: [
				    'Todos com 380k+',
					],
				},
				{
				id: 't4',
				name: 't4',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				missionAlert: [
                    "Não alocar Malevolence",
                    "Não alocar Negociator",
                    "Não alocar Hound`s Tooth se tiver Malevolence ou Negociator"
				    ],
				preferredSquads: [
				    'Milf Full',
				    ],
				requirements: [
					'Milf 380k+',
					],
				},
				{
				id: 'c3',
				name: 'c3',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'FO',
				    'FO Phasma'
				    ],
				requirements: [
				    'FO 100kPG',
				    'KRU G13',
					'Zeta no Lider',
					],
				},
				{
				id: 'c4',
				name: 'c4',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'CLS',
				    'RTJ',
				    'Rey Heros'
				    ],
				requirements: [
					'CLS 100k+ (Han + Chewe)',
					'RTJ 100k+ (BB8)',
					'R2 e C3PO'
					],
				},
				{
				id: 'b1',
				name: 'b1',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'BH',
				    ],
				requirements: [
				    'BH 90k+',
					'Zeta no Lider',
					],
				},
				{
				id: 'b2',
				name: 'b2',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'Geonosian',
				    ],
				requirements: [
				    'Geo',
					'6* 80KPG',
					'Zeta no Lider',
					],
				},
				{
				id: 'b3',
				name: 'b3',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'Geonosian',
				    'Momy NS',
				    'Aprendiz NS'
				    ],
				requirements: [
				    'Geo 90k+ Brood G13',
				    '10 NS 100k+ Ventress G13',
					'Zeta no Lider',
					],
				},
				{
				id: 'b4',
				name: 'b4',
				type: 'deploy',
				instruction: 'null',
				position: 'right',
				preferredSquads: [
				    'Padmé C3',
				    'Padmé Barris',
				    'Rey Heros'
				    ],
				requirements: [
				    'Padmé 100k+ Anakin G13',
					'Rey (Melkor)',
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
