---
id: "en-php-guide-class-xsltprocessor"
language: "php"
lang: "en"
category: "guide"
name: "class.xsltprocessor"
title: "The XSLTProcessor class"
module: "xsl"
source_url: "https://www.php.net/manual/en/class.xsltprocessor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The XSLTProcessor class

XSLTProcessor

   Introduction        Class Synopsis    `XSLTProcessor`    `public` `bool` `doXInclude` false   `public` `bool` `cloneDocument` false   `public` `int` `maxTemplateDepth`   `public` `int` `maxTemplateVars`        Properties 
- **`doXInclude`** — Whether to perform xIncludes.
- **`cloneDocument`** — Whether to perform the transformation on a clone of the document.
- **`maxTemplateDepth`** — The maximum template recursion depth.
- **`maxTemplateVars`** — The maximum number of variables in the template.

   Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The properties `doXInclude` and `cloneDocument` are now explicitly defined on the class. |
| 8.4.0 | Added properties `maxTemplateDepth` and `maxTemplateVars`. |
