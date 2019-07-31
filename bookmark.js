INIT:
javascript:MA=["111881","691573","111861","690461","111868","689915","111875","690725","111883","690386"]; i=-1;

AUTO:
javascript: i++; CL=document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_btDirectClassRegister_CD"); DC=document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_tbDirectClassRegister_I"); DC.value=MA[i]; CL.click();

SUBMIT:
javascript:document.getElementById("ctl00_ctl00_ASPxSplitter1_Content_ContentSplitter_MainContent_ASPxCallbackPanel1_btSendRegister_CD").click();
