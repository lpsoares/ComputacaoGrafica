window.MathJax = {
  tex: {
    // $...$ e $$...$$ para notebooks (nbconvert não passa pelo arithmatex)
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    // arithmatex class para markdown processado pelo pymdownx.arithmatex
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Re-renderiza após navegação instantânea do Material (navigation.instant)
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
