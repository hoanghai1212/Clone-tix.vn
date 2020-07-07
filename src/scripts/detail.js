import { TabPanel } from "./vendor/tabpanel.js";
import * as util from "./vendor/utility.js"



util.createSelectBox("#location-select");

util.handleModalToggle("#modalBtn", "#modalLocation");
util.handleSideMenuToggle();
util.handleScrollTopBtn();
util.handleHideAll();

window.backToHome = () =>
{
    util.backToHome();
};

window.toLoginPage = () =>
{
    util.toLoginPage();
};


TabPanel();

