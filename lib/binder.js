function binder(fb) {
    this._fb = fb;
};

binder.prototype.stitch = function (src, dst) {
    // src = { srcGad, attrName, transducer, initialize }
    // dst = { dstGad, attrName, onChange }

    src.transducer(valIn, function (trigger, valOut) {
        if (trigger)
            dst.onChange(valOut);
    });
};

fb.on('_gad:attrsChanged', function () {
    // type = 'gad', msg: { netcore: nc, gad: gad, data: delta }

    // find gad
    //  -> yes -> find attrName
    //  -> find initialize
    //  -> yes
    //  -> find src transducer, dst onChange
    //  -> yes -> invoke transducer -> 


});


module.exports = function (fb) {
    return fb;
};

// fb.on('_gad:panelChanged', ncLsns.gadPanelChanged);             // { data: delta }, setPanelInfo
// fb.on('_gad:propsChanged', ncLsns.gadPropsChanged);             // { data: delta }, setProps
// fb.on('_gad:attrsChanged', ncLsns.gadAttrsChanged);             // { data: delta }, setAttrs
// fb.on('_gad:attrsAppend', ncLsns.gadAttrsAppend);               // { data: attrs }, _dangerouslySetAttrs