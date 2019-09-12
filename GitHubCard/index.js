/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [  
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// pull info
axios.get('https://api.github.com/users/bmoir23')
.then(data => {
  console.log('Successful!', data);
  const cards = document.querySelector('.cards');
  cards.appendChild(createCard(data.data));
})
.catch(err => {
  console.log('Error:', err);
})

// pull follower info

axio.get('https://api.github.com/users/bmoir23/followers')
.then(data =>{
  console.log('That worked! Here is a list of your followers:', data.data);
  const followersData = data.data;
  followersData.forEach(followersData =>{
    followersArray.push(followerData.login);
  })

followersArray.forEach(follower => {
  axios.get('https://api.github.com/users/${follower}')
  .then(data => {
    console.log('Follower info: ' , data.data );
    const cards2 = document.querySelector('.cards');
    cards2.appendChild(createCard(data.data));
  })

  .catch(err => {
    console.log('Could not retrieve follower info: ', err);
  })
})

})

.catch(err => {
  console.log ('There was a problem retrieving your followers :' , err);
})

//  card component

function createCard(data){

// DOM 

  const userCard = document.createElement('div');
  const userImg = document.createElement('img');
  const userInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const displayName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const userProfile = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

// classes

userCard.classList.add('card');
userInfo.classList.add('card-info');
userName.classList.add('name');
displayName.classList.add('username');

// assign values

userImg.src = data.avatar_url;
userName.textContent = data.name;
displayName.textContent = data.login;
userLocation.textContent = `Location: ${data.location}`;
userProfile.innerHTML = `Profile: <a href=${data.html_url}>${data.html_url}</a>`;
userFollowers.textContent = `Followers: ${data.followers}`;
userFollowing.textContent = `Following: ${data.following}`;
userBio.textContent = `Bio: ${data.bio}`;

// structure

userCard.appendChild(userImg);
userCard.appendChild(userInfo);
userInfo.appendChild(userName);
userInfo.appendChild(displayName);
userInfo.appendChild(userLocation);
userInfo.appendChild(profile);
profile.appendChild(userProfile);
userInfo.appendChild(userFollowers);
userInfo.appendChild(userFollowing);
userInfo.appendChild(userBio);



  return userCard;
}

