
//TASK 1
let personName: string="ERIC";
console.log(`hello ${personName} would you like to learn some python today?`);

// TASK 2
//====lower case====
let personName:
//task 3
// lower case
let personName ="Babar";
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase())); 
//task 4
let quote: string="A person who never made a mistake never tried anything new";
let author:string="Albert Einstein";
console.log(`${author} once said,"${quote}`);
//task5
let quote: string="A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said,${quote}`;
console.log(message);
//TASK 6
let personName =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//TASK 7 AND 8
console.log(5+3);
console.log(11-3);
console.log(4*2);
 console.log(16/2);

 //task 9
 let favoriteNumber: number = 8;
 console.log(`My favourite number is ${favoriteNumber}`);

//task 10a
// my name is amna
// date: 11-april-2024
// this program is just run a message of author
let quote: string="A person who never made a mistake never tried anything new";
let author:string="Albert Einstein";
console.log(`${author} once said,"${quote}`);
//Task 11

 let members: string[] =['sana','saba','ali','meerab','amna','azam'];
 for(let i=0; i<members.length; i++){
     console.log(members[i]);
 }

 // TASK 12
 let members: string[] = ['sana','saba','ali','meerab','amna','azam'];
 let message: string='whats your name:';
 for(let i=0; i<members.length; i++){
     console.log(message + members[i]);
 }

//Task 13
 let transportation : string [] = ['civi','bicycle','taxi','truck','van'];
 for(let i=0; i<transportation.length; i++){
    console.log('I would like to own a ' + transportation[i]);
 }

// //Task 14
   let guest_list : string [] = ['ali','saad','rehab','wahaj'];
   for(let i = 0; i < guest_list.length; i++){
      console.log("Respected Sir/Madam" + guest_list[i] + `\n\nWe invited you on dinner tomorrow.\n\nThank You`)
  }
//15
  let not_present : string = 'ali';
  let new_guest : string = 'Babar Azam';
  guest_list[1] = new_guest;
  for(let i = 0; i < guest_list.length; i++) {
       console.log("Respected Sir/Madam" + guest_list[i] + `\n\nWe invited you on dinner tomorrow.\n\nThank You`)
  }
  guest_list.unshift('shaheen','faraz','rizwan');
   for(let i=0; i<guest_list.length; i++){
     console.log(`Respected Sir/Madam` + guest_list[i] + `,\nWe invited you on dinner tomorrow. we found big table so we`)
 console.log('Mr. ${not_present) will not coming tomorrow dinner.')
 console.log('\nunfortunately we can not arrange big table ,Only two people allow.')
 while(guest_list.length>2){
     let remove_guest = guest_list.pop();
     console.log
 }

//16-17

let guest_list : string [] = ['ali','saad','rehab','wahaj'];
let not_present : string = 'ali';
 let new_guest : string = 'Babar Azam';
 guest_list[1] = new_guest;
 for(let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam"  +  guest_list[i] +  `,\n\nWe invited you on dinner tomorrow.\n\nThank You`)
}
guest_list.unshift('shaheen','faraz','rizwan')
console.log(`\nunfortunately we can not arrange big table , only two people allow.`);
while(guest_list.length>2){
    let remove_guest =guest_list.pop();
    console.log(`\Sorry sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for(let i = 0; i < guest_list.length; i++) 
    {
      console.log("Respected Sir/Madam"  +  guest_list[i] + `,\n\nYes you  are still invited on tomorrow dinner. \n\nThank You\n`)
    }
guest_list.splice(0,2)
console.log(guest_list)
//task 18
let places : string [] = ['Cape town','Delhi','Faisalabad','Islamabad','Quetta'];
//Print the array in its original order
console.log("Original order:", placesToVisit);

//print your array alphabetical order without modifying the actual list.
console.log("Alphabetical order:",[...placesToVisit].sort());

// Show that the array is still in its original order
console.log
//console.log('copy' + [...places].sort());
// show that your array is alphabetical order without modifying the actual list

console.log('original order:' + places);
// Print your array in reverse alphabetical order without changing the order of the original list

console.log('reverse alphabetical' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.

console.log('copy' + [...places].sort().reverse());
// Reverse the order of your list again.Print the list to show it's back to its original order
console.log('original :' + places.sort().reverse());

//task19
let invitations : string [] = ['babar azam']
 let count_invitations : number = invitations.length
 console.log(`$(count_invitations) people will come to the dinner`)
//task 20
 let countryname: string [] = ['Pakistan,China,India,Iran,Japan']
 console.log("List of countryname:")
 console.log(countryname)
//task 21
 let person: {name: string, fname: string, age: number} ={name:"Amna",fname: "female", age: 23}
console.log(person)
//task 22
 const days: string [] =["sunday","monday","tuesday","wednessday","thursday","friday","saturday"]
console.log(days[6])
//task23
let car ="subaru";
 console.log ("is car == 'subaru'? predict true")
 console.log(car == 'subaru')
 console.log("is car != 'honda city'? predict true")
 console.log(car != 'honda city')

 console.log("is car =='subaru'? predict false")
 console.log(car == 'subaru')

 console.log("is car =='SUBARU'? predict false")
 console.log(car == 'SUBARU')
 console.log("is car.length ==3? predict false")
 console.log(car.length == 3)

 console.log("is car.length != 10? predict true")
 console.log(car.length != 10)

 console.log("is 10 > 45 ? predict false")
 console.log(10 > 45)

 console.log("is 13 <= 5 ? predict false")
 console.log(13 <= 5 )

 console.log("10 >= 4 ? predict false")
 console.log(10 >= 4)

 console.log("is car == 'subaru' && car.length == 6? predict true")
 console.log(car == 'subaru' && car.length == 6)

//task 24
 let name_1  : string = "Amna"
 let name_2  : string = "Amna qureshi"
 let name_3  : string = " Miss Amna"
 if (name_1 == name_3){
     console.log("names are equal")
 } else {
     console.log("names are not equal")
 }

if (name_1 != name_2){
    console.log("name are equal")
}

if (name_1 != name_3){
    console.log("name are equal")
}

let age_1 : number = 18
let age_2 : number = 22
if (age_1 == 18) {
    console.log("eligible for vote in elder category")
}

if (age_1 <= age_2){
    console.log("younger")
}
if (age_2 <= age_1){
    console.log("older")
}

if (age_1 == 18 && age_2 ! == 22) {
    console.log(" person is eligible for vote")
}
if (age_1 == 18  ||  age_2 != 22) {
    console.log("person is eligible not for vote")
}

let country : string [] = ["pakistan","china", "india", "iran"]
if (country.includes("pakistan")){
    console.log("pakistan is in country list")
}

if (!country.includes ("america")){
    console.log("america is not include in an array")
}

//task 25
 let alien_color = "green"
  if (alien_color == "green")
 console.log("you earn 5 points")

  let alien_color : string = "red"
  if (alien_color == "red")
    console.log("no output")

 //task26
 let alien_color = "green"
 if (alien_color == "green"){
console.log("player just earned 5 points for shooting the alien")
} else{
    console.log("player just earned 10 points")
}
let alien_color = "red"
if (alien_color == "green") {
    console.log( "player just earned 5 points for shooing the alien")
} else{
    console.log("player just earned 10 points")
}

//task 27
let alien_color: string = "red"
if (alien_color == "green") {
    console.log("5 points")
} else if (alien_color == "yellow"){
    console.log("10 points")
} else {
    console.log("15 points")
}

//task28
let age : number = 18
if (age < 2){
console.log("you are a baby")
} else if (age < 4) {
    console.log("you are a toddler")
} else if (age < 13){
    console.log("you are a toddler")   
}else if (age < 13){
    console.log("you are a teenager")
}else if (age < 20){
    console.log("you are a adult")
} else {
    console.log("you are a older")
}
//task 29
let favourite_fruits : string [] = ["kivi","orange","apple"]
if (favourite_fruits.includes("kivi")) {
    console.log("kivi")

}
if (favourite_fruits.includes("peach")) {
console.log("you really likes bananas")
}

if (favourite_fruits.includes("orange")) {
    console.log("orange")
}
if (favourite_fruits.includes("berry")) {
    console.log("you really like bananas")
}
if (favourite_fruits.includes("apples")) {
    console.log("apple")
}
  //task30
  let users : string [] = ["eric","haseeb","ali","babar","fahad"]
  for(let user of users) {
    if (user === "admin") {
        console.log("hellow fahad, would you like to see a status report?")    
    } else {
        console.log (`hello $(user), thank you for logging in again`)
    }
  }
  //task 31
  let user : string [] = ["eric","haseeb","ali","faraz","babar"]
  if (user.length === 0) {
    console.log ("we need to find some users")
  } else {
    for (let user of users) {
        if ( user === "babar") {
            console.log("hello babar, would you like to see a status report?")
        } else {
            console.log (`hello $(user), thank you for logging in again`)
        }
     }
  } 
  users = []
if (users.length === 0) {
    console.log('we need to find some users')
}
//task 32
let current_users : string [] =["admin","eric","ali","hamza","fatima"]
let new_users : string [] = ["admin","fatima","aliza","haseeb","noor"]
 
let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`sorry $(new_user),that name is taken`)
    } else {
        console.log(`yes $(new_user), is still in available list`)
    }
    }
//task 33
let numbers :  number [] = [1,2,3,4,5,6,7,8,9]
for (let number of numbers) {
    if (number === 1) {
        console.log (`$(numbers)st`)
    } else if (number === 2) {
        console.log(`$(numbers)nd`)
    } else if (number === 3){
        console.log (`$(numbers)rd`)
    } else {
        console.log (`$(number)th`)
    }
}
 // task 34
  let favourite_pizza : string [] =["pepperoni","veg","chicken"]
  for (let pizza of favourite_pizza) {
    console.log(pizza)
  }
  console.log ("\n")

  for (let pizza of favourite_pizza){
    console.log('I really like $(pizza) pizza')
  }
  console.log(" \nI really love pizza!")
  // task 35
   let animals : string [] = ["cat","lion","dog"]
   for(let animal of animals) {
    console.log(animal)
   }
   console.log("\n")
    for (let animal of animals){
        console.log (` A $(animal) has a tail`)
    }
     console.log("\n all of these are great pets! but i love cats more")

      //task 36
      function makeShirt(size: string,text: string): void {
        console.log(`you order a $(size) shirt that says $(text)`)
      }
      makeShirt('large','"i love typescript"')
      makeShirt('medium','"i need a big shirt"')
      //task 37
      function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {
        console.log(`you have order a $(size), shirt that says $(text)`)
      }
      makeShirt();
      //differt message
      makeShirt('small','I need a big shirt to user')

      //task 38
      function describe_city(city: string, country: string = 'Pakistan'): void{
        console.log(`${city} is in $(country)`)
      }
      describe_city('Karachi')
      describe_city('France','Europe')
      describe_city('Lahore is in punjab')

     // TASK39
      function cityCountry(city: string,country: string): string {
    return `${city},${country}`
      }
      let c1 = cityCountry('Lahore','Pakistan')
      let c2 =cityCountry('Tokyo','Japan')
      let c3 =cityCountry('Paris','France')

      console.log(c1)
      console.log(c2)
      console.log(c3)

      //task 40
      function makeAlbum (artist: string, tittle: string): ( artist: string; title: string) {
      const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1)
        title: title.charAt(0).toUpperCase() + title.slice(1)
     };
     return dictionaries;
      }
    
      let album =makeAlbum("ali" ,"light")
      console.log(album)
      album = makeAlbum("bilal" ,"red wave")
      console.log(album)
       album =makeAlbum("shan" , "red wave" )
      console.log(album)

     // task 41
      function show_magicians(show_magicians: string[]): void {
        for (const magician of magicians) {
            console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        }
      }
      const magician: string[] = ["ali","hamza","bilal"];
      show_magicians(magician)

      // task 42
       function make_great(magicians: string[]) :void {
        for (let i = 0; 1 < magicians.length; i++) {
            magicians[1] = magicians[1] +'the great'
        }
        }

        const magicians2: string[] = ["sana","aliza","basit"];
         
         show_magicians(magicians2)
         
         
        // task 43
         function make_great2(magicians: string[]): string[] {
            const greatMagicians: string[] = [];
            for (let i = 0; i < magicians.length; i++){
                greatMagicians.push(magicians[i] +'the great');
            }
            return greatMagicians;
         }

         const magicians3: string[] = ["usama","haseeb","wajahat"];
        const greatMagicians2: string[] = make_great2(magicians3);
        show_magicians(magicians3);
        show_magicians(greatMagicians2);
        //task 44
        function sandwich(...items: string[]): void {
            console.log("sandwich order:")
            for(let i= 0; i < items.length; i++){
                console.log(`=${items[i]}`)
            }
        }
        console.log("enjoy your sandwich amna qureshi")

        sandwich('capsicum','tomato','chicken')
        sandwich('beef','cheese')
        sandwich('garlic chicken','mayo sauce')

        //task 45
        type car = {
            manufacture: string
            model: string
            [key: string]: any;
        }
        function createCar(manufacture: string, model:string,optional: Record<string, any>): car{
            return{
                manufacture,
                model,
                ...optional
            }
        }
        const mycar: car = createCar("toyota","corolla",{ color: "silver", year: "2024"})
         console.log(mycar)