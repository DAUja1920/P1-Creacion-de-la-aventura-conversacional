// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienzo</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        Era un tarde de sabado cuando tu mejor amigo Avellaneda te envia un mensaje de WhatsApp \
		al movil en el que exclama: Salimos esta noche?. A lo que tu no puedes negarte contestando:\
		Genial, aunque me tendras que dejar dinero, porque mi monedero esta mas vacio que el amor de ella\
		. Hablando de la propuesta de esta noche, deciden si decirselo a: \
		<p class='transient'><a href='safu'>Safu</a> que esta mal de la \
		cabeza o si mejor decirselo a <a href='david'> David</a>, que es una persona más formal\
        \
		"
    ),

    
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	"safu": new undum.SimpleSituation(
        "<p>Safu esta dispuesto a salir esta noche, proponiendo comprar 3 botellas de Absenta,\
		para 4 o 5 personas mas.Dispuestos a marcharme de casa, tenemos que preparar 2 cosas indispensables,\
		mencionadas anteriormente. Una vez cogidos, nos disponemos a ir al piso de nuestro amigo\
		Avellaneda, con el objetivo de conseguir una buena borrachera.\
		Continuando la noche, llega un momento en el que te proponen si ir a <a href='kharma'> Kharma</a>, o <a href='bebiendo'> seguir bebiendo.</a>\
		 </p>",
		 {
            heading: "Ir con Safu",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"david": new undum.SimpleSituation(
        "<p>David esta dispuesto a salir esta noche, proponiendo comprar 3 litros de Alcampo, para 4 o 5 personas mas.,\
		para 4 o 5 personas mas.Dispuestos a marcharme de casa, tenemos que preparar 2 cosas indispensables,\
		mencionadas anteriormente. Una vez cogidos, nos disponemos a ir al piso de nuestro amigo\
		Avellaneda, con el objetivo de conseguir una buena borrachera.\
		Continuando la noche, llega un momento en el que te proponen si ir a <a href='kharma'> Kharma</a>, o <a href='bebiendo'> seguir bebiendo.\
		 </p>",
		 {
            heading: "Ir con David",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"bebiendo": new undum.SimpleSituation(
        "<p>Te has pasado con el alcohol, por lo que te da un coma etilico y no lo superas.\
		Lo siento, estas muerto. F. \
		 </p>",
		 {
            heading: "Seguir bebiendo",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"kharma": new undum.SimpleSituation(
        "<p>Decides ir a un antro lleno de cincuentonas bailando reggaeton. De esto que estas perreando, fijas la vista en una chica de unos 21 años, la cual te devuelve la mirada. Se te acerca poco a poco, haciendo tu lo mismo. Nervioso,\
		tienes que decidir si <a href='bailar'> bailar con ella.</a> o preguntarle sobre el <a href='clima'> tiempo meteorológico en Argentina.</a>\
		 </p>",
		 {
            heading: "Ir a Kharma",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"clima": new undum.SimpleSituation(
        "<p>La adolescente se sorprende porque sus padres son de Argentina, entablais una conversacion a ritmo de Tusa, decides darle tu numero de telefono , y os despedis con un emotivo beso en los labios. Tus amigos se sorprenden porque tienes 40 años, lo cual supone una diferencia de edad considerable que podria acabar en denuncia.FIN. \
		 </p>",
		 {
            heading: "Preguntar sobre el Clima de Argentina",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"bailar": new undum.SimpleSituation(
        "<p>La chica se agobia, por haberte arrimado demasiado, te mete un guantazo,\
		y acabas llorando en el baño porque tu vida es una basura.FIN\
		 </p>",
		 {
            heading: "Bailar con ella",
            diplayOrder: 1,
            tags: ["topic"]
        }
)   
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";






