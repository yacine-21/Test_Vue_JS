Vue.component("fiche-produit",{
    template: `
    <div class="col-3">
     <p class="jumbotron">{{ nom }} <br>
        <button v-on:click="passer_commande(nom)" v-if="role =='commande'">COMMANDER</button> <br>
        <button v-on:click="delete_commande(nom)" v-if="role =='commande'">DELETE</button>
     </p>
    </div>`,
    props: ["nom",'role'],
    methods:{
        passer_commande: function(produit){
            this.$emit("commande-passée",produit)
        },
        delete_commande: function(produit){
            this.$emit("commande-delete",produit)
        }
    }
})

let app = new Vue({
    el:"#app",
    data: {
        user: "Yacine Lyoubi",
        produits : ["Pizza","Hamburger","Cheesburger","Tacos"],
        commandes : [],
        affichage : "display-4"
    },
    methods:{
        commander : function (produit){
            this.commandes.push(produit)
        },
        deleted : function (produit){
            this.commandes.pop()
        }
    }
})