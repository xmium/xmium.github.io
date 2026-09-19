/* =========================================================
   XMIUM
   INTERACTIVE LORE + CONTRACT + LINKS
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const CONTRACT_ADDRESS =
  "0xYOUR_CONTRACT_ADDRESS";


const LINKS = {

  twitter:
    "https://x.com/YOUR_XMIUM",

  telegram:
    "https://t.me/YOUR_XMIUM",

  ponsfam:
    "https://YOUR-PONSFAM-LINK",

  uniswap:
    "https://app.uniswap.org/"

};


/* =========================================================
   XMIUM LORE
   ========================================================= */

const LORE_DATA = [

  {
    chapter: "LORE 01 · THE ORIGIN",

    text:
      "XMIUM — because premium was never enough."
  },

  {
    chapter: "LORE 02 · THE X",

    text:
      "The X is the power. MIUM is the system that carries it."
  },

  {
    chapter: "LORE 03 · THE MISSING X",

    text:
      "You can't spell XMIUM without X. That's the whole point."
  },

  {
    chapter: "LORE 04 · THE UPGRADE",

    text:
      "Premium was old news. XMIUM brought the X upgrade."
  },

  {
    chapter: "LORE 05 · THE ERA",

    text:
      "Welcome to the XMIUM era. The next chapter starts now."
  },

  {
    chapter: "LORE 06 · THE ATTITUDE",

    text:
      "Forget Premium. Go XMIUM."
  },

  {
    chapter: "LORE 07 · THE DIFFERENCE",

    text:
      "XMIUM is not Premium with a new name. The X changes everything."
  },

  {
    chapter: "LORE 08 · THE SOUND",

    text:
      "XMIUM sounds expensive. Costs nothing to say."
  },

  {
    chapter: "LORE 09 · THE POWER",

    text:
      "The X stands for everything. The MIUM makes it XMIUM."
  },

  {
    chapter: "LORE 10 · THE QUESTION",

    text:
      "Bro, are you XMIUM?"
  },

  {
    chapter: "LORE 11 · THE ANSWER",

    text:
      "That's not Premium. That's XMIUM."
  },

  {
    chapter: "LORE 12 · BEYOND",

    text:
      "XMIUM — Beyond Premium."
  },

  {
    chapter: "LORE 13 · THE NEXT LEVEL",

    text:
      "Why be Premium when you can be XMIUM?"
  },

  {
    chapter: "LORE 14 · THE UPGRADE",

    text:
      "XMIUM — Premium got an X upgrade."
  }

];


/* =========================================================
   DOM
   ========================================================= */

const loreText =
  document.getElementById("loreText");

const loreChapter =
  document.getElementById("loreChapter");

const typingCursor =
  document.getElementById("typingCursor");

const loreButtons =
  document.querySelectorAll(".lore-btn");

const contractButton =
  document.getElementById("contractButton");

const contractAddress =
  document.getElementById("contractAddress");

const copyState =
  document.getElementById("copyState");

const twitterLink =
  document.getElementById("twitterLink");

const telegramLink =
  document.getElementById("telegramLink");

const ponsfamLink =
  document.getElementById("ponsfamLink");

const uniswapLink =
  document.getElementById("uniswapLink");


/* =========================================================
   TYPE EFFECT STATE
   ========================================================= */

let typingTimer = null;

let typingSession = 0;


/* =========================================================
   CHECK REDUCED MOTION
   ========================================================= */

const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


/* =========================================================
   CREATE TEXT CHARACTER
   ========================================================= */

/*
  Every character is added individually.

  When the character is "X" or "x",
  it receives the red X styling.

  This means the typewriter effect and
  red X effect work together.
*/

function appendCharacter(character) {

  if (
    character === "X" ||
    character === "x"
  ) {

    const span =
      document.createElement("span");

    span.className =
      "x-red";

    span.textContent =
      character;

    loreText.appendChild(span);

    return;
  }


  const textNode =
    document.createTextNode(
      character
    );

  loreText.appendChild(
    textNode
  );
}


/* =========================================================
   TYPE LORE
   ========================================================= */

function typeLore(index) {

  /*
    Stop previous typing.
  */

  clearTimeout(
    typingTimer
  );


  /*
    Create a new session token.

    This prevents an old typing effect
    from continuing after the user clicks
    another Lore button.
  */

  typingSession++;

  const currentSession =
    typingSession;


  const lore =
    LORE_DATA[index];


  if (!lore) {
    return;
  }


  /*
    Update chapter.
  */

  loreChapter.textContent =
    lore.chapter;


  /*
    Clear previous text.
  */

  loreText.innerHTML =
    "";


  /*
    Show cursor.
  */

  typingCursor.classList.remove(
    "hidden"
  );


  /*
    Reduced motion:
    show everything immediately.
  */

  if (reduceMotion) {

    for (
      const character
      of lore.text
    ) {

      appendCharacter(
        character
      );
    }

    typingCursor.classList.add(
      "hidden"
    );

    return;
  }


  /*
    Type speed.

    35–42ms gives a comic/cartoon
    style without feeling painfully slow.
  */

  const speed =
    38;

  let position = 0;


  function typeNextCharacter() {

    /*
      Abort if another Lore has
      already been selected.
    */

    if (
      currentSession !==
      typingSession
    ) {
      return;
    }


    if (
      position >=
      lore.text.length
    ) {

      typingCursor.classList.add(
        "hidden"
      );

      return;
    }


    const character =
      lore.text[position];


    appendCharacter(
      character
    );


    position++;


    typingTimer =
      setTimeout(
        typeNextCharacter,
        speed
      );
  }


  typeNextCharacter();
}


/* =========================================================
   UPDATE ACTIVE BUTTON
   ========================================================= */

function setActiveLoreButton(
  activeIndex
) {

  loreButtons.forEach(
    (button, index) => {

      const isActive =
        index === activeIndex;


      button.classList.toggle(
        "active",
        isActive
      );


      button.setAttribute(
        "aria-selected",
        isActive
          ? "true"
          : "false"
      );

    }
  );
}


/* =========================================================
   LORE BUTTON EVENTS
   ========================================================= */

loreButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const index =
          Number(
            button.dataset.lore
          );


        setActiveLoreButton(
          index
        );


        typeLore(
          index
        );

      }
    );

  }
);


/* =========================================================
   CONTRACT ADDRESS
   ========================================================= */

contractAddress.textContent =
  CONTRACT_ADDRESS;


/* =========================================================
   COPY CONTRACT
   ========================================================= */

async function copyContract() {

  const originalText =
    copyState.textContent;


  try {

    await navigator.clipboard.writeText(
      CONTRACT_ADDRESS
    );

  } catch (error) {

    /*
      Fallback for browsers where
      Clipboard API is unavailable.
    */

    const textarea =
      document.createElement(
        "textarea"
      );

    textarea.value =
      CONTRACT_ADDRESS;

    textarea.style.position =
      "fixed";

    textarea.style.opacity =
      "0";

    document.body.appendChild(
      textarea
    );

    textarea.focus();

    textarea.select();

    try {

      document.execCommand(
        "copy"
      );

    } catch (fallbackError) {

      console.error(
        fallbackError
      );

    }

    textarea.remove();
  }


  copyState.textContent =
    "COPIED!";


  copyState.style.color =
    "#ffffff";


  setTimeout(
    () => {

      copyState.textContent =
        originalText;

      copyState.style.color =
        "";

    },
    1800
  );
}


contractButton.addEventListener(
  "click",
  copyContract
);


/* =========================================================
   SOCIAL / BUY LINKS
   ========================================================= */

twitterLink.href =
  LINKS.twitter;

telegramLink.href =
  LINKS.telegram;

ponsfamLink.href =
  LINKS.ponsfam;

uniswapLink.href =
  LINKS.uniswap;


/* =========================================================
   INITIAL LORE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setActiveLoreButton(
      0
    );

    typeLore(
      0
    );

  }
);