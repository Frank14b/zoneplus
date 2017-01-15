/* 
 Created on : 13 Jan. 2017, 13:25:00
 Author     : Frank Donald Fontcha
 Copyright  : ZoneStyle 2016
 */

$(document).ready(function() {
    $('.Calculs').clickToOpen({
        "vitesse": "300",
        "elementToOpen": ".zone_mathfi"
    });

    setTimeout(function() {
        $('.ch_barre').barChargement({
            "vitesse": "20000",
            "width": "100"
        });
    }, 2500);

    setTimeout(function() {
        $('.preview').fadeOut('slow');
    }, 5000);

    $('.close').closeObject();

    $('[data-element]').showTarget({
        "vitesse": "300",
        "parent": ".hide"
    });

    $('#validate').executeCalc({
        "capital": "ca",
        "interet": "is",
        "taux": "ta",
        "duree": "du",
        "periode": "periode",
        "divResultat": "resultat",
        "operationCapital": "capital",
        "operationInteret": "Interet",
        "operationDuree": "Duree",
        "operationTaux": "Taux",
        "annee": "a",
        "mois": "m",
        "jours": "j",
        "messageErreur": "Veuillez Saisir des Données Valides (supérieures à 0)"
    });

    $('#validate2').executeCalc2({
        "capital": "ca",
        "interet": "is",
        "taux": "ta",
        "duree": "du",
        "periode": "periode",
        "divResultat": "resultat",
        "operationCapital": "Capital",
        "operationInteret": "Interet",
        "operationDuree": "Duree",
        "operationTaux": "Taux",
        "annee": "a",
        "mois": "m",
        "jours": "j",
        "messageErreur": "Veuillez Saisir des Données Valides (supérieures à 0)"
    });
});

(function($)
{
    $.fn.showTarget = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "parent": ".hide"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(data.parent).fadeIn(data.vitesse);
                $('#' + $(this).data('target')).hide();
                $('#' + $(this).data('target')).prevUntil().fadeIn(data.vitesse);
                $('#' + $(this).data('target')).nextUntil().fadeIn(data.vitesse);
            });
        });
    };
})(jQuery);

(function($)
{
    $.fn.executeCalc = function(options)
    {
        var defauts =
                {
                    "capital": "ca",
                    "interet": "is",
                    "taux": "ta",
                    "duree": "du",
                    "periode": "periode",
                    "divResultat": "resultat",
                    "operationCapital": "capital",
                    "operationInteret": "Interet",
                    "operationDuree": "Duree",
                    "operationTaux": "Taux",
                    "annee": "a",
                    "mois": "m",
                    "jours": "j",
                    "messageErreur": "Veuillez Saisir des Données Valides (supérieures à 0)"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var interet = document.getElementById(data.interet).value;
                var capital = document.getElementById(data.capital).value;
                var taux = document.getElementById(data.taux).value;
                var duree = document.getElementById(data.duree).value;
                var periode = document.getElementById(data.periode).value;

                if (document.getElementById(data.operationInteret).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(taux) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (capital * duree * taux) / 100;
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else if (periode === data.mois) {
                            var is = result / 12;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else if (periode === data.jours) {
                            var is = result / 36;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationTaux).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (capital * duree);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('Le Taux  est de : ' + is + '%');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('Le Taux est de : ' + is + '%');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('Le Taux est de : ' + is + '%');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationDuree).checked) {
                    if (Number(capital) <= 0 || Number(taux) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (capital * taux);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('La Durée  est de : ' + is + 'ans');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('La Durée est de : ' + is + 'mois');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('La Durée est de : ' + is + 'jours');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationCapital).checked) {
                    if (Number(taux) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (duree * taux);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('Le Capital  est de : ' + is + 'UNI');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('Le Capital est de : ' + is + 'UNI');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('Le Capital est de : ' + is + 'UNI');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }

                } else {
                    $('#' + data.divResultat).text('Veuillez selectioner une opération');
                }
            });
        });
    };
})(jQuery);

(function($)
{
    $.fn.executeCalc2 = function(options)
    {
        var defauts =
                {
                    "capital": "ca",
                    "interet": "is",
                    "taux": "ta",
                    "duree": "du",
                    "periode": "periode",
                    "divResultat": "resultat",
                    "operationCapital": "Capital",
                    "operationInteret": "Interet",
                    "operationDuree": "Duree",
                    "operationTaux": "Taux",
                    "annee": "a",
                    "mois": "m",
                    "jours": "j",
                    "messageErreur": "Veuillez Saisir des Données Valides (supérieures à 0)"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var interet = document.getElementById(data.interet).value;
                var capital = document.getElementById(data.capital).value;
                var taux = document.getElementById(data.taux).value;
                var duree = document.getElementById(data.duree).value;

                if (document.getElementById(data.operationInteret).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(taux) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var split = duree.split(".", 2);

                        var ope1 = (1 + (taux / 100));
                        var ope2 = Math.pow(ope1, split[0]);
                        var result = capital * ope2;
                        var result2 = (capital * split[1] * taux) / 1200;
                        var is = Math.round((Number(result) + Number(result2)), 3);
                        $('#' + data.divResultat).text('Intéret : ' + is);

                        return false;
                    }
                } else if (document.getElementById(data.operationTaux).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var split = duree.split(".", 2);

                        var ope1 = (interet / capital);
                        var ope2 = Math.pow(ope1, 1 / split[0]);
                        var is = Math.round(((Number(ope2) - 1) * 100), 3);
                        $('#' + data.divResultat).text('le Taux est de : ' + is + '%');

                        return false;
                    }
                } else if (document.getElementById(data.operationDuree).checked) {
                    if (Number(capital) <= 0 || Number(taux) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {

                        var ope1 = Math.log(interet / capital);
                        var ope2 = Math.log(1 + (taux / 100));
                        var is = Math.round(ope1 / ope2);
                        $('#' + data.divResultat).text('la Durée est de : ' + is + 'ans');

                        return false;

                    }
                } else if (document.getElementById(data.operationCapital).checked) {
                    if (Number(taux) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var split = duree.split(".", 2);
                        var ope1 = (1 + (taux / 100));
                        var ope2 = Math.pow(ope1, split[0]);
                        var is = Math.round((interet / ope2), 3);
                        $('#' + data.divResultat).text('le Capital est de : ' + is + '.UNI');

                        return false;
                    }
                    ;
                } else {
                    $('#' + data.divResultat).text('Veuillez selectioner une opération');
                }
            });
        });
    };
})(jQuery);


(function($)
{
    $.fn.escompteCalc = function(options)
    {
        var defauts =
                {
                    "capital": "ca",
                    "interet": "is",
                    "taux": "ta",
                    "duree": "du",
                    "periode": "periode",
                    "divResultat": "resultat",
                    "operationCapital": "capital",
                    "operationInteret": "Interet",
                    "operationDuree": "Duree",
                    "operationTaux": "Taux",
                    "annee": "a",
                    "mois": "m",
                    "jours": "j",
                    "messageErreur": "Veuillez Saisir des Données Valides (supérieures à 0)"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var interet = document.getElementById(data.interet).value;
                var capital = document.getElementById(data.capital).value;
                var taux = document.getElementById(data.taux).value;
                var duree = document.getElementById(data.duree).value;
                var periode = document.getElementById(data.periode).value;

                if (document.getElementById(data.operationInteret).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(taux) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (capital * duree * taux) / 100;
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else if (periode === data.mois) {
                            var is = result / 12;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else if (periode === data.jours) {
                            var is = result / 36;
                            $('#' + data.divResultat).text('L\'interet simple est de : ' + is);
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationTaux).checked) {
                    if (Number(capital) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (capital * duree);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('Le Taux  est de : ' + is + '%');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('Le Taux est de : ' + is + '%');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('Le Taux est de : ' + is + '%');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationDuree).checked) {
                    if (Number(capital) <= 0 || Number(taux) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (capital * taux);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('La Durée  est de : ' + is + 'ans');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('La Durée est de : ' + is + 'mois');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('La Durée est de : ' + is + 'jours');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }
                } else if (document.getElementById(data.operationCapital).checked) {
                    if (Number(taux) <= 0 || Number(duree) <= 0 || Number(interet) <= 0) {
                        $('#' + data.divResultat).text(data.messageErreur);
                    } else {
                        var result = (interet * 100) / (duree * taux);
                        if (periode === data.annee) {
                            var is = result;
                            $('#' + data.divResultat).text('Le Capital  est de : ' + is + 'UNI');
                        } else if (periode === data.mois) {
                            var is = result * 12;
                            $('#' + data.divResultat).text('Le Capital est de : ' + is + 'UNI');
                        } else if (periode === data.jours) {
                            var is = result * 36;
                            $('#' + data.divResultat).text('Le Capital est de : ' + is + 'UNI');
                        } else {
                            $('#' + data.divResultat).text('Veuillez spécifier une période');
                        }
                        return false;
                    }

                } else {
                    $('#' + data.divResultat).text('Veuillez selectioner une opération');
                }
            });
        });
    };
})(jQuery);