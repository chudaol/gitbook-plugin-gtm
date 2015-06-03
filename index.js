module.exports = {
  book: {
    html: {
      "body:start": function() {
        var config = this.options.pluginsConfig.gtm || {};

        if (!config.token) {
          throw "Need to have option 'token' for Google Tag Manager plugin";
        }

        return 	"<noscript>\n"                                                                        +
                  "<iframe src=\"//www.googletagmanager.com/ns.html?id="                              +
                  config.token                                                                        +
                  "\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n"  +
                "</noscript>\n"                                                                       +
                "<script>"                                                                            +
                  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n"                      +
                  "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n"       +
                  "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n"           +
                  "'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n"    +
                  "})(window,document,'script','dataLayer','" + config.token + "');\n"                +
                "</script>";
      }
    }
  }
};