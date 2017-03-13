"use strict";

var $ = require("dom");
var Config = require("config");


exports.start = function() {
    var body = document.body;
    var table = $.div('table', [
        $.div('header', [$.div(["Date"]), $.div(["Aller"]), $.div(["Retour"])]),
        /*$.div([
            $.div(["16 / 12 / 2016"]),
            $.div(["Valentin"]),
            $.div(["Hortense"])
        ])*/
    ]);
    $.add( body, table );

    Config.calendar.forEach(function (day) {
        var ul, team, names;
        var row = $.div([$.div([formatDay(day)])]);
        $.add( table, row );
        // Aller.
        team = findBestTeam( Config.go, day, 'G' );
        names = getTeamMembersNamesAsArray( team );
        $.add( row, getTeamCaption( team ) );
        allocatePoints( team );
        // Retour.
        team = findBestTeam( Config.back, day, 'B' );
        names = getTeamMembersNamesAsArray( team );
        $.add( row, getTeamCaption( team ) );
        allocatePoints( team );
        // Debug.
        $.add( row, $.div('debug', [JSON.stringify(Config.scores)]) );
    });
};


/**
 * Retourner un DIV qui affiche les noms des membres d'une équipe avec
 * le nombre d'enfants transportés.
 */
function getTeamCaption( team ) {
    var k, v;
    var div = $.div();
    var first = true;
    for( k in team ) {
        v = team[k];
        if (first) first = false;
        else $.add( div, $.tag('span' , [', ']) );
        $.add(
            div,
            $.tag('span', [k]),
            $.tag('span', 'grey', [' (' + v + ')'])
        );
    }
    return div;
};


/**
 * Ajouter à chaque membre de l'équipe les points qui lui sont dus.
 */
function allocatePoints( team ) {
    var name, pts;
    for( name in team ) {
        pts = team[name];
        Config.scores[name] = (Config.scores[name] || 0) + pts;
    }
}


function formatDay( day ) {
    day = "" + day;
    return day.substr(0, 2) + " / " + day.substr(2, 2) + " / " + day.substr( 4 );
}


/**
 * Retourne un tableau avec toutes les clefs de team.
 */
function getTeamMembersNamesAsArray( team ) {
    var names = [];
    var name;
    for( name in team ) {
        names.push( name );
    }
    return names;
}


/**
 * Retourne l'équipe qui a le moins de points.
 * Le nombre de points d'une équipe  correspond au nombre de points du
 * membre qui en a le plus.
 *
 * @param {string} type - Vaut "G" pour l'aller et "B" pour le retour.
 */
function findBestTeam( teams, day, type ) {
    var bestTeam = null;
    var bestPoints = 9999999999;
    teams.forEach(function (team) {
        if (breakRestriction( getTeamMembersNamesAsArray( team ), day, type )) return;

        var pts = computePointsOfTeam( team );
        if (pts < bestPoints) {
            bestPoints = pts;
            bestTeam = team;
        }
    });
    return bestTeam;
}


/**
 * Vérifier s'il y a une restriction bafouée.
 */
function breakRestriction( names, day, type ) {
    var name, restrictions, restrictionForThisDay;

    for (var i=0; i<names.length; i++) {
        name = names[i];
        restrictions = Config.restrictions[name];
        if (typeof restrictions === 'undefined') continue;
        restrictionForThisDay = restrictions[day];
        if( typeof restrictionForThisDay === 'undefined' ) continue;
        if (type != restrictionForThisDay) return true;
    }
    return false;
}


function computePointsOfTeam( team ) {
    var pts = 9999999999999;
    var name;
    for( name in team ) {
        pts = Math.min( pts, Config.scores[name] || 0 );
    }
    return pts;
}
