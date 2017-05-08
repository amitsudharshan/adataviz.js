/**
 * Created by amitsudharshan on 5/7/17.
 */


require('./jquery.min.js')
class API {
    constructor(basePath, apiPaths) {
        this.basePath = basePath
        this.apiPaths = apiPaths
    }

    static getAPI(swagger) {
        let paths = []
        swagger.apis.forEach(function(api) {
            paths.push(new APIPath(api.path, API.getOperations(api.operations)))
        })
        return new API(swagger.basePath, paths)
    }

    static getOperations(operations) {
        let toRet = []
        let id = 0
        operations.forEach(function(op) {
            toRet.push(new APIOperation(id, op.method, op.summary, op.type, op.nickname, op))
            id = id + 1
        })
        return toRet
    }
}


class APIPath {
    constructor(apiPath, operations) {
        this.apiPath = apiPath
        this.operations = operations
    }
}

class APIOperation {
    constructor(id, method, summary, type, nickname, operation) {
        this.id = id
        this.method = method
        this.summary = summary
        this.type = type
        this.nickname = nickname
        this.operation = operation
    }

}




let a = require("../swagtest/test.json")
console.log(API.getAPI(a))

Handlebars = require('./handlebars.js')
console.log(Handlebars.compile)

