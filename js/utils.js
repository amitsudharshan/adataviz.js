/**
 * Created by amitsudharshan on 5/7/17.
 */

require('./jquery.min.js')
Handlebars = require('./handlebars.js')


class Utils {
    static render(template, selector, json) {
        return $.get(template, function(t) {
            var template = Handlebars.compile(t)
            var rendered = template(json)
            $(selector).html(rendered);
        })
    }


    static log(a) {
        console.log(a)
    }
}

module.exports.Utils = Utils
