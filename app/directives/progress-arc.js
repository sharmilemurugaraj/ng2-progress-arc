System.register(['./src/progress-arc'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var progress_arc_1;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (progress_arc_1_1) {
                progress_arc_1 = progress_arc_1_1;
                exportStar_1(progress_arc_1_1);
            }],
        execute: function() {
            exports_1("default",{
                directives: [progress_arc_1.ProgressArc]
            });
        }
    }
});
//# sourceMappingURL=progress-arc.js.map