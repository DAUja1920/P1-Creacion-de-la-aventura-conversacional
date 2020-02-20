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
),
    
    links: new undum.SimpleSituation(
        "<p>Safu esta dispuesto a salir esta noche, proponiendo comprar 3 botellas de Absenta,\
		para 4 o 5 personas más.Dispuestos a marcharme de casa, tenemos que preparar 2 cosas indispensables,\
		mencionadas anteriormente. Una vez cogidos, nos disponemos a ir al piso de nuestro amigo\
		Avellaneda, con el objetivo de conseguir una buena borrachera.\
		Continuando la noche, llega un momento en el que te proponen si ir a Kharma, o seguir bebiendo.\
		 </p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),

    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
