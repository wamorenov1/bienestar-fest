(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://s10.ysocial.net:8090/js/setupchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'ysocial-chat-loader'));

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://s10.ysocial.net:8090/js/setupchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'ysocial-chat-loader')); 

window.ySocialChatInit = function () {
    YSocialChat.init({
            button: {
                html: '<img class="icono-chat" id="btn" src="./images/icon-open.png" style="max-height: 100% !important; max-width: 100% !important;" />',
                styles: {
                    'background': 'transparent !important',
                    'border': 'none',
                    'bottom': '15px',
                    'cursor': 'pointer',
                    'overflow': 'visible',
                    'padding': '0',
                    'position': 'fixed !important',
                    'right': '25px',
                    'text-align': 'center',
                    'z-index': '10000',
                    'transition': 'height 0.25s ease-out, width 0.25s ease-out',
                    'height': '60px',
                    'width': '60px',
                    'border-radius': '50%'

                },
                stylesHover: {
                    'background-color': '#777777'
                }
            },
            url: 'https://s10.ysocial.net:8090/76c91140b09c22d180350271676a9aaa1d364528/3942b5b9704449298b822ad1892a5b6c/chat',
            iframe: {
                styles: {
                    position: 'fixed',
                    right: '10px',
                    bottom: '60px',
                    width: '348px',
                    height: '490px',
                    border: '0px',
                    padding: '20px',
                    margin: '0px',
                    opacity: '0',
                    'z-index': '10001',
                    transition: 'opacity 2s cubic-bezier(0.19, 1, 0.22, 1) 0s',
                    'will-change': 'opacity',
                    'pointer-events': 'none',
                    'position': 'fixed'
                },
                visibleStyles: {
                    opacity: '1',
                    'pointer-events': 'auto'
                }
            }
        }

    );
    let contar = 0;
    let icon = document.getElementById("ysocial-chat");
    $(icon).click(cambiarIcono);

    function cambiarIcono() {
        contar++;
        if (contar == 1) {
            $(".icono-chat").attr('src', './images/icon-open.png');
        } else {
            $(".icono-chat").attr('src', './images/icon-open.png');
            contar = 0;
        }

    }

}