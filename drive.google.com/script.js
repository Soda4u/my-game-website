function redirectToGame(gameId) {
    const gameUrls = {
        game1: "slope",
        game2: "othergame"
        // Add more game URLs as needed
    };

    const url = gameUrls[gameId];
    if (url) {
        const iframeHtml = `
            <html>
            <head><title>Game</title></head>
            <body style="margin:0;">
                <iframe src="${url}" style="border:none; width:100vw; height:100vh;"></iframe>
            </body>
            </html>
        `;

        const newWindow = window.open('about:blank', '_blank');
        newWindow.document.open();
        newWindow.document.write(iframeHtml);
        newWindow.document.close();
    } else {
        alert('Game URL not found');
    }
}
