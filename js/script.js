var app = new Vue(
    {
        el: "#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:40:34',
                            text: 'Ok non fa niente!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Marco',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ho studiato Vue.js tutto il giorno, mi sta piacendo un sacco!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "Ah, e cos'è sto Vue.js?",
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Matteo',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '14/05/2021 16:30:55',
                            text: 'Hahahahahahahaha non ci credo',
                            status: 'sent'
                        },
                        {
                            date: '14/05/2021 17:50:00',
                            text: "Quando l'ho scoperto ci sono rimasto hahahaha",
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Martina',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Conosci Carmelo Bene? Sto guardando suoi vecchi video su YouTube ed è un personaggio fantastico!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Certo che lo conosco! ricordo una puntata al Costanzo Show hahahaha grande personaggio!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giuseppe',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Sei mai stato ad Amsterdam?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, tanti anni fa ci sono stato un mese intero..bellissima città :)',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: '_io',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao Giulia ma come stai? Ho saputo che non sei stata molto bene ultimamente',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Meglio grazie, mi sto riprendendo piano piano ;) Tu invece tutto ok?',
                            status: 'received'
                        }
                    ],
                },
            ],
            contactIndex: 0,
            newMessage: '',
            newSearch: '',
            // bonus
            randomResponses: [
                "Ricorda che devi fare la spesa per domani sera!",
                "Sta calmo per favore!",
                "Ho fatto tutto, ora vado a letto",
                "Ieri ho visto Marco al pub, s'è scolato dieci birre e stava ancora in piedi!",
                "Non minimizzare",
                "Attento a te eh! hahahahaha",
                "Oggi ho comprato anche la frutta per la macedonia..possiamo farla domani?",
                "Ma senti na cosa, hai ascoltato l'ultimo album di Nick Cave?",
                "Senti...non so come dirtelo ma non ho voglia di parlarti",
                "Ciao",
                "Si lo conosco! Forte",
                "Ho un dolore ai piedi incredibile",
                "Boolzapp mi piace di più in dark-mode",
                "Credi che il cane sia contento di restare solo? io non credo :/",
                "Porta anche qualcosa da bere se ce la fai coi tempi! Ti stiamo aspettando!"
            ],
            darkMode: false,
            toggleIcon: 'Dark'
            // bonus
        },
        // updated. permettere all'ultimo messaggio inviato di essere visto indipendentemente dallo scroll
        updated: () => {
            const message = document.getElementsByClassName("message");
            const lastMessageSent = message[message.length - 1];
            lastMessageSent.scrollIntoView();
        },
        methods: {

            // 1. funzione per rendere dinamici gli avatar dei contatti
            getAvatar: function (index) {
                let pic = this.contacts[index].avatar;
                return `img/avatar${pic}.jpg`;
            },

            // 2. funzione per rendere dinamico l'alt di ogni avatar
            getAlt: function (index) {
                return this.contacts[index].name;
            },

            // 3. funzione per rendere dinamico l'active al click su ogni contatto
            getContact: function (index) {
                return this.contactIndex = index;
            },

            // 4. funzione per recuperare la data dell'ultimo messaggio inviato
            getLastDate: function (contact) {
                let lastDate = contact.messages.length - 1;
                return contact.messages[lastDate].date;
            },

            // 5. funzione per recuperare l'ultimo messaggio inviato
            // a. se la lunghezza del messaggio supera i 30 caratteri la tronco inserendo i puntini, altrimenti la lascio intera
            getLastMessage: function (contact) {
                let lastMessage = contact.messages.length - 1;

                let lastMessageLength = contact.messages[lastMessage].text.length;

                if (lastMessageLength > 30) {
                    return contact.messages[lastMessage].text.substr(0, 30) + "...";
                } else {
                    return contact.messages[lastMessage].text;
                }
            },

            // 6. funzione per scrivere in pagina l'ultimo accesso
            // a. navigo fino a messages
            // b. recupero da messages la data e con split divido il giorno (dd/mm/aa) dall'ora
            // c. ottenuto un array assegno all'elemento di posizione 0 la variabile day, all'1 la variabile hour
            // d. se lo status dell'ultimo messaggio è settato su 'received', faccio il return dell'ultimo accesso, altrimenti (aggiunta bonus) stampo in pagina la stringa 'Sta scrivendo...'
            getAccessDate: function () {
                const getIntoMessages = this.contacts[this.contactIndex].messages;

                const getDate = getIntoMessages[getIntoMessages.length - 1].date.split(" ");

                const day = getDate[0];
                const hour = getDate[1];
                if (getIntoMessages[getIntoMessages.length - 1].status == 'received') {
                    return `Ultimo accesso il ${day} alle ${hour}`
                } else {
                    return 'Sta scrivendo...'
                }
            },

            // 7. funzione per mandare messaggi
            // a. inizializzo nei data newMessage a stringa vuota
            // b. pusho il nuovo oggetto con dentro il newMessage (che sarà inviato tramite @keydown.enter), la newDate (impostata con dayJS) e lo status (impostato su 'sent' in modo da far comparire il messaggio sempre a destra)
            // c. aggiunta bonus: messaggio automatico per simulare una conversazione
            sendMessage: function (contact) {

                if (this.newMessage.trim().length > 0) {
                    contact.messages.push({
                        date: dayjs().format('DD/MM/YY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent'
                    })
                    // risposta automatica
                    setTimeout(() => {
                        this.contacts[this.contactIndex].messages.push({
                            date: dayjs().format('DD/MM/YY HH:mm:ss'),
                            text: this.randomResponses[Math.floor(Math.random() * (this.randomResponses.length - 1))],
                            status: 'received'
                        })
                    }, 6000);
                    // /risposta automatica
                }
                this.newMessage = "";
            },
            // 8. (aggiunta bonus) funzione per la dark mode
            toggleDarkMode: function () {
                this.darkMode = !this.darkMode

                if (this.darkMode == true) {
                    this.toggleIcon = 'Light'
                } else {
                    this.toggleIcon = 'Dark'
                }
            },
            // 9. funzione per cercare contatti in base all'input
            searchContact: function () {
                this.contacts.forEach(
                    contact => {
                        if (contact.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                            contact.visible = true;
                        } else {
                            contact.visible = false
                        }
                    }
                );
            }
        }
    }
);