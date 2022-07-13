const app = new Vue(
    {
        el: '#app',

        data: {
            mailGenerated: '',
            listMailGenerated: [],
        },

        methods:{
            generateNewMail(){
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (response) => {
                        this.mailGenerated = response.data.response;
                        this.listMailGenerated.push(this.mailGenerated);
                    });
                };
                console.log(listMailGenerated);
            }
        },

        created(){

        }
    }
);