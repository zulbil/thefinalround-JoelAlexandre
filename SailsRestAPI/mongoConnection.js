/*
 * Copyright (c) 2016 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Written with: mongodb@2.1.3
 * Documentation: http://mongodb.github.io/node-mongodb-native/
 * A Node script connecting to a MongoDB database given a MongoDB Connection URI.
*/

var mongodb = require('mongodb');

// Create seed data

var seedData = [
  {
    title:"Ballon do'or 2016",
    description:"Cristiano Ronaldo a fait part de son «grand honneur» de remporter un quatrième Ballon d'Or, ce lundi sur la chaîne L'Equipe. Le Portugais a comparé sa joie à celle ressentie en 2008, lors de son premier trophée remporté.",
    picture:"http://images.radio-canada.ca/w_635,h_357/v1/ici-info/sports/16x9/cristiano-ronaldo-ballon-or.jpg"
  },
  {
    title:"Pas de troisième mandat possible pour Kabila",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture:"http://scd.france24.com/fr/files_fr/imagecache/france24_ct_api_bigger_169/article/image/201216-kabila.jpg"
  },
  {
    title:"La Tunisie se decide de réagir contre le racisme anti-noir",
    description:"Samedi 24 décembre, trois Congolais, deux femmes et un homme, ont été agressés dans le centre-ville de Tunis. Les deux femmes ont été blessées grièvement à la gorge et le jeune étudiant, en essayant de les aider, aurait reçu un coup de couteau au bras. Tous les trois ont été transportés à l’hôpital Charles-Nicolle de Tunis a indiqué Mehdi Ben Gharbia, ministre des Relations avec les instances constitutionnelles, la société civile et les organisations des droits de l’homme. L’agresseur qui souffrirait de problèmes psychologiques a été arrêté et placé en garde à vue, relaye l’agence Tunis Afrique Presse.Car le racisme anti-Noirs est un véritable fléau en Tunisie. L’agression de samedi  s’ajoute à la longue liste d’actes racistes que subissent les étudiants d’Afrique noire. Une xénophobie au quotidien, comme le rapporte le témoignage sur Facebook d’une jeune Tunisienne racontant une scène à laquelle elle a assisté en novembre dans un bus au cours de laquelle une femme lançait à un étudiant : «Hé, le Noir, lève-toi, je veux m’asseoir.»",
    picture:"http://afrique360.com/wp-content/uploads/2015/11/tuni.jpg"
  },
  {
    title:"Moringa la plante aux multiples valeurs de la vie",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture:"http://www.curcumine-sante.net/wp-content/uploads/2016/10/moringa-oleifera-leaves-and-pods.jpg"
  },
  {
    title:"CEMAC : la dévaluation du Franc n'est pas prioritaire selon Fitch",
    description:"La dévaluation du Franc CFA en Afrique Centrale n'a été jugée envisageable qu'en dernier recours par l'agence de notation Fitch Ratings. Selon le dernier rapport de l'agence, « la pression que subie la zone économique d'Afrique Centrale (CEMAC) et par ricochet sa monnaie implique que sa dévaluation ne pourra être évitée sans qu'une réelle stratégie en réponse à la baisse des cours du pétrole ne soit mise sur place ». Conformément aux estimations de l'agence, l'arrangement monétaire avec la France, une reprise des cours de pétrole, un soutien du FMI et une réelle mobilisation des membres de la zone économique pourraient leur éviter une dévaluation.Cet « optimisme » de Fitch Ratings sur une résilience du Franc CFA face à la conjoncture est justifié par les garanties du Trésor français sur la convertibilité de la monnaie commune de la zone en euros. Un filet de secours, qui permet aux 6 pays membres de la CEMAC de recevoir des lignes de financements du moins temporairement en cas d'épuisement des réserves en devises de ces pays. Sur les 6 pays de la zone, 3 se sont vu attribué leurs notes souveraines par Fitch Ratings, à savoir le Cameroun (B/stable), le Gabon (B+/negative) et la RDC (CCC).",
    picture:"http://s2.lemde.fr/image/2015/07/08/768x0/4675135_7_5c84_coupures-de-10-000-francs-cfa-15-euros_5aa82f921ffbecea1d14b2a94d228714.jpg"
  }
];

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname

var uri = 'mongodb://heroku_009x23v5:reefa5cbdiqeokfknketohl54u@ds159208.mlab.com:59208/heroku_009x23v5';

mongodb.MongoClient.connect(uri, function(err, db) {
  
  if(err) throw err;
  
  /*
   * First we'll add a few songs. Nothing is required to create the 
   * songs collection; it is created automatically when we insert.
   */

  var news = db.collection('news');

   // Note that the insert method can take either an array or a dict.

  news.insert(seedData, function(err, result) {
    
    if(err) throw err;

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    news.update(
      { title: "Ballon do'or 2016" }, 
      { $set: { description: "Cristiano par ci, Ronaldo par là, c’est bien joli, mais le plus important, au final, dans le Ballon d’or, c’est bien le classement, qui offre, via les 173 journalistes votants, de l’Algérie au Vénézuela en passant par la Slovénie, une photographie, donc une image arrêtée, de l’année footballistique venant de s’écouler. Au premier plan, le podium, au second, le top 5, et derrière, le détail d’une hiérarchie mondiale fatalement relative. Voici, pour commencer, le classement complet de cette édition 2016." } },
      function (err, result) {
        
        if(err) throw err;

        /*
         * Finally we run a query which returns all the hits that spend 10 or
         * more weeks at number 1.
         */

        news.find(function (err, docs) {

          if(err) throw err;

          console.log(docs); 
         
          // Since this is an example, we'll clean up after ourselves.
         /* songs.drop(function (err) {
            if(err) throw err;*/
           
            // Only close the connection when your app is terminating.
            db.close(function (err) {
              if(err) throw err;
            });
        });
      }
    );
  });
}); 
