// Basic single-page navigation system
const content = document.getElementById("content");

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);

function loadPage() {
  const page = location.hash.slice(1) || "home";
  switch (page) {
    case "home": renderHome(); break;
    case "blog": renderBlog(); break;
    case "destinations": renderDestinations(); break;
    case "guides": renderGuides(); break;
    case "about": renderAbout(); break;
    case "contact": renderContact(); break;
    default: renderHome();
  }
}

function renderHome() {
  content.innerHTML = `
     <section class="home-banner">
    <h1>Welcome to Namma Kudla</h1>
    <p>Discover the cultural beauty, nature, and stories of Kudla.</p>
  </section>
<section class="board">
<p>Kudla, the local Tulu name for Mangalore, has a rich history shaped by diverse cultures, trade, and coastal heritage. It was once a major port for the ancient dynasties of the Alupas, who ruled the region for centuries. Later, it came under the influence of the Vijayanagara Empire, followed by Portuguese, Arab, and Dutch traders who contributed to its multicultural character. The British eventually established administrative control, further developing the city. Kudla became known for its thriving trade in spices, tiles, and fisheries. Its unique blend of Tulu culture, temples, beaches, and traditions continues to reflect its vibrant historical legacy..</p>
</section>
  
    <h2>Featured Posts</h2>
    <section class="section">
    <div class="cards">
      <div class="card">
        <img src="https://karnatakatourism.org/wp-content/uploads/2020/05/Yakshagana-2.jpg" alt="Yakshagana performance">
        <h3>Yakshagana – The Dance Drama of Coastal Karnataka</h3>
        <p>
          Yakshagana is a traditional theatre form that originated in the coastal districts of Karnataka, especially in the Tulunadu region. 
          It beautifully blends dance, music, dialogue, and vibrant costumes to bring ancient epics and mythological stories to life. 
          The word Yakshagana literally means “the song of the celestials.”
          <br><br>
          This art form is performed mainly during the night, often lasting until dawn. Artists wear elaborate headgear, colorful facial makeup, and intricate costumes 
          that symbolize gods, demons, and heroes from stories of the Ramayana, Mahabharata, and Puranas. 
          Yakshagana continues to thrive today, preserving Karnataka’s rich cultural heritage through storytelling and performance.
        </p>
      </div>

      <div class="card">
        <img src="https://th-i.thgim.com/public/incoming/7kglf5/article68002660.ece/alternates/FREE_1200/29_mn%20Photo%20for%20in%20focus%20story%20on%20Tulu%20%20by%20Raviprasad%20Kamila%20(4).jpg" alt="Bhootha Kola ritual">
        <h3>Bhootha Kola Ritual</h3>
        <p>
         Bhootha Kola is a traditional spiritual and cultural ritual performed mainly in the coastal districts of Karnataka, especially in the Tulu Nadu region (Mangalore, Udupi, and parts of Kasaragod). It is a centuries-old ritual dance that honors and invokes local spirits or deities known as Bhoothas or Daivas. These spirits are believed to protect the land, people, and community from harm while maintaining social harmony.

The performer, usually from a traditional family of spirit impersonators, undergoes elaborate rituals, including fasting and purification, before the ceremony. Dressed in vibrant costumes, with heavy ornaments, colorful makeup, and a tall headgear, the performer enters a trance-like state believed to be possessed by the spirit. During this state, the Bhootha communicates divine messages, resolves disputes, and blesses devotees.

Drums, chants, and traditional music add rhythm and power to the performance, which often continues late into the night. Bhootha Kola is not just a religious event but a social and cultural celebration that connects people to their roots. It reflects the deep bond between humans and nature, as well as the coexistence of spirituality, folklore, and community values in the Tulu culture.
        </p>
        </div>
        </section>
      
`;
}

function renderBlog() {
  content.innerHTML = `
    <section class="section">
      <h2>Travel Blog</h2>
      <div class="cards">
        <div class="card">
          <img src="https://tse3.mm.bing.net/th/id/OIP._VjDL5fbR_iqQGTAt7EI3QHaD8?pid=Api&P=0&h=180" alt="">
          <h3>Exploring Pilikula</h3>
          <p>A perfect weekend getaway for families and nature enthusiasts.</p>
          <input type="button"value="read more">
        </div>
        
        <div class="card">
          <img src="https://tse1.mm.bing.net/th/id/OIP.Emp5M9umIF8e4DUCcaAbJQHaEK?pid=Api&P=0&h=180" alt="">
          <h3>Boating Adventures</h3>
          <p>boating in the serene backwaters of Kudla.</p>
          <input type="button"value="read more">
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <img src="https://tse4.mm.bing.net/th/id/OIP.k2B4V4G8ICK3IsiZ1QZzmgHaE8?pid=Api&P=0&h=180" alt="">
          <h3>variety of foods</h3>
          <p>Exploring the diverse culinary delights of Kudla.</p>
          <input type="button"value="read more">
        </div>
        <div class="card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.k89P_ARjT1O1H4pib0zLugHaEZ?pid=Api&P=0&h=180" alt="">
          <h3>Festivals of Kudla</h3>
          <p>Discover the vibrant festivals celebrated in Kudla throughout the year.</p>
          <input type="button"value="read more">
        </div>
      </div>
          <h3>Cultural Festivals</h3>
    </section>
  `;
}

function renderDestinations() {
  content.innerHTML = `
    <section class="section">
      <h2>Top Destinations in Kudla</h2>
      <div class="cards">
        <div class="card">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7a44fb172541755.6480d0e653b6e.jpg" alt="">
          <h3>St. Aloysius Chapel</h3>
          <p>St. Aloysius Chapel, located on Lighthouse Hill in Mangalore, is one of the city’s most famous landmarks. Built in 1880 by Jesuit missionaries, it is part of St. Aloysius College.</p>
          <Ul>
          <li>
         <a href="https://in.video.search.yahoo.com/video/play;">play video</a>
         </li>
         <li>
            <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//St.+Aloysius+Chapel,+Lighthouse+Hill,+Mangalore,+Karnataka,+India/@12.8616545,74.8421233,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba35ef87f2012b5:0x7d4c5f3c3f6e2e0!2m2!1d74.8570246!2d12.8616593','popup','width=600,height=400');return false;">
          </li>
          </ul>
        

            </div>
       <div class="card">
          <img src="https://i.ytimg.com/vi/tLCtUHEvE0g/maxresdefault.jpg" alt="">
         <p>Panambur Beach is a popular and well-maintained beach in Mangaluru, Karnataka, known for its clean shoreline, golden sand, and safe swimming areas.</p>
         <Ul>
          <li>
          <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//Panambur+Beach,+Mangalore,+Karnataka,+India/@12.9662185,74.8121833,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba35c3c6f4b6b7d:0x2e3f4e8e4e8e4e8e!2m2!1d74.8431236!2d12.9662233','popup','width=600,height=400');return false;">
          </li>
          
          
        </div>
        <div class="card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.87vTLY2UEkH7I6j-BunoawHaD_?pid=Api&P=0&h=180" alt="">
          <h3>Tannirbhavi Beach</h3>
          <p>Relax, enjoy the breeze, and watch the sunset by the sea.</p>
          <ul>
          <li>
          <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//Tannirbhavi+Beach,+Mangalore,+Karnataka,+India/@12.8881234,74.7981234,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba35b8c6f4b6b7d:0x3e4f5e6f7e8f9e0f!2m2!1d74.8123456!2d12.8881289','popup','width=600,height=400');return false;">
          </li>
          </ul>

        </div>
      </div>
      <div class="cards">
        <div class="card">
          <img src="https://tse4.mm.bing.net/th/id/OIP.mXtthQsQ8hjcwqmU3wbcAgHaIy?pid=Api&P=0&h=180" alt="">
          <p>kadri Manjunath Temple is an ancient Hindu temple located in Mangalore, Karnataka, dedicated to Lord Shiva in his form as Manjunatha.</p>
          <ul>
          <li>
          <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//Kadri+Manjunath+Temple,+Mangalore,+Karnataka,+India/@12.9251234,74.8551234,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba35d8c6f4b6b7d:0x4e5f6e7f8e9f0a1b!2m2!1d74.8701236!2d12.9251289','popup','width=600,height=400');return false;">
          </li>
          </ul>
        </div>
        <div class="card">
          <img src="https://tse1.mm.bing.net/th/id/OIP.QFENj-PPjRkhVB-JeRyCdwHaFj?pid=Api&P=0&h=180" alt="">
          <p> dharmasthala Temple is a renowned Hindu pilgrimage site located in the town of Dharmasthala, Karnataka, India. It is dedicated to Lord Manjunatha, a form of Lord Shiva.</p>
          <ul>
          <li>
          <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//Dharmasthala+Temple,+Dharmasthala,+Karnataka,+India/@12.2951234,75.0001234,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba35f8c6f4b6b7d:0x5e6f7e8f9e0a1b2c!2m2!1d75.0151236!2d12.2951289','popup','width=600,height=400');return false;">
          </li>
          </ul>
        </div>
        <div class="card">
        <img src="https://tse3.mm.bing.net/th/id/OIP.ym8gi67Xd6TAjCZQSVmttwHaES?pid=Api&P=0&h=180" alt="">
        <p>subramanya Temple is a famous Hindu temple located in the town of Subramanya, Karnataka, India. It is dedicated to Lord Subramanya, also known as Kartikeya or Murugan, the son of Lord Shiva and Goddess Parvati.</p>
        <ul>
          <li>
          <input type="button"value="route" onclick="window.open('https://www.google.com/maps/dir//Subramanya+Temple,+Subramanya,+Karnataka,+India/@12.7081234,75.2001234,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba3618c6f4b6b7d:0x6e7f8e9f0a1b2c3d!2m2!1d75.2151236!2d12.7081289','popup','width=600,height=400');return false;">
          </li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderGuides() {
  content.innerHTML = `
    <section class="section">
      <h2>Our Travel Guides</h2>
      
        <div class="card">
          
          <h3>Rahul Shetty</h3>
          <p>Local expert with 10+ years experience guiding around Kudla.</p>
          <input type ="button"value="contact">
        </div>
        <div class="card">
           
          <h3>Divya Rao</h3>
          <p>Cultural historian and food tour guide specializing in Kudla cuisine.</p>
          <input type ="button"value="contact">
        </div>
        <div class="card">
        <h3>Amit Kumar</h3>
        <p>Adventure tour guide leading treks and nature explorations in Kudla.</p>
        <input type ="button"value="contact">
      
        </div>
        <div class="card">
        <h3>Sneha Nair</h3>
        <p>Photography guide helping travelers capture the beauty of Kudla.</p>
        <input type ="button"value="contact">
        </div>
        <div class="card">
        <h3>Vikram Joshi</h3>
        <p>Wildlife enthusiast and guide for Kudla's natural parks and reserves.</p>
        <input type ="button"value="contact">
        </div>
      
    </section>
  `;
}



function renderContact() {
  content.innerHTML = `
    <section class="section">
      <h2>Contact Us</h2>
      <form id="contactForm">
        <input type="text" placeholder="Your Name" required><br>
        <input type="email" placeholder="Your Email" required><br>
        <textarea placeholder="Your Message" required></textarea><br>
        <button type="submit">Send</button>
      </form>
    </section>
  `;

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Namma Kudla! We’ll get back to you soon.");
  });
}
