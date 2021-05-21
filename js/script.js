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
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            contactIndex: 0,
            messageIndex: 0,
            newMessage: '',
            newDate: ''
        },
        mounted: function () {
            this.newDate = dayjs().format('DD/MM/YY HH:mm:ss')
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
            // d. faccio il return della stringa tramite interpolazione
            getAccessDate: function () {
                const getIntoMessages = this.contacts[this.contactIndex].messages;

                const getDate = getIntoMessages[getIntoMessages.length - 1].date.split(" ");

                const day = getDate[0];
                const hour = getDate[1];

                return `Ultimo accesso il ${day} alle ${hour}`
            },

            // 7. funzione per mandare messaggi
            // a. inizializzo nei data newMessage a stringa vuota
            // b. pusho il nuovo oggetto con dentro il newMessage (che sarà inviato tramite @keydown.enter), la newDate (impostata con dayJS) e lo status (impostato su 'sent' in modo da far comparire il messaggio sempre a destra)
            sendMessage: function (contact) {
                if (this.newMessage.trim().length > 0) {
                    contact.messages.push({
                        date: this.newDate,
                        text: this.newMessage,
                        status: 'sent'
                    })
                }
                this.newMessage = "";
            }
        }
    }
);