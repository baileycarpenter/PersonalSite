function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Contact Me</p>\r\n      <h1>Queries? Get In Touch!</h1>\r\n      <p class=\"lead\">Tell me about your project and requirements and lets see how I can turn your canvas into a master piece</p>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit(contactForm.value)\">\r\n    <div class=\"form-group\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputName\">Name</label>\r\n          <input class=\"form-control\" id=\"inputName\" placeholder=\"Enter name\" type=\"text\" [formControl]=\"contactForm.controls['name']\">\r\n          <div *ngIf=\"!contactForm.controls['name'].valid && contactForm.controls['name'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong> Please enter your full name</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputName\">Email</label>\r\n          <input class=\"form-control\" id=\"inputName\" placeholder=\"Enter email\" type=\"text\" [formControl]=\"contactForm.controls['email']\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">I'll never share your email with anyone else.</small>\r\n          <div *ngIf=\"!contactForm.controls['email'].valid && contactForm.controls['email'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong>not a valid email</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputMessage\">Message</label>\r\n          <textarea class=\"form-control\" id=\"inputMessage\" rows=\"10\" cols=\"100\" placeholder=\"Enter message\" [formControl]=\"contactForm.controls['message']\"></textarea>\r\n          <div *ngIf=\"!contactForm.controls['message'].valid && contactForm.controls['message'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong>Please enter a message</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center mt-2\" *ngIf=\"status == null\" id=\"button-block\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"form-buttons float-left\">\r\n            <button type=\"submit\" name=\"submit\" id=\"submit\" class=\"btn btn-lg btn-success\" [class]=\"'btn btn-lg btn-success' + getClass()\" [disabled]=\"!contactForm.valid\" >Send</button>\r\n            <button type=\"button\" (click)=\"clearForm()\" class=\"btn btn-lg btn-secondary\">Clear</button>\r\n          </div>\r\n          <div class=\"processing-svg float-right\" *ngIf=\"formIsProcessing == true\">\r\n            <img class=\" message-sending\" src=\"/assets/images/contact/Blocks(1).svg\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row justify-content-center post-message mt-2\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"alert alert-success\" *ngIf=\"status == 200\">\r\n        <strong>Sweet!</strong> Your message has been sent! I will get back to you ASAP :)\r\n      </div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"status != 200 && status != null\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        <strong>Dammit!</strong> Something went wrong, please try again later\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Frequently Asked Questions</p>\r\n      <h1>Got a Question? It may be here</h1>\r\n      <p class=\"lead\">If your question isn't listed here or you need a more specific answer please <a data-toggle=\"modal\" data-target=\"#modal-contact\"><strong>contact me</strong></a></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"question mb-5\">\r\n        <h3>What are your payment options?</h3>\r\n        <p>I am quite flexible with payment arrangements and open to options that suit you. Generally, I have found that 50% deposit at the commencement of the project and the remaining 50% when the project is completed and the contract has been signed off.</p>\r\n      </div>\r\n      <div class=\"question mb-3\">\r\n        <h3>Can I add changes to the requirements of the project once the contract has been signed?</h3>\r\n        <p>Yes! This is just the nature of the beast. This will involve a few easy steps:</p>\r\n        <ul>\r\n          <li>Assess the new requirements</li>\r\n          <li>Check whether modifications need to take place on the existing build</li>\r\n          <li>Rewrite the contract to fit the new requirements</li>\r\n          <li>Sign off the modified contract with you (the client)</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sub-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"sub-contents\">\r\n        <p class=\"intro slate\">Want to work together?</p>\r\n        <p class=\"statement slate\">I'm always looking forward to working with new people on unique projects and I would love to hear about yours. Please take a few minutes to tell me about it.</p>\r\n        <div class=\"footer-btn\">\r\n          <a data-toggle=\"modal\" data-target=\"#modal-contact\" class=\"btn btn-lg btn-primary\">Get in touch!</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer  class=\"bg-dark\">\r\n  <div id=\"contact\">\r\n    <div class=\"container\">\r\n      <div class=\"row pr-3 pl-3\">\r\n        <div id=\"main-contents\">\r\n          <div class=\"row justify-content-center mb-3\">\r\n            <div class=\"col-sm text-center\">\r\n              <p class=\"footer-header\">Made with a few headaches by Keil Carpenter</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-center text-center\">\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Resources</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" (click)=\"scrollToTop()\" [routerLink]=\"['/faq']\">FAQ</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://github.com/Blasphemien\" target=\"_blank\">Github</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://travis-ci.org/KeilCarpenter\" target=\"_blank\">TravisCI</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Ingredients</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://getbootstrap.com/docs/4.0/getting-started/introduction/\" target=\"_blank\">Bootstrap</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://developer.mozilla.org/bm/docs/Web/JavaScript\" target=\"_blank\">Javascript (Typescript)</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://angular.io/\" target=\"_blank\">Angular</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Contact</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://github.com/Blasphemien\" target=\"_blank\">Github</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"\" data-toggle=\"modal\" data-target=\"#modal-contact\" >Email</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n<!--john-brooks-->\r\n<div class=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"modal-contact\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-contact></app-contact>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand text-white\">Keil Carpenter</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/projects']\">Projects</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/faq']\">FAQ</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"nav ml-auto\">\r\n        <a class=\"nav-item nav-link fa-nav\" href=\"https://github.com/blasphemien\" target=\"_blank\">\r\n          <i class=\"fab fa-github\"></i>\r\n        </a>\r\n        <a class=\"nav-item nav-link fa-nav\" [routerLink]=\"['/contact']\">\r\n          <i class=\"fas fa-at\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid py-6\">\r\n  <div class=\"container page-container position-relative\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-center text-md-left align-self-center\">\r\n        <h1 class=\"h0 text-white mb-3\">Bailey Carpenter, Building Beautiful Software</h1>\r\n        <p class=\"text-lead mb-4\">.NET and front end javascript developer focused on producing clean, reusable and testable code.</p>\r\n        <div class=\"d-flex flex-column flex-md-row lead mb-3\">\r\n          <button class=\"btn btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#modal-contact\">Questions? Get in touch!</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img id=\"home-svg\" src=\"../../assets/images/home/launch.svg\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-stack></app-stack>\r\n\r\n<!--contact modal-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"modal-contact\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-contact></app-contact>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Projects</p>\r\n      <h1>The Sample Room</h1>\r\n      <p class=\"lead\">Check out a few samples of my work</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>ChecksumVerifier</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/ChecksumVerifier\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">.NET WPF C#</h6>\r\n          <p class=\"card-text\">Calculates SHA256, SHA1 and MD5 hashes. This is still in active development but main functionality is complete.</p>\r\n          <ul>\r\n            <li>Drag and drop files</li>\r\n            <li>Selective hashes</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/ChecksumVerifier\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"card-title\">\r\n                <h3>John Brooks Engineering</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Java, MySQL</h6>\r\n          <p class=\"card-text\">\r\n          <p><strong>Third year internship</strong> Java application to automate the process for selecting the correct\r\n            sized couplings to connect a gear box to a specific conveyor belt motor based on factors such as torque\r\n            (the amount of force needed to move an object), speed, friction and weight. Data for this application was\r\n            stored on a local MySQL database which connected to the Java client which was made to be used cross-platform.</p>\r\n\r\n          <p>The design analysis and techniques of the project included UML using Visual Paradigm to layout the DB entities\r\n            before they were put into development, the Software Development Life Cycle methodology, unit testing in jUnit,\r\n            Agile project management using SCRUM to manage development phases as well as documentation which had to be signed off by the client.</p>\r\n          <ul>\r\n            <li>Static table on GUI to guide the user of the boundaries between the different ratios of tourqe, speed and\r\n              friction of a motor and gearbox</li>\r\n            <li>Calculations are stored in a centralized MySQL DB</li>\r\n            <li>User has the option to make print outs of past calculations for review</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"../../assets/images/projects/johnbrooks/Poster.jpg\" target=\"_blank\" class=\"card-link\">Spec sheet</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>StarWarsCharacterNames (npm pkg & JS Library)</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/StarWarsCharacterNames\" target=\"_blank\">&nbsp;\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n                <a href=\"https://www.npmjs.com/package/starwars-character-names\" target=\"_blank\">\r\n                  <i class=\"fab fa-npm fa-2x\"></i>&nbsp;\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Javascript</h6>\r\n          <p class=\"card-text\">\r\n            starwars-character-names is a JS library published to npm. Its purpose is to provide the user an easy API for getting random names of starwars characters</p>\r\n          <h5>Build tools</h5>\r\n          <ul>\r\n            <li>Testing: mocha, chai</li>\r\n            <li>Release: semantic-release & commitizen</li>\r\n            <li>Build: Webpack</li>\r\n            <li>Intergration: Travis CI</li>\r\n          </ul>\r\n          <h5>Install</h5>\r\n          <div class=\"code-block\">\r\n           <pre class=\"pre-scrollable\"><code>\r\nnpm install --save starwars-character-names\r\n           </code></pre>\r\n          </div>\r\n          <h5>Usage</h5>\r\n          <div class=\"code-block\">\r\n           <pre class=\"pre-scrollable\"><code>\r\n// require module\r\nvar starWarsNames = require('starwars-character-names');\r\n\r\n// returns an array of all names\r\nvar allNames = starWarsNames.filter.all;\r\n\r\n// returns single random name\r\nvar randomName = starWarsNames.filter.random();\r\n\r\n// returns an array of n number of names\r\nvar fourNames = starWarsNames.filter.random(number);\r\n\r\n// returns array of names with the first name beginning with user defined char\r\nvar firstNamesByChar = starWarsNames.filter.byFirstCharOfFirstName(char);\r\n\r\n// returns array of names with the second name beginning with user defined char\r\nvar secondNamesByChar = starWarsNames.filter.byFirstCharOfSecondName(char);\r\n           </code></pre>\r\n          </div>\r\n          <p></p>\r\n          <a class=\"card-link\" href=\"https://github.com/Blasphemien/StarWarsCharacterNames\" target=\"_blank\">Github</a>\r\n          <a class=\"card-link\" href=\"https://www.npmjs.com/package/starwars-character-names\" target=\"_blank\">npm</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Messenger</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Messenger\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Angular, Node, Express, MongoDB</h6>\r\n          <p class=\"card-text\">A messaging app in Node, Angular and MongoDB which allows users to sign up for an account and begin instant messaging on the public fourm.</p>\r\n          <ul>\r\n            <li>Credentials hashed and salted (SHA)</li>\r\n            <li>Web Tokens to validate auth</li>\r\n            <li>Lazy loading of component modules</li>\r\n          </ul>\r\n          <p></p>\r\n          <a class=\"card-link\" href=\"https://github.com/Blasphemien/Messenger\" target=\"_blank\">Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Responsive Recipe Book</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/RecipeBook\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Angular, Node, Express, MongoDB</h6>\r\n          <p class=\"card-text\">A responsive and scalable recipe book that allows users to create and store their own recipes for future use.</p>\r\n          <ul>\r\n            <li>CRUD ops from client to Firebase DB</li>\r\n          </ul>\r\n          <a href=\"https://github.com/Blasphemien/RecipeBook\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Tasky</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Tasky\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Electron</h6>\r\n          <p class=\"card-text\">Cross platform task manager for Windows, OSX and Linux</p>\r\n          <ul>\r\n            <li>No thread throtteling when app is in background mode</li>\r\n            <li>Change default timeout values for each task</li>\r\n            <li>Cross platform (Windows, OSX, iOS and linux)</li>\r\n            <li>Activate/deactivate tasks</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/Tasky\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Monopoly</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Monopoly\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">C#</h6>\r\n          <p class=\"card-text\">Console based version of the board game Monopoly</p>\r\n          <ul>\r\n            <li>Conduct unit tests on all classes in monopoly game using nUnit framework and produce average of 75% code coverage for overall codebase</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/Monopoly\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Battleships</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  href=\"https://github.com/Blasphemien/BattleShips\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">C#</h6>\r\n          <p class=\"card-text\">.NET Windows Forms version of the game Battleships</p>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/BattleShips\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStackStackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Technologies</p>\r\n      <h1>The Toolbox</h1>\r\n      <p class=\"lead\">All the ingredients that make up web and software applications, backed by unit testing and continuous integration</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row align-items-end\">\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/html.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>HTML</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/css.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>CSS</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/js.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Javascript</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/typescript.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Typescript</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/CSharp.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>C#</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/angular.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Angular</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/node.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Node</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/express.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Express</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/bootstrap.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Bootstrap</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/git.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Git</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/github.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Github</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/npm.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>NPM</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/travis-ci.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Travis CI</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/jasmine.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Jasmine</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/karma.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Karma</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/webstorm.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Webstorm</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./faq/faq.component */
    "./src/app/faq/faq.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _stack_stack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./stack/stack.component */
    "./src/app/stack/stack.component.ts");
    /* harmony import */


    var _contact_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contact/validation.service */
    "./src/app/contact/validation.service.ts");
    /* harmony import */


    var _contact_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./contact/contact.service */
    "./src/app/contact/contact.service.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _stack_stack_component__WEBPACK_IMPORTED_MODULE_10__["StackComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _app_routes__WEBPACK_IMPORTED_MODULE_13__["globalRoutes"]],
      providers: [_contact_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"], _contact_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: globalRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "globalRoutes", function () {
      return globalRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _stack_stack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stack/stack.component */
    "./src/app/stack/stack.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faq/faq.component */
    "./src/app/faq/faq.component.ts");

    var appRoutes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'stack',
      component: _stack_stack_component__WEBPACK_IMPORTED_MODULE_3__["StackComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'faq',
      component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"]
    }];

    var globalRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\r\n  color: white !important;\r\n}\r\n\r\nh3 {\r\n  font-family: geforce-light, sans-serif;\r\n  color: #76b900;\r\n}\r\n\r\n.message-sending{\r\n  height: 36.5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1mYW1pbHk6IGdlZm9yY2UtbGlnaHQsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3NmI5MDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNlbmRpbmd7XHJcbiAgaGVpZ2h0OiAzNi41cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./validation.service */
    "./src/app/contact/validation.service.ts");
    /* harmony import */


    var _contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact.service */
    "./src/app/contact/contact.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(router, formBuilder, validationService, contactService) {
        _classCallCheck(this, ContactComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.contactService = contactService;
        this.createForm();
      }

      _createClass(ContactComponent, [{
        key: "clearForm",
        value: function clearForm() {
          this.createForm();
        }
      }, {
        key: "getClass",
        value: function getClass() {
          if (!this.contactForm.valid) {
            return 'disabled';
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.status = null;
          this.formIsProcessing = false;
          this.contactForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validationService.namevalidator])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validationService.emailValidator])],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(message) {
          var _this = this;

          if (this.contactForm.valid) {
            this.formIsProcessing = true;
            this.contactService.sendEmail(message).subscribe(function (data) {
              _this.handleResponse(data);
            }, function (err) {
              _this.handleError(err);
            });
          } else {
            console.log('form is invalid');
          }
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          console.log('An error occurred: ', err);
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.data = data;
          this.status = data.status;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]
      }, {
        type: _contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"], _contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])], ContactComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.service.ts":
  /*!********************************************!*\
    !*** ./src/app/contact/contact.service.ts ***!
    \********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppContactContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.API_ROOT_URL = 'https://keilcarpenter-portfolio-api.herokuapp.com/api';
      }

      _createClass(ContactService, [{
        key: "sendEmail",
        value: function sendEmail(queryObject) {
          var body = JSON.stringify(queryObject);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post("".concat(this.API_ROOT_URL, "/sendemail"), body, {
            headers: headers,
            observe: 'response'
          });
        }
      }]);

      return ContactService;
    }();

    ContactService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ContactService);
    /***/
  },

  /***/
  "./src/app/contact/validation.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/contact/validation.service.ts ***!
    \***********************************************/

  /*! exports provided: ValidationService */

  /***/
  function srcAppContactValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
      return ValidationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValidationService =
    /*#__PURE__*/
    function () {
      function ValidationService() {
        _classCallCheck(this, ValidationService);
      }

      _createClass(ValidationService, [{
        key: "emailValidator",
        value: function emailValidator(control) {
          if (!control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return {
              invalidEmail: true
            };
          }
        }
      }, {
        key: "namevalidator",
        value: function namevalidator(control) {
          if (control.value.match(/^\s/)) {
            return {
              invalidName: true
            };
          }

          if (control.value.match(/[0-9]/)) {
            return {
              invalidName: true
            };
          }
        }
      }]);

      return ValidationService;
    }();
    /***/

  },

  /***/
  "./src/app/faq/faq.component.css":
  /*!***************************************!*\
    !*** ./src/app/faq/faq.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppFaqFaqComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/faq/faq.component.ts":
  /*!**************************************!*\
    !*** ./src/app/faq/faq.component.ts ***!
    \**************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqComponent =
    /*#__PURE__*/
    function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.css */
      "./src/app/faq/faq.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FaqComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sub-footer{\r\n  background-color: #FED766;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  padding: 0 0 50px;\r\n}\r\n\r\n.sub-contents{\r\n  width: 65.3333333333%;\r\n  margin-left: 17.3333333333%;\r\n}\r\n\r\n#main-contents{\r\n  width: 100%;\r\n  margin-left: 0;\r\n}\r\n\r\nul{\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n/*.footer-info{\r\n  color: #979ca0;\r\n}*/\r\n\r\n.footer-header{\r\n  color: #fff;\r\n}\r\n\r\n.text-small{\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.footer-link, .footer-item{\r\n  color: #979ca0;\r\n}\r\n\r\n.footer-link:hover{\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\np.intro {\r\n  font-size: 2.0rem;\r\n  margin: 6rem 0 1.8rem;\r\n  line-height: 1.4;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n.slate {\r\n  color: #252a30;\r\n}\r\n\r\np.statement {\r\n  font-size: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.footer-btn a.btn {\r\n  margin: 2.4rem 0 0;\r\n}\r\n\r\n.footer-btn{\r\n  position: relative;\r\n}\r\n\r\nfooter {\r\n  padding: 80px 0 50px;\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3ViLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVENzY2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDAgNTBweDtcclxufVxyXG5cclxuLnN1Yi1jb250ZW50c3tcclxuICB3aWR0aDogNjUuMzMzMzMzMzMzMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4jbWFpbi1jb250ZW50c3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qLmZvb3Rlci1pbmZve1xyXG4gIGNvbG9yOiAjOTc5Y2EwO1xyXG59Ki9cclxuXHJcbi5mb290ZXItaGVhZGVye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGV4dC1zbWFsbHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmssIC5mb290ZXItaXRlbXtcclxuICBjb2xvcjogIzk3OWNhMDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rOmhvdmVye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxucC5pbnRybyB7XHJcbiAgZm9udC1zaXplOiAyLjByZW07XHJcbiAgbWFyZ2luOiA2cmVtIDAgMS44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGF0ZSB7XHJcbiAgY29sb3I6ICMyNTJhMzA7XHJcbn1cclxuXHJcbnAuc3RhdGVtZW50IHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItYnRuIGEuYnRuIHtcclxuICBtYXJnaW46IDIuNHJlbSAwIDA7XHJcbn1cclxuXHJcbi5mb290ZXItYnRue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiA4MHB4IDAgNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fa-nav{\r\n  color: #979ca0;\r\n}\r\n\r\n.fa-nav:hover{\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1uYXZ7XHJcbiAgY29sb3I6ICM5NzljYTA7XHJcbn1cclxuXHJcbi5mYS1uYXY6aG92ZXJ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-lg {\r\n  max-width: 1012px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: #2b3137;\r\n}\r\n\r\n#home-svg{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.carosel-img{\r\n  width: 400px;\r\n  height: 400px;\r\n  background-color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1sZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTM3O1xyXG59XHJcblxyXG4jaG9tZS1zdmd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3NlbC1pbWd7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.css":
  /*!*************************************************!*\
    !*** ./src/app/projects/projects.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "pre {\r\n  padding-left: 15px;\r\n  overflow: auto;\r\n  font-size: 85%;\r\n  line-height: 1.45;\r\n  background-color: #f7f7f9;\r\n  border-radius: 3px;\r\n}\r\n\r\na{\r\n  color: grey;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover{\r\n  color: lightgrey;\r\n}\r\n\r\n@media (max-width: 769px) {\r\n  .card-title{\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gIC5jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/projects/projects.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/stack/stack.component.css":
  /*!*******************************************!*\
    !*** ./src/app/stack/stack.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStackStackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWNrL3N0YWNrLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/stack/stack.component.ts":
  /*!******************************************!*\
    !*** ./src/app/stack/stack.component.ts ***!
    \******************************************/

  /*! exports provided: StackComponent */

  /***/
  function srcAppStackStackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackComponent", function () {
      return StackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StackComponent =
    /*#__PURE__*/
    function () {
      function StackComponent() {
        _classCallCheck(this, StackComponent);
      }

      _createClass(StackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StackComponent;
    }();

    StackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stack',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stack.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stack/stack.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stack.component.css */
      "./src/app/stack/stack.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StackComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! M:\Keil\Other\Development\Webstorm Projects\PersonalSite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map