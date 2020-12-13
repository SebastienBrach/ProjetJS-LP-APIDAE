class Account {
    constructor(numero, nom, categorie) {
        this.numero = numero
        this.nom = nom
        this.categorie = categorie
    }
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
    // elle prend en paramètre le compte ou l'argent sera débité, et le compte ou l'argent sera créditée
    constructor(compteDebite, compteCredite) {
        this.compteDebite = compteDebite
        this.compteCredite = compteCredite
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

        // chaque compte a une liste de ligne de compte

        comptes.forEach(compte => console.log(compte)) 
    }

    getLigneDeCompte(){
        let ligne1 = new LigneDeCompte(new Account(1, 'Cash', 'D'),"D", "C", "13/12/2020", 1000)
        console.log(ligne1)
    }

    effectuerTransaction(){
        let transaction1 = new Transaction()    

        // c'est ici qu'on décide de mettre dans la case D ou C de la ligne du compte pour les comptes concernés
    }

	bilan()	{
        // parcourir les comptes, et calculer les bilans
        // somme des lignes de compte
    }

    afficherTableau(){
        // importer toute les autres fonctions
    }
}

let agent = new Agent("Sébastien")
console.log(agent.getLigneDeCompte())