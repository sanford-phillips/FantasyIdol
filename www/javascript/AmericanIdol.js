/**
 * User: SWP
 * Date: 2/28/12
 * Time: 10:39 PM
 */

var contestants = [
    "Aaron Marcellus",
    "Adam Brock",
    "Baylie Brown",
    "Brielle Von Hugel",
    "Chase Likens",
    "Chelsea Sorrell",
    "Colton Dixon",
    "Creighton Fraker",
    "DeAndre Brackensick",
    "Eben Franckewitz",
    "Elise Testone",
    "Erika Van Pelt",
    "Haley Johnsen",
    "Hallie Day",
    "Heejun Han",
    "Hollie Cavanagh",
    "Jennifer Hirsh",
    "Jeremy Rosado",
    "Jermaine Jones",
    "Jessica Sanchez",
    "Joshua Ledet",
    "Phillip Phillips",
    "Reed Grimm",
    "Shannon Magrane",
    "Skylar Laine"
    ];

$(document).ready(function () {


    var add = function (x, y) {
        $("ol").prepend(
            '<li class="ss-choice-item"><label class="ss-choice-label"><input type="checkbox" name="entry.0.group" value="'
                + y + '" class="ss-q-checkbox" id="group_0_' + (x + 1) + '">' + y + '</label></li>');
    };

    $.each(contestants, add);


    $(".ss-choice-item,.ss-choices").addClass("ui-state-default");
    $(".ss-choice-item").prepend("<span style=\"float:left\" class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span>");
    $(".ss-choice-item").each(function () {
        var name = $(this).text().toLowerCase();
        name = name.replace(/ /g, "_").toLowerCase();
        var img = "<img src=\"http://media.americanidol.com/contestants/season_11/5a9dkg8g6e/top_24/" +
            name + ".jpg\" alt='icon' height='27px' width='35px'></img>";
        //alert(img);
        $(this).prepend(img);
    });
    $(".ss-choices").sortable();
    $(".ss-choices").disableSelection();
    $("input[type='checkbox']").attr('checked', true).hide();
//.hide().attr("disabled", "disabled")
    $("#entry_1").focus();

});