<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}

*:focus {
  outline: none !important;
}

@font-face {
  font-family: "basier_square_monobold";
  src: url("./fonts/basiersquaremono-bold-webfont.eot");
  src: url("./fonts/basiersquaremono-bold-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-bold-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-bold-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-bold-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monobold_italic";
  src: url("./fonts/basiersquaremono-bolditalic-webfont.eot");
  src: url("./fonts/basiersquaremono-bolditalic-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-bolditalic-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-bolditalic-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-bolditalic-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monomedium";
  src: url("./fonts/basiersquaremono-medium-webfont.eot");
  src: url("./fonts/basiersquaremono-medium-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-medium-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-medium-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-medium-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monoMdIt";
  src: url("./fonts/basiersquaremono-mediumitalic-webfont.eot");
  src: url("./fonts/basiersquaremono-mediumitalic-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-mediumitalic-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-mediumitalic-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-mediumitalic-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monoregular";
  src: url("./fonts/basiersquaremono-regular-webfont.eot");
  src: url("./fonts/basiersquaremono-regular-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-regular-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-regular-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-regular-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monoRgIt";
  src: url("./fonts/basiersquaremono-regularitalic-webfont.eot");
  src: url("./fonts/basiersquaremono-regularitalic-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-regularitalic-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-regularitalic-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-regularitalic-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monosemibold";
  src: url("./fonts/basiersquaremono-semibold-webfont.eot");
  src: url("./fonts/basiersquaremono-semibold-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-semibold-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-semibold-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-semibold-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "basier_square_monoSBdIt";
  src: url("./fonts/basiersquaremono-semibolditalic-webfont.eot");
  src: url("./fonts/basiersquaremono-semibolditalic-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/basiersquaremono-semibolditalic-webfont.woff2") format("woff2"),
    url("./fonts/basiersquaremono-semibolditalic-webfont.woff") format("woff"),
    url("./fonts/basiersquaremono-semibolditalic-webfont.ttf")
      format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "archialight";
  src: url("./fonts/archia-light-webfont.eot");
  src: url("./fonts/archia-light-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/archia-light-webfont.woff2") format("woff2"),
    url("./fonts/archia-light-webfont.woff") format("woff"),
    url("./fonts/archia-light-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "archiaregular";
  src: url("./fonts/archia-regular-webfont.eot");
  src: url("./fonts/archia-regular-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/archia-regular-webfont.woff2") format("woff2"),
    url("./fonts/archia-regular-webfont.woff") format("woff"),
    url("./fonts/archia-regular-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "archiamedium";
  src: url("./fonts/archia-medium-webfont.eot");
  src: url("./fonts/archia-medium-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/archia-medium-webfont.woff2") format("woff2"),
    url("./fonts/archia-medium-webfont.woff") format("woff"),
    url("./fonts/archia-medium-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "archiasemibold";
  src: url("./fonts/archia-semibold-webfont.eot");
  src: url("./fonts/archia-semibold-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./fonts/archia-semibold-webfont.woff2") format("woff2"),
    url("./fonts/archia-semibold-webfont.woff") format("woff"),
    url("./fonts/archia-semibold-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "archiabold";
  src: url("./fonts/archia-bold-webfont.eot");
  src: url("./fonts/archia-bold-webfont.eot?#iefix") format("embedded-opentype"),
    url("./fonts/archia-bold-webfont.woff2") format("woff2"),
    url("./fonts/archia-bold-webfont.woff") format("woff"),
    url("./fonts/archia-bold-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "archialight";
  height: 100vh;
  overflow: hidden;
  color: #464646;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}

body.game {
  background-color: #f3f6f7;
}

body.menu {
  background-color: black;
}

.text-center {
  text-align: center !important;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  margin-block-start: 0;
  margin-block-end: 0;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* BOOTSTRAP MODAL */
.modal-open {
  overflow: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: translate(0, -50px);
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  -webkit-transform: none;
  transform: none;
}

.modal.modal-static .modal-dialog {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: -ms-flexbox;
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-footer,
.modal-dialog-scrollable .modal-header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}
.modal-dialog-centered.modal-dialog-scrollable {
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}
.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}
.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}
.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}
.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-footer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }
  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
</style>
