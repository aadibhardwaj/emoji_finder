const emojiContainer = document.getElementById('emoji-container');

        emojiList.forEach(emoji => {


            const emojiCard = document.createElement('div');
            emojiCard.classList.add('emoji-card');


            const emojiInfo = document.createElement('div');
            emojiInfo.classList.add('emoji-info');


            const emojiName = document.createElement('span');
            emojiName.classList.add('emoji-name');
            emojiName.textContent = emoji.name;
            emojiInfo.appendChild(emojiName);


            const emojiSymbol = document.createElement('span');
            emojiSymbol.classList.add('emoji');
            emojiSymbol.textContent = emoji.emoji;
            emojiInfo.appendChild(emojiSymbol);


            emojiCard.appendChild(emojiInfo);


            const emojiDescription = document.createElement('div');
            emojiDescription.classList.add('description');
            emojiDescription.textContent = emoji.description;
            emojiCard.appendChild(emojiDescription);


            emojiContainer.appendChild(emojiCard);
        });