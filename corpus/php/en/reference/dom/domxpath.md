---
id: "en-php-guide-class-domxpath"
language: "php"
lang: "en"
category: "guide"
name: "class.domxpath"
title: "The DOMXPath class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domxpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMXPath class

DOMXPath

   Introduction  Allows to use XPath 1.0 queries on HTML or XML documents.      Class Synopsis    `DOMXPath`    `public` `readonly` `DOMDocument` `document`   `public` `bool` `registerNodeNamespaces`          Properties 
- **`document`** — The document that is linked to this object.
- **`registerNodeNamespaces`** — When set to `true`, namespaces in the node are registered.

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | It is no longer possible to clone a `DOMXPath` object. Doing so will result in an exception being thrown. Prior to PHP 8.4.0 this resulted in an unusable object. |
| 8.0.0 | The `registerNodeNamespaces` property has been added. |
