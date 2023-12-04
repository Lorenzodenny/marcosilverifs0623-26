class User {
    constructor(_firstName, _secondName, _age, _location){
        this.firstName = _firstName
        this.secondName = _secondName
        this.age = _age
        this.location = _location
    }

    agePlus(user){
        if (user1.age > user.age) {
            console.log(`${user1.firstName} è piu grande di ${user.firstName}`)
        }else{
            console.log(`${user.firstName} è più grande di ${user1.firstName}`)
        }
    }
}

const user1 = new User ("Marco", "Silveri", 33, "Bellegra")
const user2 = new User ("Domenico", "Villani", 24, "Perugia")


user1.agePlus(user2)




let animali = []



class Pet {
    constructor(_petName, _petOwner, _species, _breed){
        this.petName = _petName
        this.petOwner = _petOwner
        this.species = _species
        this.breed = _breed
    }

    hasSameOwnerAs(anotherPet) {
        return this.petOwner === anotherPet.petOwner;
    }
}




function insertPet (){
    let petName = document.getElementById("pName").value
    let ownerName = document.getElementById("oName").value
    let species = document.getElementById("species").value
    let breed = document.getElementById("breed").value
    const pet = new Pet(petName, ownerName, species, breed)
    animali.push(pet)
    let li = document.createElement("li")
    let ul = document.querySelector("ul")
    li.innerHTML = `${petName} è l'animale di ${ownerName} che è un ${species} di questa razza ${breed}`
    ul.appendChild(li)

    document.getElementById("pName").value = ""
    document.getElementById("oName").value = ""
    document.getElementById("species").value = ""
    document.getElementById("breed").value = ""

    console.log(animali)
}

function confrontaProprietari() {
    for (let i = 0; i < animali.length; i++) {
        for (let j = i + 1; j < animali.length; j++) {
            if (animali[i].hasSameOwnerAs(animali[j])) {
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}

