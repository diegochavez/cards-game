import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup( function(){
  if (Cards.find().count() === 0) {
      var initCards = [
      {
        "name": "Jubilo",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/42_Jubilo.jpg"
      },
      {
        "name": "Capitan",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/46_Capitan_vs_Capitan.jpg"
      },
      {
        "name": "She Hulk",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/29_She_Hulk.jpg"
      },
      {
        "name": "Dr. Doom",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/18_Dr._Doom.jpg"
      },
      {
        "name": "Namor",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/69_Namor.jpg"
      },
      {
        "name": "Boom Boom",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/97_Boom_Boom.jpg"
      },
      {
        "name": "El Difraz Negro",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/33_El_Difraz_Negro.jpg"
      },
      {
        "name": "Conflicto Final",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/80_Conflicto_Final.jpg"
      },
      {
        "name": "Duente Verde",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/67_Duende_Verde.jpg"
      },
      {
        "name": "Lapida",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/44_Lapida.jpg"
      },
      {
        "name": "Nuevo Hulk",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/53_El_Nuevo_Hulk.jpg"
      },
      {
        "name": "The Punisher",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/24_The_Punisher.jpg"
      },
      {
        "name": "El Home de Hielo",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/36_El_Hombre_De_Hielo.jpg"
      },
      {
        "name": "Venom",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/87_Venom.jpg"
      },
      {
        "name": "Maximum Carnage",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/68_Maximum_Carnage.jpg"
      },
      {
        "name": "Vengaza",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/72_Venganza.jpg"
      },
      {
        "name": "Hulk 2099",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/71_Hulk_2099.jpg"
      },
      {
        "name": "Creacion del Arcangel",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/39_Creacion_Del_Arcangel.jpg"
      },
      {
        "name": "Psi Lord",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/70_Psi_Lord.jpg"
      },
      {
        "name": "Sr. Sinietro",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/40_Sr._Siniestro.jpg"
      },
      {
        "name": "El Nuevo Ghost Rider",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/50_El_Nuevo_Ghost_Rider.jpg"
      },
      {
        "name": "Bishop",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/93_Bishop.jpg"
      },
      {
        "name": "Magneto Regresa",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/75_Magneto_Regresa.jpg"
      },
      {
        "name": "Nightcrawler",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/38_Nightcrawler.jpg"
      },
      {
        "name": "Elektra",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/30_Elektra.jpg"
      },
      {
        "name": "Extrano",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/84_Extrano.jpg"
      },
      {
        "name": "Xavier vs Magneto",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/76_Xavier_vs_Magneto.jpg"
      },
      {
        "name": "Verdugos de Arañas",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/60_Verdugos_De_Aranas.jpg"
      },
      {
        "name": "Hombre Araña vs Duende Verde",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/16_Hombre_Arana_vs_Duende_Verde.jpg"
      },
      {
        "name": "Quasar",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/47_Quasar.jpg"
      },
      {
        "name": "Hombre Araña 2099",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/61_Hombre_Arana_2099.jpg"
      },
      {
        "name": "Hombre Araña",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/5_Hombre_Arana.jpg"
      },
      {
        "name": "Punisher 2099",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/66_Punisher_2099.jpg"
      },
      {
        "name": "Bloodhawk",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/78_Bloodhawk.jpg"
      },
      {
        "name": "Puma",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/34_Puma_vs_Spidey.jpg"
      },
      {
        "name": "thanos",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/23_Thanos.jpg"
      },
      {
        "name": "Doom 2099",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/64_Doom_2099.jpg"
      },
      {
        "name": "Doctor Pulpo",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/9_Doctor_Pulpo.jpg"
      },
      {
        "name": "Bishop",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/58_Bishop.jpg"
      },
      {
        "name": "Fuerza X",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/54_Fuerza_X.jpg"
      },
      {
        "name": "Mujer Invisible",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/14_Mujer_Invisible.jpg"
      },
      {
        "name": "Legado",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/85_Legado.jpg"
      },
      {
        "name": "Shriek",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/89_Shriek.jpg"
      },
      {
        "name": "Hulk y los Pantheon",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/62_Hulk_y_Los_Pantheon.jpg"
      },
      {
        "name": "Domino",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/96_Domino.jpg"
      },
      {
        "name": "Rhino vs Home Araña",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/17_Rhino_vs_Hombre_Arana.jpg"
      },
      {
        "name": "Warpath",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/94_Warpath.jpg"
      },
      {
        "name": "La Gata Negra",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/28_La_Gata_Negra.jpg"
      },
      {
        "name": "Thanos",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/49_Thanos.jpg"
      },
      {
        "name": "Wolverine vs Hulk",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/25_Wolverine_vs_Hulk.jpg"
      },
      {
        "name": "Home Araña Cosmico",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/48_Hombre_Arana_Cosmico.jpg"
      },
      {
        "name": "Hulk vs La Mole",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/7_Hulk_vs_La_Mole.jpg"
      },
      {
        "name": "Johnny Blaze",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/55_Johnny_Blaze.jpg"
      },
      {
        "name": "La Bruja Escarlata",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/26_La_Bruja_Escarlata.jpg"
      },
      {
        "name": "El Increible Hulk",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/2_El_Increible_Hulk.jpg"
      },
      {
        "name": "La Llegada de Galactus",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/15_La_Llegada_De_Galactus.jpg"
      },
      {
        "name": "Factor X",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/56_Factor_X.jpg"
      },
      {
        "name": "Xavier",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/10_Xavier.jpg"
      },
      {
        "name": "Zarathos",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/79_Zarathos.jpg"
      },
      {
        "name": "Centurious",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/81_Centurious.jpg"
      },
      {
        "name": "Daredevil",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/73_Daredevil.jpg"
      },
      {
        "name": "Hobgoblin",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/31_Hobgoblin.jpg"
      },
      {
        "name": "Guerra De Armaduras",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/43_Guerra_De_Armaduras.jpg"
      },
      {
        "name": "El Juicio del Sr. Fantastico",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/32_El_Juicio_Del_Sr._Fantastico.jpg"
      },
      {
        "name": "Los Seguidores de Thor.jpg",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/82_Los_Seguidores_De_Thor.jpg"
      },
      {
        "name": "Buitre vs Hombre Araña",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/8_Buitre_vs_Hombre_Arana.jpg"
      },
      {
        "name": "Wolverine Derrotado",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/74_Wolverine_Derrotado.jpg"
      },
      {
        "name": "El Original Ghost Rider",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/22_El_Original_Ghost_Rider.jpg"
      },
      {
        "name": "El Nuevo Nova",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/51_El_Nuevo_Nova.jpg"
      },
      {
        "name": "Morbius",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/21_Morbius.jpg"
      },
      {
        "name": "Venom Vive",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/90_Venom_Vive.jpg"
      },
      {
        "name": "Titania",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/95_Titania.jpg"
      },
      {
        "name": "Azul y Dorado",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/57_Azul_y_Dorado.jpg"
      },
      {
        "name": "El Dios del Trueno",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/4_El_Dios_Del_Trueno.jpg"
      },
      {
        "name": "Los Invasores",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/27_Los_Invasores.jpg"
      },
      {
        "name": "Home de Acero",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/6_Hombre_De_Acero.jpg"
      },
      {
        "name": "Ciclope",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/91_Ciclope.jpg"
      },
      {
        "name": "Jean Grey",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/92_Jean_Grey.jpg"
      },
      {
        "name": "La Locura de Venom",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/83_La_Locura_De_Venom.jpg"
      },
      {
        "name": "Exodus",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/77_Exodus.jpg"
      },
      {
        "name": "Silver Sable Inc",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/35_Silver_Sable_Inc.jpg"
      },
      {
        "name": "La Mole",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/1_La_Mole.jpg"
      },
      {
        "name": "Venom",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/45_Venom.jpg"
      },
      {
        "name": "Warlock",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/19_Warlock.jpg"
      },
      {
        "name": "Vengadores",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/11_Vengadores.jpg"
      },
      {
        "name": "Mephisto",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/20_Mephisto.jpg"
      },
      {
        "name": "Protector Letal",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/65_Protector_Letal.jpg"
      },
      {
        "name": "Con Gran Poder",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/3_Con_Gran_Poder.jpg"
      },
      {
        "name": "Gambito",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/52_Gambito.jpg"
      },
      {
        "name": "Carnage",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/86_Carnage.jpg"
      },
      {
        "name": "Capitan America",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/13_Capitan_America.jpg"
      },
      {
        "name": "Enemigos Mortales",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/37_Enemigos_Mortales.jpg"
      },
      {
        "name": "Stryfe",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/63_Stryfe.jpg"
      },
      {
        "name": "Havok",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/99_Havok.jpg"
      },
      {
        "name": "Omega Red vs Wolverine",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/59_Omega_Red_vs_Wolverine.jpg"
      },
      {
        "name": "Escorpion vs Hombre Araña",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/12_Escorpion_vs_Hombre_Arana.jpg"
      },
      {
        "name": "Demonio Araña",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/88_Demonio_Arana.jpg"
      },
      {
        "name": "La Boda",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/41_La_Boda.jpg"
      },
      {
        "name": "Wolverine",
        "description": "Lorem Ipsum",
        "power": 100,
        "image": "images/98_Wolverine.jpg"
      }
    ];

    if(initCards){
      for (var i = 0; i < initCards.length; i++){
          Cards.insert(initCards[i]);
      }
    }

  }

});
