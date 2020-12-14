// voir en bas pour explication

class Account {
    constructor(numero, nom, categorie) {
        this.numero = numero
        this.nom = nom
        this.categorie = categorie
    }

    // credit(){
    // }

    // debit(){
    // }
}

class LigneDeCompte{
    constructor(compte, credit, debit, date, value){
        this.compte = compte
        this.credit = credit
        this.debit = debit
        this.date = date
        this.value = value
    }

    getCompte(){
        return this.compte
    }

    getDate(){
        return this.date
    }
}

class Transaction {
    // elle prend en paramètre le compte ou l'argent sera débité, et le compte ou l'argent sera créditée + la value?
    constructor(compteDebite, compteCredite, value) {
        this.compteDebite = compteDebite
        this.compteCredite = compteCredite
        this.value = value
    }
}

class Agent{
    constructor(name){
        this.name=name
    }   
	   
    getCompte() {
        let compte1 = new Account(1, 'Cash', 'D')
        let compte2 = new Account(2, 'Emprunt', 'C')
        let compte3 = new Account(3, 'Capital', 'C')
        let compte4 = new Account(4, 'Vente', 'C')
        let compte5 = new Account(5, 'Achat', 'C')
        let comptes = [compte1,compte2,compte3,compte4,compte5]

        return comptes
        // TODO : chaque compte a une liste de ligne de compte
    }

    getLigneDeCompte(){
        let ligne1 = new LigneDeCompte(new Account(1, 'Cash', 'D'),"D", "C", "13/12/2020", 1000)
        console.log(ligne1)
    }

    effectuerTransaction(){
        let transaction1 = new Transaction()    
        // TODO : c'est ici qu'on décide de mettre dans la case D ou C de la ligne du compte pour les comptes concernés
    }

	bilan()	{
        let comptes = this.getCompte()
        comptes.forEach(compte => console.log(compte)) 

        // TODO : parcourir les comptes, et calculer les bilans (mais comment ??)
        // TODO : somme des lignes de compte (comment ?)
    }
}

let agent = new Agent("Sébastien")
console.log(agent.getLigneDeCompte())

/**
 * Bonjour Moustapha ! 
 * Merci de prendre de votre temps pour me donner un coup de main :)
 * 
 * Jusqu'ici je pense avoir les bonnes méthodes/classes
 * Cependant je reste bloquer à ce stade car je ne sais pas quoi faire d'autre (je n'ai jamais fais de JS, ou très peu)
 * les TODO c'est ce que je pense qu'il faut dans chaque méthode pour avoir la bonne modélisation
 * 
 * Vous pensez que le code dans les classes Account, LigneDeCompte et Transcation suffit ?
 * D'autre part je ne sais pas non plus comment m'y prendre dans les méthodes de la classe Agent
 * 
 * Donc pour résumer, me dire si pour vous les classes Account, LigneDeCompte et Transcation sont 'bonnes'
 * M'éclaircir sur les méthodes avec des exemples (ou réaliser le code d'une des méthodes si pour vous c'est plus simple (je pourrais m'en inspirer pour les méthodes suivantes))
 * 
 * Merci d'avance, si vous n'avez pas le temps (ou pas l'envie car le tp n'est pas très amusant), je comprendrais totalement
 * 
 * Bonne journée à vous
 * 
 * Sébastien BRACH
 */
