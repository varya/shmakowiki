{ShmakoWikiToHtml=OMeta.delegated({"keyword":function(){var $elf=this;return $elf._or((function(){return $elf._applyWithArgs("exactly","para")}),(function(){return $elf._applyWithArgs("exactly","header1")}),(function(){return $elf._applyWithArgs("exactly","header2")}),(function(){return $elf._applyWithArgs("exactly","header3")}),(function(){return $elf._applyWithArgs("exactly","olist")}),(function(){return $elf._applyWithArgs("exactly","ulist")}),(function(){return $elf._applyWithArgs("exactly","olistItem")}),(function(){return $elf._applyWithArgs("exactly","ulistItem")}),(function(){return $elf._applyWithArgs("exactly","bold")}),(function(){return $elf._applyWithArgs("exactly","bold_")}),(function(){return $elf._applyWithArgs("exactly","italic")}),(function(){return $elf._applyWithArgs("exactly","italic_")}),(function(){return $elf._applyWithArgs("exactly","underline")}),(function(){return $elf._applyWithArgs("exactly","underline_")}),(function(){return $elf._applyWithArgs("exactly","strike")}),(function(){return $elf._applyWithArgs("exactly","strike_")}),(function(){return $elf._applyWithArgs("exactly","monospace")}),(function(){return $elf._applyWithArgs("exactly","monospace_")}),(function(){return $elf._applyWithArgs("exactly","superscript")}),(function(){return $elf._applyWithArgs("exactly","superscript_")}),(function(){return $elf._applyWithArgs("exactly","subscript")}),(function(){return $elf._applyWithArgs("exactly","subscript_")}),(function(){return $elf._applyWithArgs("exactly","link")}),(function(){return $elf._applyWithArgs("exactly","link_")}),(function(){return $elf._applyWithArgs("exactly","lineBreak")}),(function(){return $elf._applyWithArgs("exactly","escaped")}),(function(){return $elf._applyWithArgs("exactly","extention")}))},"token":function(){var $elf=this,t,ans,c;return $elf._or((function(){return (function(){$elf._form(function(){return (function(){t=$elf._apply("keyword");return ans=$elf._applyWithArgs("apply",t)})()});return ans})()}),(function(){return (function(){c=$elf._apply("anything");return ShmakoWikiToHtml._escape(c)})()}))},"tokens":function(){var $elf=this,c;return (function(){$elf._form(function(){return c=$elf._many(function(){return $elf._apply("token")})});return c.join("")})()},"bold":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<b>" + c) + "</b>")})()},"bold_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<b>" + c) + "</b>")})()},"italic":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<i>" + c) + "</i>")})()},"italic_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<i>" + c) + "</i>")})()},"underline":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<u>" + c) + "</u>")})()},"underline_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<u>" + c) + "</u>")})()},"strike":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<s>" + c) + "</s>")})()},"strike_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<s>" + c) + "</s>")})()},"monospace":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<tt>" + c) + "</tt>")})()},"monospace_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<tt>" + c) + "</tt>")})()},"superscript":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<sup>" + c) + "</sup>")})()},"superscript_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<sup>" + c) + "</sup>")})()},"subscript":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<sub>" + c) + "</sub>")})()},"subscript_":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<sub>" + c) + "</sub>")})()},"link":function(){var $elf=this,c,c,cc;return $elf._or((function(){return (function(){c=$elf._apply("token");$elf._form(function(){return (function(){})});return (((("<a href=\"" + c) + "\">") + c) + "</a>")})()}),(function(){return (function(){c=$elf._apply("token");cc=$elf._apply("tokens");return (((("<a href=\"" + c) + "\">") + cc) + "</a>")})()}))},"link_":function(){var $elf=this,c;return (function(){c=$elf._apply("token");return (((("<a href=\"" + c) + "\">") + c) + "</a>")})()},"lineBreak":function(){var $elf=this,c;return (function(){c=$elf._apply("anything");return "<br/>"})()},"escaped":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<span>" + c) + "</span>")})()},"para":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<p>" + c) + "</p>")})()},"header1":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<h1>" + c) + "</h1>")})()},"header2":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<h2>" + c) + "</h2>")})()},"header3":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<h3>" + c) + "</h3>")})()},"olist":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<ol>" + c) + "</ol>")})()},"ulist":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<ul>" + c) + "</ul>")})()},"olistItem":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<li>" + c) + "</li>")})()},"ulistItem":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<li>" + c) + "</li>")})()},"extention":function(){var $elf=this,t,c,p;return (function(){t=$elf._apply("anything");c=$elf._apply("anything");p=$elf._apply("anything");return (ShmakoWikiToHtml["extentions"].hasOwnProperty(t)?ShmakoWikiToHtml["extentions"][t](c,p):(("<div>" + ShmakoWikiToHtml._escape(c)) + "</div>"))})()},"topLevel":function(){var $elf=this,c;return (function(){c=$elf._apply("tokens");return (("<div class=\"shmakowiki\">" + c) + "</div>")})()}});ShmakoWikiToHtml["extentions"]=({"html": (function (c){return c}),"ohl": (function (c,p){return OmetaHighlighterToHtml.match(c,"topLevel")}),"hljs": (function (c,p){return (((("<pre><code class=\"" + p) + "\">") + ShmakoWikiToHtml._escape(c)) + "</code></pre>")})});ShmakoWikiToHtml["extentions"]["hl"]=ShmakoWikiToHtml["extentions"]["ohl"];ShmakoWikiToHtml["_escape"]=(function (){{var amp=new RegExp("&","g");var lt=new RegExp("<","g");var gt=new RegExp(">","g");var apos=new RegExp("\'","g");var quot=new RegExp("\"","g")};return (function (s){return String(s).replace(amp,"&amp;").replace(lt,"&lt;").replace(gt,"&gt;").replace(apos,"&apos;").replace(quot,"&quot;")})})()}