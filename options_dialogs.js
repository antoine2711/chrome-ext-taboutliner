/** @preserve Copyright 2012, 2013, 2014, 2015 by Vladyslav Volovyk. All Rights Reserved. */
"use strict";

var activateEnterLicenseKeyDialog                    = initEnterLicenseKeyDialog(window);
var activateBeforeIdentityAccessExplanationDialog = initBuyLicenseKeyDialog_beforeIdentityAccess(window);
//var activateBuyLicenseKeyDialog_afterIdentityAccess  = initBuyLicenseKeyDialog_afterIdentityAccess(window);



/**
 * Description for showEnterLicenseKeyDialog.
 * @param {*}    userInfo    Description.
 */
function showEnterLicenseKeyDialog(userInfo) {
    activateEnterLicenseKeyDialog( userInfo.email,
                                   'OK: identity.email GRANTED & accessible. userInfo.email:' + userInfo.email + '; userInfo.id:' + userInfo.id,
                                   /**
                                    * Description for onOk.
                                    */
                                   function onOk() {},
                                   /**
                                    * Description for onCancel.
                                    */
                                   function onCancel() {} );
}

/**
 * Description for initBuyLicenseKeyDialog_beforeIdentityAccess.
 * @param {*}    window_    Description.
 */
function initBuyLicenseKeyDialog_beforeIdentityAccess(window_) {
    // Special ids recognized by dialog factory:
    //
    // #modalEditPrompt-editField
    // #serialNumber
    //
    // #modalEditPrompt-cancellBtn
    // #modalEditPrompt-okBtn
    return initModalDialog_(window_, 'buyBeforeIdentityAccessDialog');
}

//function initBuyLicenseKeyDialog_afterIdentityAccess(window_) {
//    // Special ids recognized by dialog factory:
//    //
//    // #modalEditPrompt-editField
//    // #serialNumber
//    //
//    // #modalEditPrompt-cancellBtn
//    // #modalEditPrompt-okBtn
//    return initModalDialog_(window_, 'buyBeforeFastSpringDialog');
//}

/**
 * Description for initEnterLicenseKeyDialog.
 * @param {*}    window_    Description.
 * @param {*}    modalPromtId    Description.
 */
function initEnterLicenseKeyDialog(window_, modalPromtId) {
    // Special ids recognized by dialog factory:
    //
    // #modalEditPrompt-editField
    // #serialNumber
    //
    // #modalEditPrompt-cancellBtn
    // #modalEditPrompt-okBtn
    return initModalDialog_(window_, 'manualyEnterProKeyDialog');
}