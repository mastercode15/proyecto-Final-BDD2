function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: "+errorMessage);
      });
      

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          window.location="selector.html";
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
}
function Logout(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  }
var db=firebase.firestore();
function save103(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var a302= document.getElementById("302").value;
    var a303= document.getElementById("303").value;
    var a304= document.getElementById("304").value;
    var a307= document.getElementById("307").value;
    var a308= document.getElementById("308").value;
    var a309= document.getElementById("309").value;
    var a310= document.getElementById("310").value;
    var a311= document.getElementById("311").value;
    var a312= document.getElementById("312").value;
    var a314= document.getElementById("314").value;
    var a319= document.getElementById("319").value;
    var a320= document.getElementById("320").value;
    var a322= document.getElementById("322").value;
    var a323= document.getElementById("323").value;
    var a324= document.getElementById("324").value;
    var a325= document.getElementById("325").value;
    var a326= document.getElementById("326").value;
    var a327= document.getElementById("327").value;
    var a328= document.getElementById("328").value;
    var a329= document.getElementById("329").value;
    var a330= document.getElementById("330").value;
    var a331= document.getElementById("331").value;
    var a332= document.getElementById("332").value;
    var a333= document.getElementById("333").value;
    var a334= document.getElementById("334").value;
    var a335= document.getElementById("335").value;
    var a336= document.getElementById("336").value;
    var a337= document.getElementById("337").value;
    var a338= document.getElementById("338").value;
    var a339= document.getElementById("339").value;
    var a340= document.getElementById("340").value;
    var a341= document.getElementById("341").value;
    var a342= document.getElementById("342").value;
    var a343= document.getElementById("343").value;
    var a344= document.getElementById("344").value;
    var a345= document.getElementById("345").value;
    var a346= document.getElementById("346").value;
    var a349= document.getElementById("349").value;

    // var a352= document.getElementById("352").value;
    // var a353= document.getElementById("353").value;
    // var a354= document.getElementById("354").value;
    // var a357= document.getElementById("357").value;
    // var a358= document.getElementById("358").value;
    // var a359= document.getElementById("359").value;
    // var a360= document.getElementById("360").value;
    // var a361= document.getElementById("361").value;
    // var a362= document.getElementById("362").value;
    // var a363= document.getElementById("363").value;
    // var a364= document.getElementById("364").value;
    // var a369= document.getElementById("369").value;
    // var a370= document.getElementById("370").value;
    // var a372= document.getElementById("372").value;
    // var a373= document.getElementById("373").value;
    // var a374= document.getElementById("374").value;
    // var a375= document.getElementById("375").value;
    // var a376= document.getElementById("376").value;
    // var a377= document.getElementById("377").value;
    // var a378= document.getElementById("378").value;
    // var a379= document.getElementById("379").value;
    // var a380= document.getElementById("380").value;

    if(fecha!=""&&nombre!=""){
        db.collection("Form103").add({
            nombre_cliente: nombre,
            fecha: fecha,
            302:a302,
            303:a303,
            304:a304,
            307:a307,
            308:a308,
            309:a309,
            310:a310,
            311:a311,
            312:a312,
            314:a314,
            319:a319,
            320:a320,
            322:a322,
            323:a323,
            324:a324,
            325:a325,
            326:a326,
            327:a327,
            328:a328,
            329:a329,
            330:a330,
            331:a331,
            332:a332,
            333:a333,
            334:a334,
            335:a335,
            336:a336,
            337:a337,
            338:a338,
            339:a339,
            340:a340,
            341:a341,
            342:a342,
            343:a343,
            344:a344,
            345:a345,
            346:a346,
            349:a349,

            // 352:a352,
            // 353:a353,
            // 354:a354,
            // 357:a357,
            // 358:a358,
            // 359:a359,
            // 360:a360,
            // 361:a361,
            // 362:a362,
            // 363:a363,
            // 364:a364,
            // 369:a369,
            // 370:a370,
            // 372:a372,
            // 373:a373,
            // 374:a374,
            // 375:a375,
            // 376:a376,
            // 377:a377,
            // 378:a378,
            // 379:a379,
            // 380:a380,
        }).then(()=>{
            alert("Documento actualizado exitosamente !");
        }).catch(function(error) {
            console.error("Error writing document: ", error);
        });

    }
};

function save102(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var a481= document.getElementById("481").value;
    var a710= document.getElementById("710").value;
    var a711= document.getElementById("711").value;
    var a712= document.getElementById("712").value;
    var a713= document.getElementById("713").value;
    var a714= document.getElementById("714").value;
    var a715= document.getElementById("715").value;
    var a716= document.getElementById("716").value;
    var a717= document.getElementById("717").value;
    var a718= document.getElementById("718").value;
    var a719= document.getElementById("719").value;
    var a720= document.getElementById("720").value;
    var a730= document.getElementById("730").value;
    var a729= document.getElementById("729").value;
    var a741= document.getElementById("741").value;
    var a491= document.getElementById("491").value;
    var a721= document.getElementById("721").value;
    var a722= document.getElementById("722").value;
    var a723= document.getElementById("723").value;
    var a724= document.getElementById("724").value;
    var a725= document.getElementById("725").value;
    var a731= document.getElementById("731").value;
    var a739= document.getElementById("739").value;
    var a749= document.getElementById("749").value;
    var a751= document.getElementById("751").value;
    var a759= document.getElementById("759").value;
    var a769= document.getElementById("769").value;
    

    // var a352= document.getElementById("352").value;
    // var a353= document.getElementById("353").value;
    // var a354= document.getElementById("354").value;
    // var a357= document.getElementById("357").value;
    // var a358= document.getElementById("358").value;
    // var a359= document.getElementById("359").value;
    // var a360= document.getElementById("360").value;
    // var a361= document.getElementById("361").value;
    // var a362= document.getElementById("362").value;
    // var a363= document.getElementById("363").value;
    // var a364= document.getElementById("364").value;
    // var a369= document.getElementById("369").value;
    // var a370= document.getElementById("370").value;
    // var a372= document.getElementById("372").value;
    // var a373= document.getElementById("373").value;
    // var a374= document.getElementById("374").value;
    // var a375= document.getElementById("375").value;
    // var a376= document.getElementById("376").value;
    // var a377= document.getElementById("377").value;
    // var a378= document.getElementById("378").value;
    // var a379= document.getElementById("379").value;
    // var a380= document.getElementById("380").value;

    if(fecha!=""&&nombre!=""){
        db.collection("Form102").add({
            nombre_cliente: nombre,
            fecha: fecha,
            481:a481,
            710:a710,
            711:a711,
            712:a712,
            713:a713,
            714:a714,
            715:a715,
            716:a716,
            717:a717,
            718:a718,
            719:a719,
            720:a720,
            730:a730,
            729:a729,
            741:a741,
            491:a491,
            721:a721,
            722:a722,
            723:a723,
            724:a724,
            725:a725,
            731:a731,
            739:a739,
            749:a749,
            751:a751,
            759:a759,
            769:a769

            // 352:a352,
            // 353:a353,
            // 354:a354,
            // 357:a357,
            // 358:a358,
            // 359:a359,
            // 360:a360,
            // 361:a361,
            // 362:a362,
            // 363:a363,
            // 364:a364,
            // 369:a369,
            // 370:a370,
            // 372:a372,
            // 373:a373,
            // 374:a374,
            // 375:a375,
            // 376:a376,
            // 377:a377,
            // 378:a378,
            // 379:a379,
            // 380:a380,
        }).then(()=>{
            alert("Documento actualizado exitosamente !");
        }).catch(function(error) {
            console.error("Error writing document: ", error);
        });

    }
}





