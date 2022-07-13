const app = new Vue(
    {
        el: '#app',

        data: {
            mailGenerated: '',
        },

        methods:{
            generateNewMail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.mailGenerated = response.data.response;
                });
            }
        },

        created(){

        }
    }
);