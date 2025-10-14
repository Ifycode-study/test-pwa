
let deferredInstallPrompt = null;

const installButton = document.querySelector('#install-button');

// Prevent default install prompt trigger (so that we can trigger it elsewhere or later)
window.addEventListener('beforeinstallprompt', (event) => {
    //--------
    console.log('beforeinstallprompt fired!');
    console.log(installButton);
    //--------
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.removeAttribute('disabled');
    return false;
});

installButton.addEventListener('click', (event) => {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
            //--------
            console.log(choiceResult.outcome);
            //--------
            if (choiceResult.outcome === 'dismissed') {
                console.log('User cancelled installation', choiceResult);
            } else {
                console.log('User added PWA app to home screen', choiceResult);
                event.target.setAttribute('disabled', true);
            }
        });
        //-
        deferredInstallPrompt = null;
    }
});
