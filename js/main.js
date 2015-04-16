var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
    if (element.type.indexOf('math/tex') != -1) {
        // Extract math markdown
        var textToRender = element.innerText || element.textContent;

        // Create span for KaTeX
        var katexElement = document.createElement('span');

        // Support inline and display math
        if (element.type.indexOf('mode=display') != -1){
            katexElement.className += "math-display";
            textToRender = '\\displaystyle {' + textToRender + '}';
            } else {
                katexElement.className += "math-inline";
            }

            katex.render(textToRender, katexElement);
            element.parentNode.insertBefore(katexElement, element);
        }
    });

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61954701-1', 'auto');
ga('send', 'pageview');

</script>
