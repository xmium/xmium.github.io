/* =========================================================
   XMIUM
   INTERACTIVE LORE + CONTRACT + LINKS
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const CONTRACT_ADDRESS =
    "0x8edfeee0396c0CB7869d260bC237F6f25233Aac2";


/* =========================================================
   LINKS
   ---------------------------------------------------------
   Semua URL eksternal dikelola di sini.
   HTML menggunakan ID + href="#".
   ========================================================= */

const LINKS = {

    twitter:
        "https://x.com/XMIUMdotXYZ",

    github:
        "https://github.com/XMIUM-XYZ",

    rh:
        "https://xmium.xyz",

    ponsfam:
        "https://www.ponsfamily.com/launchpad/0x8edfeee0396c0CB7869d260bC237F6f25233Aac2",

    uniswap:
        "https://app.uniswap.org/swap?outputCurrency=0x8edfeee0396c0CB7869d260bC237F6f25233Aac2&chain=robinhood"

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
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initXmium
);


/* =========================================================
   MAIN
   ========================================================= */

function initXmium() {


    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

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

    const contractText =
        document.getElementById("contractText");

    const copyStatus =
        document.getElementById("copyStatus");

    const twitterLink =
        document.getElementById("twitterLink");

    const githubLink =
        document.getElementById("githubLink");

    const rhLink =
        document.getElementById("rhLink");

    const ponsfamLink =
        document.getElementById("ponsfamLink");

    const uniswapLink =
        document.getElementById("uniswapLink");


    /* =====================================================
       TYPE EFFECT STATE
       ===================================================== */

    let typingTimer =
        null;

    let typingSession =
        0;


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reduceMotionQuery =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    /* =====================================================
       ASSIGN EXTERNAL LINKS
       ===================================================== */

    if (twitterLink) {

        twitterLink.href =
            LINKS.twitter;

    }


    if (githubLink) {

        githubLink.href =
            LINKS.github;

    }


    if (rhLink) {

        rhLink.href =
            LINKS.rh;

    }


    if (ponsfamLink) {

        ponsfamLink.href =
            LINKS.ponsfam;

    }


    if (uniswapLink) {

        uniswapLink.href =
            LINKS.uniswap;

    }


    /* =====================================================
       CONTRACT ADDRESS
       ===================================================== */

    if (contractText) {

        contractText.textContent =
            CONTRACT_ADDRESS;

    }


    /* =====================================================
       APPEND CHARACTER
       ===================================================== */

    function appendCharacter(character) {

        if (!loreText) {
            return;
        }


        /*
           X / x receives the red X styling.
        */

        if (
            character === "X" ||
            character === "x"
        ) {

            const span =
                document.createElement(
                    "span"
                );


            span.className =
                "x-red";


            span.textContent =
                character;


            loreText.appendChild(
                span
            );


            return;
        }


        /*
           Normal character.
        */

        loreText.appendChild(
            document.createTextNode(
                character
            )
        );

    }


    /* =====================================================
       TYPE LORE
       ===================================================== */

    function typeLore(index) {

        const lore =
            LORE_DATA[index];


        if (
            !lore ||
            !loreText ||
            !loreChapter
        ) {
            return;
        }


        /* -------------------------------------------------
           Stop previous typing
        ------------------------------------------------- */

        clearTimeout(
            typingTimer
        );


        typingSession++;


        const currentSession =
            typingSession;


        /* -------------------------------------------------
           Update chapter
        ------------------------------------------------- */

        loreChapter.textContent =
            lore.chapter;


        /* -------------------------------------------------
           Clear previous text
        ------------------------------------------------- */

        loreText.innerHTML =
            "";


        /* -------------------------------------------------
           Show cursor
        ------------------------------------------------- */

        if (typingCursor) {

            typingCursor.classList.remove(
                "hidden"
            );

        }


        /* -------------------------------------------------
           Reduced motion
        ------------------------------------------------- */

        if (
            reduceMotionQuery.matches
        ) {

            for (
                const character
                of lore.text
            ) {

                appendCharacter(
                    character
                );

            }


            if (typingCursor) {

                typingCursor.classList.add(
                    "hidden"
                );

            }


            return;
        }


        /* -------------------------------------------------
           Typing speed
        ------------------------------------------------- */

        const speed =
            38;


        let position =
            0;


        /* -------------------------------------------------
           Type next character
        ------------------------------------------------- */

        function typeNextCharacter() {

            /*
               Stop if another Lore
               has been selected.
            */

            if (
                currentSession !==
                typingSession
            ) {

                return;

            }


            /*
               Finished.
            */

            if (
                position >=
                lore.text.length
            ) {

                if (typingCursor) {

                    typingCursor.classList.add(
                        "hidden"
                    );

                }

                return;
            }


            /*
               Add character.
            */

            appendCharacter(
                lore.text[position]
            );


            position++;


            /*
               Continue.
            */

            typingTimer =
                setTimeout(
                    typeNextCharacter,
                    speed
                );

        }


        /*
           Start immediately.
        */

        typeNextCharacter();

    }


    /* =====================================================
       ACTIVE LORE BUTTON
       ===================================================== */

    function setActiveLoreButton(
        activeIndex
    ) {

        loreButtons.forEach(
            (button, index) => {

                const active =
                    index === activeIndex;


                button.classList.toggle(
                    "active",
                    active
                );


                button.setAttribute(
                    "aria-selected",
                    active
                        ? "true"
                        : "false"
                );

            }
        );

    }


    /* =====================================================
       LORE BUTTON EVENTS
       ===================================================== */

    loreButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.lore
                        );


                    if (
                        Number.isNaN(index)
                    ) {

                        return;

                    }


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


    /* =====================================================
       COPY CONTRACT
       ===================================================== */

    async function copyContract() {

        if (!copyStatus) {
            return;
        }


        const originalText =
            copyStatus.textContent;


        let copied =
            false;


        /* -------------------------------------------------
           Clipboard API
        ------------------------------------------------- */

        try {

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                await navigator.clipboard.writeText(
                    CONTRACT_ADDRESS
                );


                copied =
                    true;

            }

        } catch (error) {

            copied =
                false;

        }


        /* -------------------------------------------------
           Fallback
        ------------------------------------------------- */

        if (!copied) {

            try {

                const textarea =
                    document.createElement(
                        "textarea"
                    );


                textarea.value =
                    CONTRACT_ADDRESS;


                textarea.setAttribute(
                    "readonly",
                    ""
                );


                textarea.style.position =
                    "fixed";


                textarea.style.left =
                    "-9999px";


                textarea.style.top =
                    "0";


                textarea.style.opacity =
                    "0";


                document.body.appendChild(
                    textarea
                );


                textarea.focus();

                textarea.select();


                copied =
                    document.execCommand(
                        "copy"
                    );


                textarea.remove();

            } catch (error) {

                copied =
                    false;

            }

        }


        /* -------------------------------------------------
           Feedback
        ------------------------------------------------- */

        if (copied) {

            copyStatus.textContent =
                "COPIED!";

        } else {

            copyStatus.textContent =
                "COPY FAILED";

        }


        setTimeout(
            () => {

                copyStatus.textContent =
                    originalText;

            },
            1800
        );

    }


    /* =====================================================
       CONTRACT BUTTON
       ===================================================== */

    if (contractButton) {

        contractButton.addEventListener(
            "click",
            copyContract
        );

    }


    /* =====================================================
       INITIAL LORE
       ===================================================== */

    setActiveLoreButton(
        0
    );


    typeLore(
        0
    );

}
