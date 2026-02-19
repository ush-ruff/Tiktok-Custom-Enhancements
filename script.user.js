// ==UserScript==
// @name         Tiktok - Custom Enhancements
// @namespace    Violentmonkey Scripts
// @match        https://*.tiktok.com/*
// @version      1.0.2
// @author       ushruff
// @description  Setup custom keyboard shortcuts for Tiktok
// @homepageURL  https://github.com/ush-ruff/Tiktok-Custom-Enhancements/
// @downloadURL  https://github.com/ush-ruff/Tiktok-Custom-Enhancements/raw/main/script.user.js
// @grant        none
// @license      GNU GPLv3
// @require      https://raw.githubusercontent.com/ush-ruff/Common/refs/heads/main/Userscript-Helper-Lib/helpersLib.js
// ==/UserScript==

// -----------------------
// CONFIGURABLE VARIABLES
// -----------------------
const KEYS = {
  "-": {
    action: () => clickElement(`[class*='DivPlayIconContainer'], [class*="DivVideoPlayerContainer"]`),
    label: "Play/Pause",
  },
  "*": {
    action: () => clickElement(`[class*='DivVoiceControlContainer'] > div, .TUXButton[aria-label="volume" i]`),
    label: "Mute",
  },
  "F": {
    action: () => clickElement(`[class*='DivRightControlsWrapper'] > div:nth-child(4)`),
    label: "Fullscreen",
  },
  "+": {
    action: () => clickElement(`[class*='CountDownAvatarContainer']`),
    label: "Dismiss Channel Autoload",
  },
  "Escape": {
    action: () => clickElement(`#verify-bar-close`),
    label: "Dismiss Captcha",
  },
  "ArrowLeft": {
    action: () => clickElement(`[class*='DivVideoControlContainer'] [class*='DivLeftArrow']:not([disabled])`, `[class*='DivRelatedMask'] [class*='DivArrow']:not([disabled]):nth-child(1)`),
    label: "Click left",
  },
  "ArrowRight": {
    action: () => clickElement(`[class*='DivVideoControlContainer'] [class*='DivRightArrow']:not([disabled])`, `[class*='DivRelatedMask'] [class*='DivArrow']:not([disabled]):nth-child(3)`),
    label: "Click right",
  },
  "Shift + ?": {
    action: () => showShortcutInfo(MODAL_ID),
    label: "Show shortcut help",
  }
}

const MODAL_ID = "shortcut-modal"

const { installKeyHandler, setupShortcutInfo, showShortcutInfo, clickElement } = window.ushruffUSKit


// -------------------------------------------
// Event Listeners
// -------------------------------------------
window.addEventListener("load", () => {
  installKeyHandler(KEYS)
  setupShortcutInfo(MODAL_ID, KEYS)
})
