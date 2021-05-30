define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers'
        ],
        filters: [
            'filters'
        ],
        directives: [
            'directives'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
