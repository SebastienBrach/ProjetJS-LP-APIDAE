class AgentEconomique {
    constructeur(nom){
        this.nom = nom
    }
}
  
class Compte {
    constructeur(){
        this.id = id
        this.d = d
        this.c = c
    }
}

class CompteCredit extends Compte {
    constructeur(){
        super()
    }
}

class CompteDebit extends Compte {
    constructeur(){
        super()
    }
}

let compte = new CompteCredit(2)