import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first starts, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// GLOBALIZATION NOTE:
// Be sure to save this file with UTF-8 Encoding if using any non-ASCII characters
// in strings, etc.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook
//
// FiddlerScript Editor:
// http://fiddler2.com/fiddlerscript-editor

class Handlers
{
    // The following snippet demonstrates a custom-bound column for the Web Sessions list.
    // See http://fiddler2.com/r/?fiddlercolumns for more info
    /*
      public static BindUIColumn("Method", 60)
      function FillMethodColumn(oS: Session): String {
         return oS.RequestMethod;
      }
    */

    // The following snippet demonstrates how to create a custom tab that shows simple text
    /*
       public BindUITab("Flags")
       static function FlagsReport(arrSess: Session[]):String {
        var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var i:int = 0; i<arrSess.Length; i++)
        {
            oSB.AppendLine("SESSION FLAGS");
            oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
            for(var sFlag in arrSess[i].oFlags)
            {
                oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
            }
        }
        return oSB.ToString();
    }
    */

    // You can create a custom menu like so:
    /*
    QuickLinkMenu("&Links")
    QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
    QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
    public static function DoLinksMenu(sText: String, sAction: String)
    {
        Utilities.LaunchHyperlink(sAction);
    }
    */

    public static RulesOption("Hide 304s")
    BindPref("fiddlerscript.rules.Hide304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    BindPref("fiddlerscript.rules.AutoAuth")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    RulesString("&User-Agents", true)
    BindPref("fiddlerscript.ephemeral.UserAgentString")
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone7", "Mozilla/4.0 (compatible: MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)")
    RulesStringValue(2,"WinPhone8.1", "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; HTC; PM23300) like Gecko")
    RulesStringValue(3,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(4,"Safari7 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71")
    RulesStringValue(5,"iPad", "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
    RulesStringValue(6,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A405 Safari/8536.25")
    RulesStringValue(7,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(8,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(9,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(10,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(11,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(12,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(13,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
    RulesStringValue(14,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
    RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
    RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(17,"&Firefox 30", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0")
    RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
    RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
    RulesStringValue(20,"Chrome", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36")
    RulesStringValue(21,"ChromeBook", "Mozilla/5.0 (X11; CrOS armv7l 2913.260.0) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.99 Safari/537.11")
    RulesStringValue(22,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(23,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(24,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;


    //// ARIA_TEMPLATES_SPECIFIC BEGIN
    // Enable redirection
    BindPref("ariatemplates.ephemeral.at_redirect")
    RulesString("Aria Templates &redirection", true)
    RulesStringValue(0,"Redirect to a particular &version... (e.g. 1.5-2A)", "%CUSTOM%")
    RulesStringValue(1,"1.4-17H", "1.4-17H")
    RulesStringValue(2,"1.5-4", "1.5-4")
    RulesStringValue(3,"1.6-3", "1.6-3")
    public static var at_redirect: String = null;

    // Option to target unminified files
    BindPref("ariatemplates.ephemeral.at_targetDev")
    public static RulesOption("Target &non-minified files", "Aria Templates &options")
    var at_targetDev: boolean = false;

    // Option to enable debug mode (Aria.debug = true) to have JSON beans validation
    // See http://ariatemplates.com/usermanual/latest/logging_and_debugging#debugging
    BindPref("ariatemplates.ephemeral.at_debugMode")
    public static RulesOption("Set Aria.&debug = true", "Aria Templates &options")
    var at_debugMode: boolean = false;

    // Skip AT redirections for certain URLs (needed if user has deployed AT to "aria" folder)
    BindPref("ariatemplates.ephemeral.at_skipRedirectRegex")
    RulesString("Aria Templates &avoid redirection for...", true)
    RulesStringValue(0,"&Regular expression... e.g. (aria/myfile)|(aria/myotherfile)", "%CUSTOM%")
    public static var at_skipRedirectRegex: String = null;

    // Set custom name of the AT bootstrap file if needed
    BindPref("ariatemplates.ephemeral.at_bootstrapFileRegex")
    RulesString("Aria Templates custom &bootstrap file", true)
    RulesStringValue(0,"&Regular expression... (e.g. myAriaTemplatesBootstrap*.js)", "%CUSTOM%")
    public static var at_bootstrapFileRegex: String = null;

    // Set custom name of the AT skin file if redirection is needed
    BindPref("ariatemplates.ephemeral.at_skinFileRegex")
    RulesString("Aria Templates custom &skin file", true)
    RulesStringValue(0,"Regular expression... (e.g. mySkin*.js)", "%CUSTOM%")
    public static var at_skinFileRegex: String = null;

    // If enabled, found skin will be forcedly redirected to a chosen one.
    // Otherwise, found skin will be redirected to a matching skin (i.e. atskin -> atskin)
    BindPref("ariatemplates.ephemeral.at_targetSkinFile")
    RulesString("Aria Templates &target skin name", true)
    RulesStringValue(0,"atskin", "atskin", true)
    RulesStringValue(1,"atflatskin", "atflatskin")
    public static var at_targetSkinFile: String = null;
    //// ARIA_TEMPLATES_SPECIFIC END

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;

    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() {
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        UI.actUpdateInspector(true,true);
    }

    static function OnBoot() {
        // MessageBox.Show("Fiddler has finished booting");
        // System.Diagnostics.Process.Start("iexplore.exe");

        // UI.ActivateRequestInspector("HEADERS");
        // UI.ActivateResponseInspector("HEADERS");
    }

    static function OnShutdown() {
        // MessageBox.Show("Fiddler has shutdown");
    }

    static function OnAttach() {
        // MessageBox.Show("Fiddler is now the system proxy");
    }

    static function OnDetach() {
        // MessageBox.Show("Fiddler is no longer the system proxy");
    }

    //// ARIA_TEMPLATES_SPECIFIC START
    static var atVersionRegex = /((1\.[0-9](\-|\.)[0-9]+[A-Z]*)|(1\.1\-SNAPSHOT)|(latest))/; // // don't add flags since new RegExp(regex.source) will break
    static var atVersionRegexGlobal = new RegExp(atVersionRegex.source, "g");

    // Returns true if the URL is AT bootstrap file, or a custom boostrap file as defined by user
    static function AT_isATBootstrap(url: String){
        if (at_bootstrapFileRegex) {
            var regex = new RegExp(at_bootstrapFileRegex, "i");
            if (regex.test(url)) {
                return true;
            }
        }
        return (new RegExp(/aria\-?templates-/.source + atVersionRegex.source)).test(url);
    }

    // Returns true if the URL is AT skin file, or a custom skin file as defined by user.
    //
    // Sample match: http://server:port/whatever/aria/css/atskin-1.5.3.js
    // Should redirect to one of
    // http://cdn.ariatemplates.com/aria/css/atskin-1.5-3.js
    // http://cdn.ariatemplates.com/aria/css/atskin-1.5.3.js
    // or for dev
    // http://cdn.ariatemplates.com/dev/1.4-17A/aria/css/atskin-1.4-17A.js
    static function AT_isATSkin(url: String) {
        if (at_skinFileRegex) {
            var regex = new RegExp(at_skinFileRegex, "i");
            if (regex.test(url)) {
                return true;
            }
        }
        return new RegExp(/[^\:][^\/]\/aria\/css\/at(flat)?skin\-/.source + atVersionRegex.source).test(url);
    }

    static function AT_isATFile(url: String) {
        return /[^\:][^\/]\/aria\/.*\.(js|tpl|tml|cml|css|txt)/i.test(url);
    }


    static function AT_getCdnVersion() {
        // input can be either like 1.4.17 or 1.4-17, we normalize it to 1.4-17
        var cdnVersion = null;
        if (atVersionRegex.test(at_redirect)) {
            // at_redirect matches a version number
            cdnVersion = at_redirect;
            // normalize last dot to a dash, if needed
            var lastDotIdx = cdnVersion.lastIndexOf(".");
            if (cdnVersion.indexOf("-") == -1 && lastDotIdx > -1) {
                cdnVersion = cdnVersion.slice(0, lastDotIdx) + "-" + cdnVersion.slice(lastDotIdx + 1);
            }
        }
        return cdnVersion;
    }

    static function AT_markRedirect(oSession: Session, originalUrl: String) {
        oSession["ui-backcolor"] = "#5A96E2";
        oSession["ui-color"] = "white";

        // it makes sense to display original URL only for bootstrap and skin,
        // since the URLs of the other AT files requested depend on the URL map in the bootstrap
        if (originalUrl) {
            oSession["ui-comments"] = oSession["ui-comments"] + originalUrl;
        }
    }

    static function AT_markDebug(oSession: Session) {
        oSession["ui-backcolor"] = "orange";
        oSession["ui-color"] = "white";

        oSession["ui-comments"] = "[injected Aria.debug = true]" + oSession["ui-comments"];
    }

    static function AT_enableAriaDebug(oSession: Session) {
        if (AT_isATBootstrap(oSession.PathAndQuery)) {
            var addedText = "// Begin change by Fiddler\n if (typeof(Aria)== \"undefined\"){Aria = {};}\n";
            addedText += "Aria.debug = true;\n";
            addedText += "// End change by Fiddler\n";

            oSession.utilDecodeResponse();
            var oBody = System.Text.Encoding.UTF8.GetString(oSession.responseBodyBytes);
            oBody = addedText + oBody;
            oSession.utilSetResponseBody(oBody);

            AT_markDebug(oSession);
        }
    }

    // Do redirects to AT CDN for matching files.
    static function AT_DoBeforeRequestRedirects(oSession: Session) {
        // do not redirect explicit requests for AT files via AT CDN or github.com, raw.githubusercontent.com etc.
        // as this doesn't make sense and may lead to great confusion
        if (oSession.hostname.match(/github(usercontent)?\.com/) || oSession.hostname.match(/cdn\.ariatemplates\.com/) ) {
            return;
        }

        // do not redirect requests for test files of Aria Templates
        if (oSession.uriContains("/test/aria/")) {
            return;
        }

        // do not redirect legacy Aria JSP framework
        if (oSession.uriContains("/aria/3.2")) {
            return;
        }

        // API docs hack <http://ariatemplates.com/api> - don't redirect certain files as those are application files,
        // not framework files
        if (oSession.uriContains("aria/guide/apps/apidocs/") || oSession.uriContains("aria/_package")){
            return;
        }

        var url = oSession.fullUrl;

        // don't do redirects if the URL matches user-supplied pattern - useful if user's files are inside aria/*
        if (at_skipRedirectRegex) {
            var regex = new RegExp(at_skipRedirectRegex);
            if (regex.test(url)) {
                return;
            }
        }

        var cdnVersion = AT_getCdnVersion();
        if (!cdnVersion) {
            FiddlerObject.StatusText = "Invalid AT version redirect: " + at_redirect + " - expecting something like 1.6-1 or 1.6.1 or 1.4.17H";
            return;
        }

        var newUrlPrefix = "http://cdn.ariatemplates.com";
        if (at_targetDev) {
            newUrlPrefix = newUrlPrefix + "/dev/" + cdnVersion;
        }

        if (AT_isATBootstrap(url)) {
            // dev http://cdn.ariatemplates.com/dev/1.6-3/aria/aria-templates-1.6-3.js
            // min http://cdn.ariatemplates.com/aria/aria-templates-1.6-3.js
            var newUrl = newUrlPrefix + "/aria/aria-templates-" + cdnVersion + ".js";
            oSession.fullUrl = newUrl;
            AT_markRedirect(oSession, url);
        }
        else if (AT_isATSkin(url)) {
            // dev http://cdn.ariatemplates.com/dev/1.6-3/aria/css/atskin-1.6-3.js
            // min http://cdn.ariatemplates.com/aria/css/atskin-1.6-3.js

            if (!at_targetSkinFile) {
                // auto-detect skin name from URL if fixed skin redirection is disabled
                // E.g. for ".../aria/css/atskin-1.6-3.js" this finds "atskin"
                var skinNameRegex = new RegExp( /\/([a-zA-Z0-9]+)\-/.source + atVersionRegex.source );
                var match = url.match(skinNameRegex);
                if (match) {
                    at_targetSkinFile = match[1];
                }
            }
            var newUrl = newUrlPrefix + "/aria/css/" + at_targetSkinFile + "-" + cdnVersion + ".js"
            oSession.fullUrl = newUrl;
            AT_markRedirect(oSession, url);
        }
        else if (AT_isATFile(url)) {
            var replacePattern = /\w+:\/\/.*\/(aria)\//;
            var replaceTo = newUrlPrefix + '/$1/';
            oSession.fullUrl = url.replace(replacePattern, replaceTo);
            AT_markRedirect(oSession, null);
        }
    }
    //// ARIA_TEMPLATES_SPECIFIC END

    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith);
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith;
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300";
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150";
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA;
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }

        //// ARIA_TEMPLATES_SPECIFIC START
        if (at_redirect) {
            AT_DoBeforeRequestRedirects(oSession);
        }
        //// ARIA_TEMPLATES_SPECIFIC END
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
/*
    static function OnPeekAtRequestHeaders(oSession: Session) {
    }
*/

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers
    // which suggests that tampering with the response body is necessary.
    //
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }

        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }

        //// ARIA_TEMPLATES_SPECIFIC BEGIN
        if (at_debugMode) {
            AT_enableAriaDebug(oSession);
        }
        //// ARIA_TEMPLATES_SPECIFIC END
    }

/*
    // This function executes just before Fiddler returns an error that it has
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;

        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot");
    }

    // These static variables are used for simple breakpointing & other QuickExec rules
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

    FiddlerObject.StatusText = "ExecAction: " + sParams[0];

    var sAction = sParams[0].toLowerCase();
    switch (sAction) {
    case "bold":
        if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
        uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
        return true;
    case "bp":
        FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
        return true;
    case "bps":
        if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
        bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
        return true;
    case "bpv":
    case "bpm":
        if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
        bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
        return true;
    case "bpu":
        if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
        bpRequestURI = sParams[1];
        FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
        return true;
    case "bpa":
    case "bpafter":
        if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
        bpResponseURI = sParams[1];
        FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
        return true;
    case "overridehost":
        if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
        gs_OverridenHost = sParams[1].toLowerCase();
        gs_OverrideHostWith = sParams[2];
        FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
        return true;
    case "urlreplace":
        if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
        gs_ReplaceToken = sParams[1];
        gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
        FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
        return true;
    case "allbut":
    case "keeponly":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
        UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
        UI.actRemoveUnselectedSessions();
        UI.lvSessions.SelectedItems.Clear();
        FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
        return true;
    case "stop":
        UI.actDetachProxy();
        return true;
    case "start":
        UI.actAttachProxy();
        return true;
    case "cls":
    case "clear":
        UI.actRemoveAllSessions();
        return true;
    case "g":
    case "go":
        UI.actResumeAllSessions();
        return true;
    case "goto":
        if (sParams.Length != 2) return false;
        Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
        return true;
    case "help":
        Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
        return true;
    case "hide":
        UI.actMinimizeToTray();
        return true;
    case "log":
        FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
        return true;
    case "nuke":
        UI.actClearWinINETCache();
        UI.actClearWinINETCookies();
        return true;
    case "screenshot":
        UI.actCaptureScreenshot(false);
        return true;
    case "show":
        UI.actRestoreWindow();
        return true;
    case "tail":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
        UI.TrimSessionList(int.Parse(sParams[1]));
        return true;
    case "quit":
        UI.actExit();
        return true;
    case "dump":
        UI.actSelectAll();
        UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
        UI.actRemoveAllSessions();
        FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
        return true;

    default:
        if (sAction.StartsWith("http") || sAction.StartsWith("www")) {
            System.Diagnostics.Process.Start(sParams[0]);
            return true;
        }
        else
        {
            FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
            return false;
        }
    }
    }
}