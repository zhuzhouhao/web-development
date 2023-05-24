changePageTitle();
createCover();
createToc();
createSubsections();
createThankYouPage();
rmCodeLeadingSpaces();

includeCommonLibraries(function(){
  defineMyPlugins();
  setTheme();
  initReveal(myConfig, myPreloadPlugins, myPlugins);
});
