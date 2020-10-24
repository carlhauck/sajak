<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
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
</style>
