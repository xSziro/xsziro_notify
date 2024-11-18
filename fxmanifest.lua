fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'xSziro'
description ''

shared_script {
    'config.lua'
}

client_script {
    'client/client.lua',

}

ui_page 'web/ui.html'
files {
    'web/ui.html',
    'web/css.css',
    'web/js.js',
    'web/*',
}
export 'showNotification'
