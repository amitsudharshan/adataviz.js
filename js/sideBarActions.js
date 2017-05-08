/**
 * Created by amitsudharshan on 5/7/17.
 */

require('./jquery.min.js')
Utils = require('./utils.js').Utils

class SidebarActions {

    static onLoad() {
        var sidebarOnLoad = $.get("js/staticJson/sidebar.json", function(jsonT) {
            var updatePromise = SidebarActions.update(JSON.parse(jsonT))
            $.when(updatePromise).then(function() {
                $("#addSource").click(function() {
                    Utils.render("templates/addsource.html", "#main", {})
                })
            })
        })

        return sidebarOnLoad
    }

    static update(json) {
        return Utils.render("templates/sidebar.html", "#sidebar", json)
    }
}

module.exports.SidebarActions = SidebarActions

