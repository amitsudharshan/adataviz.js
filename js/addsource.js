/**
 *
 * Created by amitsudharshan on 5/8/17.
 */


class AddSource {

    static onLoad() {
        $("#addSourceSubmit").click(function () {
            let url = $("#addSourceURL").val()
            alert(url)
        })
    }

}

module.exports.AddSource = AddSource
