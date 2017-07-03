CONTENT SCRIPTS:

"A content script is the JavaScript file that runs in the context of webpages." This means that a content script can interact with 
web pages that the browser visits.

let's add a content script name content.js:

//content.js
alert("Hello from your chrome extension!");


Add this to manifest.json file

"content_scripts" : [
{
"matches" : [
<"all_urls">
],
"js" : ["content.js"]
}
]


This tell Chrome to inject content.js into every page we visit using the special <all_urls> URL pattern.If we want to inject the script
on only some pages, we can use match patterns.


Reload your Chrome extension.Every single page you visit now pops up an alert. 
