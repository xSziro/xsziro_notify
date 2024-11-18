
$(document).ready(function(){
    const container = document.getElementById('notification-container');

    window.addEventListener('message', (event) => {
        if (event.data.type == "showNotification") {
            showNotification(event.data.text,event.data.title, event.data.icon, event.data.color,event.data.iconcolor,event.data.time);
        }
    });

    function showNotification(message, title = "Notification", icon = "fa-solid fa-info", color = "#00D8FF", iconcolor = "#FFFFFF", time = 5000) {
        console.log(time);
        const notificationbox = document.createElement('div');
        notificationbox.style.animation = `slideIn 0.5s ease, fadeOut 0.5s ease ${time/1000}s forwards `
        notificationbox.className = 'notification-box';
        const notification = document.createElement('div');
        notification.className = 'notification';
    
        const bar = document.createElement('div');
        bar.className = "progress-bar";
        bar.style.animation = `progress ${time/1000}s linear forwards`
        document.documentElement.style.setProperty('--color', color);

        document.documentElement.style.setProperty('--progress-bar-animation-duration', `${time/1000}s`);
        const notiftitle = document.createElement('div');
        notiftitle.className = 'title';
        notiftitle.innerText = title;
    
        const notifmessage = document.createElement('div');
        notifmessage.className = 'message';
        notifmessage.innerText = message;
    
        const icondiv = document.createElement('div');
        icondiv.style.backgroundColor = color + "E0";
        icondiv.style.color = iconcolor;
        icondiv.className = 'icon';
        icondiv.innerHTML = `<i class="${icon}"></i>`;
    
        notification.appendChild(icondiv);
        notification.appendChild(notifmessage);
        notifmessage.appendChild(notiftitle);
        notificationbox.appendChild(notification);
        notificationbox.appendChild(bar);
    
        const container = document.getElementById('notification-container') || createNotificationContainer();
        container.appendChild(notificationbox);
    
        setTimeout(() => {
            notificationbox.remove();
        }, time+600);
    }
    
    
    

    function createNotificationContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
        return container;
    }
});