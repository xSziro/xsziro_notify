config = {}
config.backcolorgetter = function ()
    return exports['xsziro_hud']:getColor()[1] -- if you are using my HUD
end
config.iconcolorgetter = function ()
    return exports['xsziro_hud']:getColor()[2] -- if you are using my HUD
end
--TriggerClientEvent("xsziro_notify:shownotification",[playerID],[title],[text],[icon],[time in ms])
