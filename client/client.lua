ESX = exports.es_extended:getSharedObject()
RegisterNetEvent("xsziro_notify:shownotification")
AddEventHandler("xsziro_notify:shownotification", function (title,message,icon,time)
    showNotification(title,message,icon,time)
end)

function showNotification(title,message,icon,time)
    SendNUIMessage({
        type = "showNotification",
        color = config.backcolorgetter(),
        iconcolor = config.iconcolorgetter(),
        icon = icon,
        text = message,
        time = time,
        title = title
    })
end




