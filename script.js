// Show burger Menu

let burgerMenuIcon = document.querySelector(".part-1-burger-menu");
let burgerMenu = document.querySelector(".burger-menu");
let closeMenuIcon = document.querySelector(".part-1-close-menu");
let responsiveMenu = document.querySelector(".responsive-nav-bar");

function showBurgerMenu() {
    burgerMenu.style.visibility = "visible";
    closeMenuIcon.style.visibility = "visible";
    burgerMenuIcon.style.visibility = "hidden";
};

// Hide burger Menu

function hideBurgerMenu() {
    burgerMenu.style.visibility = "hidden";
    closeMenuIcon.style.visibility = "hidden";
    burgerMenuIcon.style.visibility = "visible";
};

// Hide burger menu when screen size changes

window.addEventListener('resize', function() {
    hideBurgerMenu();
});


// Hide burger menu when mouse leaves the menu area

burgerMenu.addEventListener('mouseleave', function() {
    hideBurgerMenu();
});

// Show Search Menu
let searchMenu = document.querySelector(".search-menu");
let navMenu = document.querySelector(".nav-bar");

function showSearchMenu() {
    searchMenu.style.visibility = "visible";
    navMenu.style.visibility = "hidden";
    responsiveMenu.style.visibility = "hidden";
    burgerMenuIcon.style.visibility = "hidden";
}

// Hide Search Menu

function hideSearchMenu() {
    searchMenu.style.visibility = "hidden";
    navMenu.style.visibility = "visible";
    responsiveMenu.style.visibility = "visible";
    burgerMenuIcon.style.visibility = "visible";
}

// Hide search menu when screen size changes

window.addEventListener('resize', function() {
    hideSearchMenu();
});

// MENU Tab Functionality
// Get the elements from HTML

let tabClothingBtn = document.getElementById("tab-clothing");
let tabAccessoriesBtn = document.getElementById("tab-accessories");
let tabNewCollectionBtn = document.getElementById("tab-new-collection");
let tabSpecialDiscountsBtn = document.getElementById("tab-special-discounts");

let tabClothingMenu = document.querySelector(".menu-tab-main");
let tabAccessoriesMenu = document.getElementById("menu-tab-accessories");
let tabNewCollectionMenu = document.getElementById("menu-tab-new-collection");
let tabSpecialDiscountMenu = document.getElementById("menu-tab-special-discount");

function showClothingMenu() {
    tabClothingMenu.style.visibility = "visible";
    tabAccessoriesMenu.style.visibility = "hidden";
    tabNewCollectionMenu.style.visibility = "hidden";
    tabSpecialDiscountMenu.style.visibility = "hidden";
};

function showAccessoriesMenu() {
    tabAccessoriesMenu.style.visibility = "visible";
    tabClothingMenu.style.visibility = "hidden";
    tabNewCollectionMenu.style.visibility = "hidden";
    tabSpecialDiscountMenu.style.visibility = "hidden";
};

function showNewCollectionMenu() {
    tabNewCollectionMenu.style.visibility = "visible";
    tabClothingMenu.style.visibility = "hidden";
    tabAccessoriesMenu.style.visibility = "hidden";
    tabSpecialDiscountMenu.style.visibility = "hidden";
};

function showDiscountMenu() {
    tabSpecialDiscountMenu.style.visibility = "visible";
    tabNewCollectionMenu.style.visibility = "hidden";
    tabAccessoriesMenu.style.visibility = "hidden";
    tabClothingMenu.style.visibility = "hidden";
}

tabClothingMenu.addEventListener('mouseleave', function() {
    tabClothingMenu.style.visibility = "hidden";
});

tabAccessoriesMenu.addEventListener('mouseleave', function() {
    tabAccessoriesMenu.style.visibility = "hidden";
});

tabNewCollectionMenu.addEventListener('mouseleave', function() {
    tabNewCollectionMenu.style.visibility = "hidden";
});

tabSpecialDiscountMenu.addEventListener('mouseleave', function() {
    tabSpecialDiscountMenu.style.visibility = "hidden";
});

window.addEventListener('resize', function() {
    tabClothingMenu.style.visibility = "hidden";
});

window.addEventListener('resize', function() {
    tabAccessoriesMenu.style.visibility = "hidden";
});

window.addEventListener('resize', function() {
    tabNewCollectionMenu.style.visibility = "hidden";
});

window.addEventListener('resize', function() {
    tabSpecialDiscountMenu.style.visibility = "hidden";
});


// CLOTHING Menu Functionality
/*
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    let tabClothingBtn = document.querySelector(".tab-main-left-title");
    let tabShirtsBtn = document.getElementById("tab-shirts");
    let tabTshirtsBtn = document.getElementById("tab-t-shirts");
    let tabPolosBtn = document.getElementById("tab-polos");
    let tabTrousersBtn = document.getElementById("tab-trousers");
    let tabShortsBtn = document.getElementById("tab-shorts");
    let tabJeansBtn = document.getElementById("tab-jeans");
    let tabSweatersBtn = document.getElementById("tab-sweaters");
    let tabCoatsBtn = document.getElementById("tab-coats");

    let clothingCont = document.querySelector(".pic-pluS-text-1");
    let shirtsCont = document.querySelector(".pic-pluS-text-2");
    let tShirtsCont = document.querySelector(".pic-pluS-text-3");
    let polosCont = document.querySelector(".pic-pluS-text-4");
    let trousersCont = document.querySelector(".pic-pluS-text-5");
    let shortsCont = document.querySelector(".pic-pluS-text-6");
    let jeansCont = document.querySelector(".pic-pluS-text-7");
    let sweatersCont = document.querySelector(".pic-pluS-text-8");
    let coatsCont = document.querySelector(".pic-pluS-text-9");

    // Function to hide all clothing sections
    function hideAllSections() {
        clothingCont.style.display = "none";
        shirtsCont.style.display = "none";
        tShirtsCont.style.display = "none";
        polosCont.style.display = "none";
        trousersCont.style.display = "none";
        shortsCont.style.display = "none";
        jeansCont.style.display = "none";
        sweatersCont.style.display = "none";
        coatsCont.style.display = "none";
    }

    // Event listeners for each tab button
    tabClothingBtn.addEventListener("mouseover", function() {
        hideAllSections();
        clothingCont.style.display = "flex"; // Show clothing section
    });

    tabShirtsBtn.addEventListener("mouseover", function() {
        hideAllSections();
        shirtsCont.style.display = "flex"; // Show shirts section
    });

    tabTshirtsBtn.addEventListener("mouseover", function() {
        hideAllSections();
        tShirtsCont.style.display = "flex"; // Show t-shirts section
    });

    tabPolosBtn.addEventListener("mouseover", function() {
        hideAllSections();
        polosCont.style.display = "flex"; // Show polos section
    });

    tabTrousersBtn.addEventListener("mouseover", function() {
        hideAllSections();
        trousersCont.style.display = "flex"; // Show trousers section
    });

    tabShortsBtn.addEventListener("mouseover", function() {
        hideAllSections();
        shortsCont.style.display = "flex"; // Show shorts section
    });

    tabJeansBtn.addEventListener("mouseover", function() {
        hideAllSections();
        jeansCont.style.display = "flex"; // Show jeans section
    });

    tabSweatersBtn.addEventListener("mouseover", function() {
        hideAllSections();
        sweatersCont.style.display = "flex"; // Show sweaters section
    });

    tabCoatsBtn.addEventListener("mouseover", function() {
        hideAllSections();
        coatsCont.style.display = "flex"; // Show coats section
    });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    // Function to set up tab functionality for a specific section (either clothing or accessories)
    function setupTabFunctionality(section) {
        let tabMainLeft = section.querySelector(".menu-tab-main-left");
        let tabMainRight = section.querySelectorAll(".menu-tab-main-right > div");
        
        let tabButtons = tabMainLeft.querySelectorAll("ul li a");
        let tabTitle = tabMainLeft.querySelector(".tab-main-left-title");

        // Function to hide all sections
        function hideAllSections() {
            tabMainRight.forEach(function(content) {
                content.style.display = "none";
            });
        }

        // Event listeners for title hover
        tabTitle.addEventListener("mouseover", function() {
            hideAllSections();
            tabMainRight[0].style.display = "flex"; // Show first section (main category)
        });

        // Event listeners for each tab button hover
        tabButtons.forEach(function(button, index) {
            button.addEventListener("mouseover", function() {
                hideAllSections();
                tabMainRight[index + 1].style.display = "flex"; // Show corresponding section
            });
        });
    }

    // Set up for both clothing and accessories sections
    let sections = document.querySelectorAll(".menu-tab-main");
    sections.forEach(function(section) {
        setupTabFunctionality(section);
    });
});

// Burger Mobile Menu Functionality

// Select all instances of the mobile menu containers and other relevant elements
let burgerTabsMobile = document.querySelectorAll(".burger-menu-tab");
let mobileClothingMain = document.querySelectorAll(".mobile-clothing-main");
let mobileMenuHide = document.querySelector(".responsive-nav-bar");
let mobileCloseHide = document.querySelector(".part-1-close-menu");
let mobileBurgerMenu = document.querySelector(".burger-menu");
let backToMobileBurger = document.querySelectorAll(".mobile-img-arrow");

// Loop through each burger tab and add an event listener
burgerTabsMobile.forEach(function(burgerTab, index) {
    burgerTab.addEventListener('click', function() {
        // Make the corresponding mobile clothing section visible
        mobileClothingMain[index].style.visibility = "visible";
        mobileMenuHide.style.visibility = "hidden";
        mobileCloseHide.style.visibility = "hidden";
        mobileBurgerMenu.style.visibility = "hidden";
    });
});

// Loop through each back arrow and add an event listener to hide the corresponding section
backToMobileBurger.forEach(function(backArrow, index) {
    backArrow.addEventListener('click', function() {
        // Hide the corresponding mobile clothing section and show the main menu again
        mobileClothingMain[index].style.visibility = "hidden";
        mobileMenuHide.style.visibility = "visible";
        mobileCloseHide.style.visibility = "hidden";
        mobileBurgerMenu.style.visibility = "visible";
    });
});

// Loop through each mobile clothing section to hide on mouseleave
mobileClothingMain.forEach(function(clothingSection) {
    clothingSection.addEventListener('mouseleave', function() {
        clothingSection.style.visibility = "hidden";
        mobileMenuHide.style.visibility = "visible";
        mobileCloseHide.style.visibility = "hidden";
        mobileBurgerMenu.style.visibility = "visible";
    });
});

// Show / Hide Popup Signin Window
// 1. Get the elements from HTML

let signinIcon = document.getElementById("signIn-popUp");
let signinIconResponsive = document.getElementById("signin-icon-responsive");
let signinIconSearch = document.getElementById("signin-icon-search");
let popUpWindow = document.querySelector(".signin-popup-window");

// Show the popup - normal view
signinIcon.addEventListener('mouseover', function() {
    popUpWindow.style.visibility = "visible";
});

// Show the popup - responsive view
signinIconResponsive.addEventListener('mouseover', function() {
    popUpWindow.style.visibility = "visible";
});

// Show the popup - search view
signinIconSearch.addEventListener('mouseover', function() {
    popUpWindow.style.visibility = "visible";
});

// Hide the popup
popUpWindow.addEventListener('mouseleave', function() {
    popUpWindow.style.visibility = "hidden";
});

window.addEventListener('resize', function() {
    popUpWindow.style.visibility = "hidden";
});

// Signin Container Functionality

// A. Show / Hide email/password text as label of the inputs

let emailText = document.querySelector(".email-text-show-hide");
let passwordText = document.querySelector(".password-text-show-hide");

let emailInput = document.querySelector(".part-input-email");
let passwordInput = document.querySelector(".part-input-password");

let emailNotice = document.querySelector(".important-notice-show-hide-email");
let passwordNotice = document.querySelector(".important-notice-show-hide-password");

// Function to check if both fields are filled
function checkIfBothFieldsFilled() {
    if (emailInput.value !== "" && passwordInput.value !== "") {
        emailText.style.display = "none";
        passwordText.style.display = "none";
    }
}

// Event listener for email input
emailInput.addEventListener('click', function() {
    // If email input is empty, show the notice
    if (emailInput.value === "") {
        emailNotice.style.display = "block";
    } else {
        emailNotice.style.display = "none";
    }

    // Show email text and hide password text
    emailText.style.display = "block";
    emailInput.removeAttribute('placeholder');
    passwordText.style.display = "none";
    passwordInput.setAttribute('placeholder', 'Password');

    // Check if both fields are filled
    checkIfBothFieldsFilled();
});

// Function to check if both fields are filled
function checkIfBothFieldsFilled() {
    if (emailInput.value !== "" && passwordInput.value !== "") {
        emailText.style.display = "none";
        passwordText.style.display = "none";
        emailNotice.style.display = "none"; // Hide email notice
        passwordNotice.style.display = "none"; // Hide password notice
    }
}

// Event listener for email input
emailInput.addEventListener('click', function() {
    // If email input is empty, show the notice
    if (emailInput.value === "") {
        emailNotice.style.display = "block";
    } else {
        emailNotice.style.display = "none";
    }

    // Show email text and hide password text
    emailText.style.display = "block";
    emailInput.removeAttribute('placeholder');
    passwordText.style.display = "none";
    passwordInput.setAttribute('placeholder', 'Password');

    // Check if both fields are filled
    checkIfBothFieldsFilled();
});

// Event listener for password input
passwordInput.addEventListener('click', function() {
    // If password input is empty, show the notice
    if (passwordInput.value === "") {
        passwordNotice.style.display = "block";
    } else {
        passwordNotice.style.display = "none";
    }

    // Show password text and hide email text
    passwordText.style.display = "block";
    passwordInput.removeAttribute('placeholder');
    emailText.style.display = "none";
    emailInput.setAttribute('placeholder', 'E-mail');

    // Check if both fields are filled
    checkIfBothFieldsFilled();
});

// Additional event listeners for input changes to hide texts and notices dynamically
emailInput.addEventListener('input', function() {
    checkIfBothFieldsFilled();
});

passwordInput.addEventListener('input', function() {
    checkIfBothFieldsFilled();
});

// Show / hide password
let showPassword = document.querySelector(".part-input-icon-show");
let hidePassword = document.querySelector(".part-input-icon-hide");

let passwordField = document.querySelector(".part-input-password");

showPassword.addEventListener('click', function() {
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
    passwordField.type = "text";
});

hidePassword.addEventListener('click', function() {
    hidePassword.style.display = "none";
    showPassword.style.display = "block";
    passwordField.type = "password";
})


// Registration Container Functionality
// Email & Password Fields Functionality
let emailLabelShow = document.querySelector(".email-input-title");
let passwordLabelShow = document.querySelector(".password-input-title");
let phoneLabelShow = document.querySelector(".phone-entry-title");

let emailInputField = document.querySelector(".email-input-field");
let passwordInputField = document.querySelector(".password-input-field");
let phoneInputField = document.querySelector(".phone-entry-field");

let emailNotification = document.querySelector(".registration-email-notification");
let passwordNotification = document.querySelector(".registration-password-notification");
let phoneNotification = document.querySelector(".phone-notification");

// Initially hide labels and notifications
emailLabelShow.style.display = "none";
passwordLabelShow.style.display = "none";
phoneLabelShow.style.display = "none";

emailNotification.style.display = "none";
passwordNotification.style.display = "none";
phoneNotification.style.display = "none";

// Function to show/hide email label and notification
emailInputField.addEventListener('input', function() {
    if (emailInputField.value === "") {
        emailNotification.style.display = "block";
        emailLabelShow.style.display = "block";
    } else {
        emailNotification.style.display = "none";
        emailLabelShow.style.display = "none";
    }
});

// Function to show/hide password label and notification
passwordInputField.addEventListener('input', function() {
    if (passwordInputField.value === "") {
        passwordNotification.style.display = "block";
        passwordLabelShow.style.display = "block";
    } else {
        passwordNotification.style.display = "none";
        passwordLabelShow.style.display = "none";
    }
});

// Function to show/hide phone label and notification
phoneInputField.addEventListener('input', function() {
    if (phoneInputField.value === "") {
        phoneNotification.style.display = "block";
        phoneLabelShow.style.display = "block";
    } else {
        phoneNotification.style.display = "none";
        phoneLabelShow.style.display = "none";
    }
});

// Initial check for email, password, and phone fields
if (emailInputField.value === "") {
    emailNotification.style.display = "block";
    emailLabelShow.style.display = "block";
}

if (passwordInputField.value === "") {
    passwordNotification.style.display = "block";
    passwordLabelShow.style.display = "block";
};

if (phoneInputField.value === "") {
    phoneNotification.style.display = "block";
    phoneLabelShow.style.display = "block";
};

// Show / Hide Password in the registration form

let showPasswordEye = document.querySelector(".password-eye-show");
let hidePasswordEye = document.querySelector(".password-eye-hide");

hidePasswordEye.style.display = "none";

showPasswordEye.addEventListener('click', function() {
    showPasswordEye.style.display = "none";
    hidePasswordEye.style.display = "block";
    passwordInputField.type = "text";
});

hidePasswordEye.addEventListener('click', function() {
    hidePasswordEye.style.display = "none";
    showPasswordEye.style.display = "block";
    passwordInputField.type = "password";
});

console.log(showPasswordEye);
console.log(hidePasswordEye);


// Show / Hide Signin Container

// 1. Get the elements from HTML

let signinIconNormalView = document.getElementById("signIn-popUp");
let signinIconResponsiveView = document.getElementById("signin-icon-responsive");
let signinIconpopupBtn = document.querySelector(".popup-signin-CTA");

let signinContainer = document.querySelector(".signin-container");
let heroShotContainer = document.querySelector(".hero-shot");
let heroBannerContainer = document.querySelector(".hero-banner");

// 2. Add event listener for the icons to show the signin container

signinIconResponsiveView.addEventListener('click', function() {
    signinContainer.style.visibility = "visible";
    heroShotContainer.style.visibility = "hidden";
    heroBannerContainer.style.visibility = "hidden";
});

signinIconNormalView.addEventListener('click', function() {
    signinContainer.style.visibility = "visible";
    heroShotContainer.style.visibility = "hidden";
    heroBannerContainer.style.visibility = "hidden";
});

signinIconpopupBtn.addEventListener('click', function() {
    signinContainer.style.visibility = "visible";
    heroShotContainer.style.visibility = "hidden";
    heroBannerContainer.style.visibility = "hidden";
});

// Show / Hide Registration Container

let createAccBtn = document.querySelector(".button-new-account");
let registerBtnPopup = document.querySelector(".register-right");

let registrationContainer = document.querySelector(".registration-container");

let signinAlreadyBtn = document.querySelector(".register-footer-right");

createAccBtn.addEventListener('click', function() {
    registrationContainer.style.visibility = "visible";
    heroShotContainer.style.visibility = "hidden";
    heroBannerContainer.style.visibility = "hidden";
});

registerBtnPopup.addEventListener('click', function() {
    registrationContainer.style.visibility = "visible";
    heroShotContainer.style.visibility = "hidden";
    heroBannerContainer.style.visibility = "hidden";
});

signinAlreadyBtn.addEventListener('click', function() {
    signinContainer.style.visibility = "visible";
    registrationContainer.style.visibility = "hidden";
});


// Trending Container - Sizes Show-Hide

let imageTouchOne = document.getElementById("trending-img-1");
let imageTouchTwo = document.getElementById("trending-img-2");
let imageTouchThree = document.getElementById("trending-img-3");
let imageTouchFour = document.getElementById("trending-img-4");

let sizeBoxOne = document.getElementById("trending-size-box-1");
let sizeBoxTwo = document.getElementById("trending-size-box-2");
let sizeBoxThree = document.getElementById("trending-size-box-3");
let sizeBoxFour = document.getElementById("trending-size-box-4");

imageTouchOne.addEventListener('mouseover', function() {
    sizeBoxOne.style.visibility = "visible";
});

imageTouchOne.addEventListener('mouseleave', function() {
    sizeBoxOne.style.visibility = "hidden";
});

imageTouchTwo.addEventListener('mouseover', function() {
    sizeBoxTwo.style.visibility = "visible";
});

imageTouchTwo.addEventListener('mouseleave', function() {
    sizeBoxTwo.style.visibility = "hidden";
});

imageTouchThree.addEventListener('mouseover', function() {
    sizeBoxThree.style.visibility = "visible";
});

imageTouchThree.addEventListener('mouseleave', function() {
    sizeBoxThree.style.visibility = "hidden";
});

imageTouchFour.addEventListener('mouseover', function() {
    sizeBoxFour.style.visibility = "visible";
});

imageTouchFour.addEventListener('mouseleave', function() {
    sizeBoxFour.style.visibility = "hidden";
});

// Privacy Policy Show/Hide

let privacyBtn = document.querySelector(".privacy-policy-hover");
let privacyBox = document.querySelector(".privacy-policy-hidden-part");

privacyBox.style.display = "none";

privacyBtn.addEventListener('click', function() {
    privacyBox.style.display = "block";
});

// Subscription Functionality

let subEmailLabel = document.querySelector(".sub-email-label");
let subEmailInput = document.querySelector(".sub-email-input");
let subEmailNotification = document.querySelector(".sub-email-notification");
let subButtonCta = document.querySelector(".subscribe-CTA");
let msgTnxBox = document.querySelector(".sub-thanks-msg");
let subContainer = document.querySelector(".subscription-container");

subEmailLabel.style.display = "none";
subEmailNotification.style.display = "none";
msgTnxBox.style.display = "none";


subEmailInput.addEventListener('click', function() {
    subEmailLabel.style.display = "block";
});
document.addEventListener('click', function(event) {
    if (!subEmailInput.contains(event.target)) {
        subEmailLabel.style.display = "none";
    }
});

subButtonCta.addEventListener('click', function() {
    if(subEmailInput.value === "") {
        subEmailNotification.style.display = "block";
    } else {
        subEmailNotification.style.display = "none";
        msgTnxBox.style.display = "block";
        subContainer.style.display = "none";
    }
});

// Shopping Bag Show - Hide

let heroConShop = document.querySelector(".hero-shot");
let heroBannerShop = document.querySelector(".hero-banner");

let shopBtnLapTop = document.getElementById("shop-btn-laptop");
let shopBtnTablet = document.getElementById("shop-btn-tablet");

let shopEmptyBox = document.querySelector(".shopping-bag-empty-container");
let shopBtnCta = document.querySelector(".shopping-bag-CTA");

shopEmptyBox.style.display = "none"

shopBtnLapTop.addEventListener('click', function() {
    heroConShop.style.visibility = "hidden";
    heroBannerShop.style.visibility = "hidden";
    shopEmptyBox.style.display = "block";
});

shopBtnTablet.addEventListener('click', function() {
    heroConShop.style.visibility = "hidden";
    heroBannerShop.style.visibility = "hidden";
    shopEmptyBox.style.display = "block";
});

shopBtnCta.addEventListener('click', function() {
    heroConShop.style.visibility = "visible";
    heroBannerShop.style.visibility = "visible";
    shopEmptyBox.style.display = "none";
});

// Slideshow color change

// 1. Color Picker
let clickGreen = document.querySelector(".color-green");
let clickBlack = document.querySelector(".color-black");
let clickNavy = document.querySelector(".color-navy");
let clickBeige = document.querySelector(".color-beige");

// Color Popup
let colorPopup = document.querySelector(".shop-bag-color-number");

// 2. Color Name
let nameGreen = document.querySelector(".color-name-green");
let nameBlack = document.querySelector(".color-name-black");
let nameNavy = document.querySelector(".color-name-navy");
let nameBeige = document.querySelector(".color-name-beige");

// 3. Images Change
let imgGreenHalf = document.querySelector(".slideshow-left-img-1");
let imgGreenWhole = document.querySelector(".slideshow-left-img-2");

let imgBlackHalf = document.querySelector(".slideshow-left-img-3");
let imgBlackWhole = document.querySelector(".slideshow-left-img-4");

let imgNavyHalf = document.querySelector(".slideshow-left-img-5");
let imgNavyWhole = document.querySelector(".slideshow-left-img-6");

let imgBeigeHalf = document.querySelector(".slideshow-left-img-7");
let imgBeigeWhole = document.querySelector(".slideshow-left-img-8");

// 4. Size Picker
let sizeThreeSix = document.getElementById("size-pick-one");
let sizeThreeEight = document.getElementById("size-pick-two");
let sizeFourZero = document.getElementById("size-pick-three");
let sizeFourTwo = document.getElementById("size-pick-four");
let sizeFourFour = document.getElementById("size-pick-five");
let sizeFourSix = document.getElementById("size-pick-six");

// Size Popup
let sizePopup = document.querySelector(".shop-bag-size-number");

// 5. Add to bag btn Functionality
let addToBagBtn = document.querySelector(".CTA-add-to-bag");

addToBagBtn.addEventListener('click', function() {
    popupWindow.style.display = "block";
})

// 6. Size-guide notification Show-Hide
let sizeNoteShowHide = document.querySelector(".size-guide-notification");

// 7. Slideshow Container Hide-Show
let slideShowCon = document.querySelector(".slideshow-container");

slideShowCon.style.display = "none";

// 8. Choose a product to bag
let productToBag = document.getElementById("product-to-bag-1");

productToBag.addEventListener('click', function() {
    heroShotCont.style.display = "none";
    heroBannerCont.style.display = "none";
    slideShowCon.style.display = "flex";
})

// 9. Hero / Hero Banner Show-Hide
let heroShotCont = document.querySelector(".hero-shot");
let heroBannerCont = document.querySelector(".hero-banner");

// 10. Hide Color Name
nameBlack.style.display = "none";
nameNavy.style.display = "none";
nameBeige.style.display = "none";

// 11. Hide / Show Size Notification
sizeNoteShowHide.style.display = "none";

// 12. Material name
let materialNameslideShow = document.querySelector(".product-name");
let materialNamePopup = document.querySelector(".shop-name-material-name");

materialNamePopup.textContent = materialNameslideShow.textContent;

// 13. Hide / Show Popup Window
let popupWindow = document.querySelector(".shopping-bag-popup-window");

popupWindow.style.display = "none";

// 14. Remove BTN in Popup Window
let removeBtnPopup = document.querySelector(".shop-bag-left-part-remove");

removeBtnPopup.addEventListener('click', function() {
    popupWindow.style.display = "none"
});

// 15. Prices and discount
let oldPricePopup = document.querySelector(".shop-name-oldest-price")
let seasonalPricePopup = document.querySelector(".shop-footer-price-number");
let discountPopup = document.querySelector(".shop-footer-discount-number");
let totalPricePopup = document.querySelector(".shop-footer-total-number");

let seasonalPriceSlideShow = document.querySelector(".product-price-oldest"); 

oldPricePopup.textContent = seasonalPriceSlideShow.textContent;
seasonalPricePopup.textContent = seasonalPriceSlideShow.textContent;

let originalPrice = parseFloat(seasonalPriceSlideShow.textContent.replace(/[^0-9.-]+/g,""));
let discountPercentage = 62;
let newPrice = originalPrice * (1 - discountPercentage / 100);
totalPricePopup.textContent = `US$ ${newPrice.toFixed(2)}`;

let discountAmount = originalPrice - newPrice;
discountPopup.textContent = `US$ ${discountAmount.toFixed(2)}`;

// 16. GREEN CLICK
clickGreen.addEventListener('click', function() {
    nameGreen.style.display = "block";
    clickGreen.style.border = "1px solid black";
    imgGreenHalf.style.display = "block";
    imgGreenWhole.style.display = "block";
    updateColorPopup("Green");

    nameBlack.style.display = "none";
    clickBlack.style.border = "none";
    imgBlackHalf.style.display = "none";
    imgBlackWhole.style.display = "none";

    nameNavy.style.display = "none";
    clickNavy.style.border = "none";
    imgNavyHalf.style.display = "none";
    imgNavyWhole.style.display = "none";

    nameBeige.style.display = "none";
    clickBeige.style.border = "none";
    imgBeigeHalf.style.display = "none";
    imgBeigeWhole.style.display = "none";
});

// 17. BLACK CLICK
clickBlack.addEventListener('click', function() {
    nameBlack.style.display = "block";
    clickBlack.style.border = "1px solid black";
    imgBlackHalf.style.display = "block";
    imgBlackWhole.style.display = "block";
    updateColorPopup("Black");

    nameGreen.style.display = "none";
    clickGreen.style.border = "none";
    imgGreenHalf.style.display = "none";
    imgGreenWhole.style.display = "none";

    nameNavy.style.display = "none";
    clickNavy.style.border = "none";
    imgNavyHalf.style.display = "none";
    imgNavyWhole.style.display = "none";

    nameBeige.style.display = "none";
    clickBeige.style.border = "none";
    imgBeigeHalf.style.display = "none";
    imgBeigeWhole.style.display = "none";
});

// 18. NAVY CLICK
clickNavy.addEventListener('click', function() {
    nameNavy.style.display = "block";
    clickNavy.style.border = "1px solid black";
    imgNavyHalf.style.display = "block";
    imgNavyWhole.style.display = "block";
    updateColorPopup("Navy");

    nameGreen.style.display = "none";
    clickGreen.style.border = "none";
    imgGreenHalf.style.display = "none";
    imgGreenWhole.style.display = "none";

    nameBlack.style.display = "none";
    clickBlack.style.border = "none";
    imgBlackHalf.style.display = "none";
    imgBlackWhole.style.display = "none";

    nameBeige.style.display = "none";
    clickBeige.style.border = "none";
    imgBeigeHalf.style.display = "none";
    imgBeigeWhole.style.display = "none";
});

// 19. BEIGE CLICK
clickBeige.addEventListener('click', function() {
    nameBeige.style.display = "block";
    clickBeige.style.border = "1px solid black";
    imgBeigeHalf.style.display = "block";
    imgBeigeWhole.style.display = "block";
    updateColorPopup("Beige");

    nameGreen.style.display = "none";
    clickGreen.style.border = "none";
    imgGreenHalf.style.display = "none";
    imgGreenWhole.style.display = "none";

    nameBlack.style.display = "none";
    clickBlack.style.border = "none";
    imgBlackHalf.style.display = "none";
    imgBlackWhole.style.display = "none";

    nameNavy.style.display = "none";
    clickNavy.style.border = "none";
    imgNavyHalf.style.display = "none";
    imgNavyWhole.style.display = "none";
});

// 20. Function to update size in sizePopup
function updateSizePopup(size) {
    sizePopup.textContent = size;
}

// 21. Function to update color in colorPopup
function updateColorPopup(color) {
    colorPopup.textContent = color;
}

// 22. Add event listeners to size buttons to update the sizePopup
sizeThreeSix.addEventListener('click', function() {
    updateSizePopup("36");
});
sizeThreeEight.addEventListener('click', function() {
    updateSizePopup("38");
});
sizeFourZero.addEventListener('click', function() {
    updateSizePopup("40");
});
sizeFourTwo.addEventListener('click', function() {
    updateSizePopup("42");
});
sizeFourFour.addEventListener('click', function() {
    updateSizePopup("44");
});
sizeFourSix.addEventListener('click', function() {
    updateSizePopup("46");
});

// 23. Function to update size in sizePopup
function updateSizePopup(size) {
    sizePopup.textContent = size;
}

// 24. Images Picker

let greenSlideShow = document.querySelector(".slideshow-left-img-1");
let blackSlideShow = document.querySelector(".slideshow-left-img-3");
let navySlideShow = document.querySelector(".slideshow-left-img-5");
let beigeSlideShow = document.querySelector(".slideshow-left-img-7");

let greenPopup = document.querySelector(".shop-bag-popup-img");

// 25. Function to update the popup image src
function updatePopupImage(imageElement) {
    let imageSrc = imageElement.getAttribute('src');
    greenPopup.setAttribute('src', imageSrc);
}

// 26. Add event listeners for color selection and update popup image accordingly
clickGreen.addEventListener('click', function() {
    updatePopupImage(greenSlideShow);
});

clickBlack.addEventListener('click', function() {
    updatePopupImage(blackSlideShow);
});

clickNavy.addEventListener('click', function() {
    updatePopupImage(navySlideShow);
});

clickBeige.addEventListener('click', function() {
    updatePopupImage(beigeSlideShow);
});