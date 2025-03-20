// Function to add the music button after the geoButton
// Function to add the music button after the geoButton

function setTextInReplyBox(text) {
    // Find the contenteditable area
    const contentEditable = document.querySelector('.public-DraftEditor-content');
    if (!contentEditable) {
        console.log('Contenteditable area not found');
        return;
    }

    // Find the div that holds the content
    const dataContents = contentEditable.querySelector('div[data-contents="true"]');
    if (!dataContents) {
        console.log('Data contents div not found');
        return;
    }

    // Clear existing content (e.g., <br> or previous text)
    dataContents.innerHTML = '';

    // Create a new block to hold the text
    const blockDiv = document.createElement('div');
    blockDiv.setAttribute('data-block', 'true');
    blockDiv.setAttribute('data-editor', contentEditable.getAttribute('data-testid')?.split('_')[1] || '0'); // Reuse existing editor ID if available
    blockDiv.setAttribute('data-offset-key', '0-0-0');
    blockDiv.className = 'public-DraftStyleDefault-block public-DraftStyleDefault-ltr';

    // Create a span for the text
    const span = document.createElement('span');
    span.setAttribute('data-text', 'true');
    span.textContent = text;

    // Nest the span properly
    const innerSpan = document.createElement('span');
    innerSpan.setAttribute('data-offset-key', '0-0-0');
    innerSpan.appendChild(span);
    blockDiv.appendChild(innerSpan);

    // Add the block to the content area
    dataContents.appendChild(blockDiv);

    // Simulate user input to update Draft.js state
    const inputEvent = new Event('input', { bubbles: true });
    contentEditable.dispatchEvent(inputEvent);

    // Optionally, set focus to the editor to mimic user interaction
    contentEditable.focus();

    // Simulate a composition event to ensure state persistence
    const compositionEnd = new Event('compositionend', { bubbles: true });
    compositionEnd.data = text;
    contentEditable.dispatchEvent(compositionEnd);
}


function addMusicButton(tablist, geoButton) {
    // Find the geoButton's parent container
    const geoButtonContainer = geoButton.closest('div[role="presentation"]');
    if (!geoButtonContainer) {
        console.log('Geo button container not found');
        return;
    }

    const placeholder_array = [
        {
            Song: "Billie Jean",
            Artist: "Michael Jackson",
            XUrl: "https://x.com/Morpheus_market/status/1898267996813947371/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1898267966824730625/pu/img/bzDi0vVdRKYi1MI7.jpg"
        },
        {
            Song: "Interstellar",
            Artist: "Hans Zimmer",
            XUrl: "https://x.com/Morpheus_market/status/1897552265726038284/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1897552219957764096/pu/img/1dSoBSmdiJ9e5ziJ.jpg"
        },
        {
            Song: "Evil J0rdan",
            Artist: "Playboi Carti",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1902039472629600522/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1902039435635732480/pu/img/0y9USwzzhpPrxgjN.jpg"
        },
        {
            Song: "Dancing Queen",
            Artist: "Abba",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901773962360578235/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901773759515684864/pu/img/RhQUXRTx-2hUdRC8.jpg"
        },
        {
            Song: "Anxiety",
            Artist: "Doechii",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901710193274081628/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901709503969492992/pu/img/trGD5A1aoXVlMmcW.jpg"
        },
        {
            Song: "Main Theme",
            Artist: "GTA:SA",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901688345454891506/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901687531294380032/pu/img/Cxxixni1ZYPP1KyT.jpg"
        },
        {
            Song: "Where Is My Mind?",
            Artist: "Pixies",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901621540505936210/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901620932176707584/pu/img/pNNpwWwwKe5uIx3s.jpg"
        },
        {
            Song: "Old Town Road",
            Artist: "Lil Nas X",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901330265768947752/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901329770702409728/pu/img/SPVm_pLBWkHrMehV.jpg"
        },
        {
            Song: "Bohemian Rhapsody",
            Artist: "Queen",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1901272908774674457/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901271348238024704/pu/img/b4QE7ODVXnmYGupt.jpg"
        },
        {
            Song: "Sweet Dreams",
            Artist: "Eurithmics",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1899908076590821884/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1899907940452081665/pu/img/606bAt4Tr9SYIhk5.jpg"
        },
        {
            Song: "Shadows",
            Artist: "Juice Wrld",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1898449993599791245/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1898449813844242432/pu/img/0vMk2uVXF4CfgTzm.jpg"
        },
        {
            Song: "Rockstar",
            Artist: "Post Malone",
            XUrl: "https://x.com/prodbyidieasu/status/1899904229713535395/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1899903435857604609/pu/img/wGy5qwIQWfmJv_ek.jpg"
        },
        {
            Song: "X0 Tour Lif3",
            Artist: "Lil Uzi Vert",
            XUrl: "https://x.com/prodbyidieasu/status/1899215253432414395/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1899213230574039040/pu/img/52rlLw-uDRnJEMUO.jpg"
        },
        {
            Song: "Nothing Breaks Like A Heart",
            Artist: "Mark Ronson",
            XUrl: "https://x.com/Morpheus_market/status/1902251579698290706/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1902251539152195584/pu/img/_tqVa7HrwkGz83u2.jpg"
        },
        {
            Song: "Toxic",
            Artist: "Britney Spears",
            XUrl: "https://x.com/Morpheus_market/status/1901885420952006977/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1901885329445142528/pu/img/NUx7aDsSIuR8tSmy.jpg"
        },
        {
            Song: "Bread",
            Artist: "Bread",
            XUrl: "https://x.com/Morpheus_market/status/1899353548359454799/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1899353406877118464/pu/img/fXu_q9Kr6EH9TPkH.jpg"
        },
        {
            Song: "Lalala",
            Artist: "Naughty Boy",
            XUrl: "https://x.com/Morpheus_market/status/1897933844856132008/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1897933773716496384/pu/img/3luzK3w_cZs6KuUw.jpg"
        },
        {
            Song: "i like the way you kiss me",
            Artist: "Artemas",
            XUrl: "https://x.com/Morpheus_market/status/1896836908317298755/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1896836860946558976/pu/img/Deb7x-dR5v0_p7I-.jpg"
        },
        {
            Song: "Empire Theme",
            Artist: "Star Wars",
            XUrl: "https://x.com/Morpheus_market/status/1896114764587417860/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1896114733134032896/pu/img/E883ktF3qQ5AgITq.jpg"
        },
        {
            Song: "APT.",
            Artist: "Rose",
            XUrl: "https://x.com/Morpheus_market/status/1895408148212773366/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1895408101886435328/pu/img/XrPZvEb7w-dKuNCL.jpg"
        },
        {
            Song: "Dance Monkey",
            Artist: "Tones & I",
            XUrl: "https://x.com/Morpheus_market/status/1895050484131443011/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1895050450648330240/pu/img/Guz5kg4ofuAmNtOk.jpg"
        },
        {
            Song: "Die With A Smile",
            Artist: "Bruno Mars",
            XUrl: "https://x.com/Morpheus_market/status/1894699159543824861/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1894699084818055168/pu/img/TETrD8XXltu1A6tT.jpg"
        },
        {
            Song: "luther",
            Artist: "Kendrick Lamar",
            XUrl: "https://x.com/Morpheus_market/status/1894308858362765638/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1894308840054702080/pu/img/gCFtztnal2vhXDJP.jpg"
        },
        {
            Song: "PPAP",
            Artist: "PPAP",
            XUrl: "https://x.com/Morpheus_market/status/1893966278940852438/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1893966214264733698/pu/img/_6Xsy2w360EgB8pq.jpg"
        },
        {
            Song: "Havana",
            Artist: "Camilla Cabello",
            XUrl: "https://x.com/Morpheus_market/status/1893601500963668153/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1893601457108054016/pu/img/P_3V3KyB1q-sJ5Uq.jpg"
        },
        {
            Song: "Not Like Us",
            Artist: "Kendrick Lamar",
            XUrl: "https://x.com/Morpheus_market/status/1892878506494669297/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1892878469035425793/pu/img/qzaXt_w-YkGjy8kM.jpg"
        },
        {
            Song: "Cheap Thrills",
            Artist: "Sia",
            XUrl: "https://x.com/Morpheus_market/status/1892507440878330140/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1892507315548385280/pu/img/z-z4M3deHSImT3Eb.jpg"
        },
        {
            Song: "Too Sweet",
            Artist: "Hozier",
            XUrl: "https://x.com/Morpheus_market/status/1892145161829769644/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1892145126681579521/pu/img/-Ccg5az2FlxC_2wa.jpg"
        },
        {
            Song: "I Will Always Love You",
            Artist: "Whitney Houston",
            XUrl: "https://x.com/Morpheus_market/status/1891783657846608033/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1891783631036628992/pu/img/-lDH1E9RNIZTWa7e.jpg"
        },
        {
            Song: "Scatman",
            Artist: "Scatman John",
            XUrl: "https://x.com/Morpheus_market/status/1891425056217010211/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1891425037317439488/pu/img/b44CtbKy52Ougjkx.jpg"
        },
        {
            Song: "Zelda Theme",
            Artist: "Zelda",
            XUrl: "https://x.com/Morpheus_market/status/1891067955879792683/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1891067922497384448/pu/img/biA8gSM_NsuzoYTq.jpg"
        },
        {
            Song: "Shake It",
            Artist: "Metro Station",
            XUrl: "https://x.com/Morpheus_market/status/1890358290560815287/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1890358198902652928/pu/img/_S-cAIRWwDd43e1b.jpg"
        },
        {
            Song: "Main Theme",
            Artist: "Pokemon",
            XUrl: "https://x.com/Morpheus_market/status/1889988837503615293/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1889988787389792256/pu/img/AWzarx3zjAm51AVU.jpg"
        },
        {
            Song: "Take On Me",
            Artist: "a-ha",
            XUrl: "https://x.com/Morpheus_market/status/1889233301946216904/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1889233253611040768/pu/img/RGtlVdT9LndPWDfi.jpg"
        },
        {
            Song: "Sugar",
            Artist: "Maroon 5",
            XUrl: "https://x.com/Morpheus_market/status/1888909057001472335/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1888908742546042880/pu/img/hEV22AGc9Z-EGTgQ.jpg"
        },
        {
            Song: "Hello",
            Artist: "Adele",
            XUrl: "https://x.com/Morpheus_market/status/1887890296131740072/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1887890256407490560/pu/img/70AGWinK7_WBNp9t.jpg"
        },
        {
            Song: "Stronger",
            Artist: "Kanye West",
            XUrl: "https://x.com/OIIAOIIA_COIN_/status/1902474186679054634/video/1",
            ImageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1902473838954164225/pu/img/pMbzyrU-8uqJJrtS.jpg"
        }

    ];

    // Create a new button container
    const newButtonContainer = document.createElement('div');
    newButtonContainer.setAttribute('role', 'presentation');
    newButtonContainer.className = 'css-175oi2r r-14tvyh0 r-cpa5s6';

    // Create the new button
    const newButton = document.createElement('button');
    newButton.setAttribute('aria-label', 'Add music videos');
    newButton.setAttribute('role', 'button');
    newButton.setAttribute('data-music-button', 'true');
    newButton.className = 'css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-2yi16 r-1qi8awa r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l';
    newButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    newButton.style.borderColor = 'rgba(0, 0, 0, 0)';

    // Add an icon (GIF image)
    const iconDiv = document.createElement('div');
    iconDiv.className = 'css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci';
    iconDiv.style.color = 'rgb(29, 155, 240)';

    const img = document.createElement('img');
    img.src = 'http://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTR3ZW82NGxtN2E4eDN4ZmlkcXVwNXMyc2NjMXptM3owNWtxamJlOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ztisqLhP99tVSHG136/giphy.gif';
    img.style.width = '25px';
    img.style.height = '25px';

    iconDiv.appendChild(img);
    newButton.appendChild(iconDiv);
    newButtonContainer.appendChild(newButton);

    // Insert the new button after the geoButton container
    geoButtonContainer.parentNode.insertBefore(newButtonContainer, geoButtonContainer.nextSibling);

    // Create the centered <div> container with fixed viewport size
    const musicContainer = document.createElement('div');
    musicContainer.style.position = 'fixed';
    musicContainer.style.top = '50%';
    musicContainer.style.left = '50%';
    musicContainer.style.transform = 'translate(-50%, -50%)';
    musicContainer.style.width = '75vw'; // 75% of viewport width
    musicContainer.style.height = '75vh'; // 75% of viewport height
    musicContainer.style.backgroundColor = 'white';
    musicContainer.style.padding = '20px';
    musicContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    musicContainer.style.zIndex = '1000';
    musicContainer.style.display = 'none';
    musicContainer.style.boxSizing = 'border-box'; // Ensure padding doesn't increase size

    // Create a scrollable content area
    const contentArea = document.createElement('div');
    contentArea.style.maxHeight = 'calc(75vh - 80px)'; // Adjust for padding and search bar/close button height
    contentArea.style.overflowY = 'auto'; // Enable vertical scrolling
    contentArea.style.paddingBottom = '10px'; // Space at the bottom

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'static'; // Remove absolute positioning
    closeButton.style.width = '25px';
    closeButton.style.height = '25px';
    closeButton.style.lineHeight = '25px'; // Center the X vertically
    closeButton.style.borderRadius = '50%'; // Circular button
    closeButton.style.backgroundColor = '#ff4d4d'; // Light red background
    closeButton.style.color = 'white'; // White X
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.marginRight = '10px'; // Space between button and search input
    closeButton.style.marginBottom = '10px';
    closeButton.style.transition = 'background-color 0.2s'; // Smooth hover effect
    closeButton.addEventListener('mouseover', () => {
        closeButton.style.backgroundColor = '#cc0000'; // Darker red on hover
    });
    closeButton.addEventListener('mouseout', () => {
        closeButton.style.backgroundColor = '#ff4d4d'; // Back to light red
    });

    // Function to toggle the music container
    const toggleMusicContainer = () => {
        musicContainer.style.display = musicContainer.style.display === 'none' ? 'block' : 'none';
    };

    // Function to close the music container
    const closeMusicContainer = () => {
        musicContainer.style.display = 'none';
    };

    // Add click event to the button with stopPropagation
    newButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMusicContainer();
    });

    // Add click event to close the container when clicking outside
    document.addEventListener('click', (event) => {
        if (musicContainer.style.display === 'block' &&
            !musicContainer.contains(event.target) &&
            !newButton.contains(event.target)) {
            closeMusicContainer();
        }
    });

    // Prevent clicks inside the music container from closing it
    musicContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Add click event to the close button
    closeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        closeMusicContainer();
    });

    // URL change detection
    let lastUrl = window.location.href;
    const checkUrlChange = () => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl && musicContainer.style.display === 'block') {
            closeMusicContainer();
            lastUrl = currentUrl;
        }
    };
    setInterval(checkUrlChange, 500);

    // **Add the search input**
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search by artist or song';
    searchInput.style.width = '100%';
    searchInput.style.padding = '5px';
    searchInput.style.marginBottom = '10px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '4px';

    // Append elements to musicContainer
    musicContainer.appendChild(closeButton);
    musicContainer.appendChild(searchInput);
    musicContainer.appendChild(contentArea);

    // Create song items and append to contentArea
    placeholder_array.forEach(item => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song-item';
        songDiv.style.cursor = 'pointer';
        songDiv.style.marginBottom = '10px';
        songDiv.style.display = 'flex';
        songDiv.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = item.ImageUrl;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.marginRight = '10px';


        const p = document.createElement('p');
        p.style.color = 'black';
        p.textContent = `${item.Artist} - ${item.Song}`;
        songDiv.appendChild(img);
        songDiv.appendChild(p);

        songDiv.addEventListener('click', () => {
            const contentEditable = document.querySelector('.public-DraftEditor-content');
            if (contentEditable) {
                contentEditable.focus();
                const selection = window.getSelection();
                selection.removeAllRanges();
                const range = document.createRange();
                range.selectNodeContents(contentEditable);
                range.collapse(false);
                selection.addRange(range);
                document.execCommand('insertText', false, item.XUrl);
                closeMusicContainer();
            } else {
                console.log('Contenteditable area not found');
            }
        });

        contentArea.appendChild(songDiv); // Append to contentArea instead of musicContainer
    });

    // **Add search functionality**
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        const queryParts = query.split(' ').filter(part => part.length > 0);
        const songItems = contentArea.querySelectorAll('.song-item'); // Update to contentArea
        songItems.forEach(songItem => {
            const p = songItem.querySelector('p');
            if (p) {
                const text = p.textContent.toLowerCase();
                const matches = queryParts.length === 0 || queryParts.every(part => text.includes(part));
                songItem.style.display = matches ? 'flex' : 'none';
            }
        });
    });

    // Append the container to the body
    document.body.appendChild(musicContainer);
}
// Function to check for existing tablists on page load
function checkExistingTablists() {
    const tablists = document.querySelectorAll('div[role="tablist"][data-testid="ScrollSnap-List"]');
    tablists.forEach(tablist => {
        const geoButton = tablist.querySelector('button[data-testid="geoButton"]');
        if (geoButton && !tablist.querySelector('button[data-music-button]')) {
            addMusicButton(tablist, geoButton);
        }
    });
}

// Initial check for existing tablists
checkExistingTablists();

// Set up MutationObserver to detect dynamically added tablists
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.addedNodes) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if the added node contains a geoButton
                    const geoButtons = node.querySelectorAll('button[data-testid="geoButton"]');
                    geoButtons.forEach(geoButton => {
                        const tablist = geoButton.closest('div[role="tablist"][data-testid="ScrollSnap-List"]');
                        if (tablist && !tablist.querySelector('button[data-music-button]')) {
                            addMusicButton(tablist, geoButton);
                        }
                    });
                }
            }
        }
    }
});

// Observe the entire document for DOM changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});