class Account {
    constructor( id, type) {
        this.id = id;
        this.type = type;
        this.cLines = []; // lignes de crédits qui sera la liste des montants crédités
        this.dLines = []; // lignes de débits qui sera la liste des montants débits    
    }
    
    calculateBalance () {
        if (this.type === "D") {
            //Initialisation de la somme des crédit et des débit
            let creditSum = 0;
            let debitSum = 0;
        
            // calcul de la somme des crédits
            for (let i = 0; i < this.cLines.length; i++) {
                creditSum += this.cLines[i];
            }
        
            // calcul de la somme des débits
            for (let i = 0; i < this.dLines.length; i++) {
                debitSum += this.dLines[i];           
            }
        
            // Retour du résultat qui est égal à la différence entre la somme des débits et la somme des crédits       
            // pour un compte de type D 
            return debitSum - creditSum;
        
        
        } else if (this.type === "C") {
            // faire la même chose pour les compte de type C
            return "somme lignes de crédits - somme lignes de débits"
        }
    }
}
    
    
class Agent {
    constructor() {
        this.accounts = {
            cash: new Account(10, "D"),
            loans: new Account(20, "C"),
            capital: new Account(30, "C"),
            sales: new Account(40, "C"),
            purchases: new Account(50, "C"),
        };
        this.transactions = [];
    }

    makeTransaction (source, destination, amount) {
        source.cLines.push(amount);
        destination.dLines.push(amount);

        // Une transaction, que je n'ai pas modélisée séparément, et qui serait un objet comme celui ajouté 
        // à la liste de transactions ci-après.

        this.transactions.push({ // ajoute une transaction à la liste des transactions
            date: new Date(),
            source,
            destination,
        })
    }
}

    

const agent1 = new Agent(); // Création d'un agent
agent1.makeTransaction(agent1.accounts.capital, agent1.accounts.cash, 1000); // Première transaction
console.log(agent1.accounts.cash.calculateBalance()); // calcul du bilan du compte cash retourne 1000
console.log(agent1.transactions); // Retourne la liste des transactions de l'agent 1