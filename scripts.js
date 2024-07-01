document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('fade-in');
            });

            targetSection.classList.add('fade-in');

            window.scroll({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    const modal = document.getElementById('character-modal');
    const modalContent = document.querySelector('.modal-body');
    const closeModalButton = document.querySelector('.close-btn');

    const characterDetails = {
        character1: {
            name: 'Gabimaru',
            description: 'Gabimaru served as Iwagakure most infamous shinobi until he was betrayed by his village for wanting to abandon his role as a murderer and live a peaceful life with his wife. This resulted in him being handed over to the authorities to be executed. However, after the shogun calls for death row convicts to compete in acquiring the Elixir of Life from an island believed to be Shinsenkyō in exchange for a pardon for their past crimes, Gabimaru receives an invitation from Yamada Asaemon Sagiri to be a part of the competition and accepts in order to reunite with Yui and live the life he so desired.',
            image: 'gabi.jpg'
        },
        character2: {
            name: 'Yuzuriha',
            description: 'Before being sentenced to death, Yuzuriha became recruited to join in an expedition team where she would compete against other death row convicts in acquiring the Elixir of Life for the shogun from an island believed to be Shinsenkyō in exchange for a pardon that would exempt her of her past crimes.',
            image: 'yuzu.jpg'
        },
        character3: {
            name: 'Yamada Asaemon Sagiri',
            description: 'After the shogun called for death row convicts to acquire the Elixir of Life from an island believed to be Shinsenkyō in exchange for a pardon for their past crimes, Sagiri recruited Gabimaru to be a part of the expedition team and was put in charge of acting as his monitor until the mission was complete.',
            image: 'BG.jpg'
        },
        character4: {
            name: 'Aza Chobei',
            description: 'Aza Chobei is a well-known bandit leader in Iyo, known as the Bandit King, who is responsible for multiple crimes committed Before receiving the death sentence after his arrest, Chōbei became recruited by his brother Aza Tōma, who infiltrated the Yamada clan to reunite with Chōbei, to join in an expedition team where he would compete against other death row convicts in acquiring the Elixir of Life for the shogun from an island believed to be Shinsenkyō in exchange for a pardon that would exempt him of his past crimes.',
            image: 'aza2.jpg'
        },
        character5: {
            name: 'Aza Toma',
            description: 'Aza Tōma is the younger brother and right-hand man of the infamous bandit Aza Chōbei. After his brother was arrested, Tōma infiltrated the Yamada clan in order to reunite with Chōbei in prison and presented him with the shoguns mission to acquire the Elixir of Life from the dangerous island believed to be Shinsenkyō. With the reward being a pardon exempting the criminal of their past crimes, Chōbei accepted and was assigned Tōma as his Yamada Asaemon monitor.',
            image: 'toma2.jpg'
        },
        character6: {
            name: 'Zhu Jin',
            description: 'Zhu Jin was a Tensen-class Sennin affiliated with Lord Tensen, being the member who specialized in the mystic art of Taisoku, and part ruler of Kotaku, going by the moniker Tathātā Yuanjun. They are a major antagonist of Hells Paradise.',
            image: 'zhu.jpg'
        },
        character7: {
            name: 'Rien',
            description: 'Throughout her lifetime on Kotaku, Rien had been plotting and experimenting in the ways of Tao in an effort to revive her beloved late husband Jofuku and had aimed to exterminate all life in Japan in order to fulfill this ambition. She is the main antagonist of Hells Paradise.',
            image: 'rien2.jpg'
        },
        character8: {
            name: 'Shion',
            description: 'After the shogun called for death row convicts to acquire the Elixir of Life from the dangerous island believed to be Shinsenkyō, in exchange for a pardon for their past crimes, Shion joined in the expedition team as one of the Yamada Asaemon monitors and was assigned to keep watch over the criminal Akaginu.',
            image: 'shion2.jpg'
        },
        character9: {
            name: 'Nurugai',
            description: 'Before being sentenced to death, Nurugai became recruited to join in an expedition team where she would compete against other death row convicts in acquiring the Elixir of Life for the shogun from an island believed to be Shinsenkyō in exchange for a pardon that would exempt her of her past crimes.',
            image: 'nuru2.jpg'
        },
        character10: {
            name: 'Mei',
            description: 'Mei is a Tensen-class Sennin who was formerly affiliated with Lord Tensen, having been banished by Rien for acting defiant. After being found by Hōko, Mei went into hiding and chose to live out her remaining time on Kotaku being raised by him as his daughter. Several years later, she becomes a close ally of Gabimaru, Sagiri, and the other surviving humans in their attempt to retrieve the elixir known as Tan from Lord Tensen and escape the island. She is a major supporting character of Hells Paradise.',
            image: 'mei2.jpg'
        },
    
        
    };

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const character = button.getAttribute('data-character');
            const details = characterDetails[character];

            if (details) {
                modalContent.innerHTML = `
                    <img src="${details.image}" alt="${details.name}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                    <h3>${details.name}</h3>
                    <p>${details.description}</p>
                `;

                modal.classList.remove('hidden');
                modal.style.display = 'block'; 
            }
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none'; 
        }
    });
});


