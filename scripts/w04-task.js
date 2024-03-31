/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Edison Garcia",
    photo: {
        src: "images/placeholder.png",
        alt: "Profile Picture",
    },
    favoriteFoods: ['Rice', 'Chicken Adobo', 'Ice Cream'],
    hobbies: ['Travelling', 'Biking', 'Walking'],
    placesLived: [
        {
            place: 'Philippines',
            length: '22 years'
        },
        {
            place: 'Taiwan',
            length: '2 years'
        },
        {
            place: 'Canada',
            length: '12 years'
        }
    ]
};

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    // Create <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    // Create <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    // Append <dt> and <dd> elements to <dl> element with ID "places-lived"
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});