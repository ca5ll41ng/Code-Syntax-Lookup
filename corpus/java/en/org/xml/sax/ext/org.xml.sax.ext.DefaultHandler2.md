---
id: "java-en-function-org-xml-sax-ext-defaulthandler2"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.DefaultHandler2"
title: "DefaultHandler2"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DefaultHandler2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler2

This class extends the SAX2 base handler class to support the
 SAX2 `LexicalHandler`, `DeclHandler`, and
 `EntityResolver2` extensions.  Except for overriding the
 original SAX1 `resolveEntity resolveEntity`
 method the added handler methods just return.  Subclassers may
 override everything on a method-by-method basis.

 

 Note: this class might yet learn that the
 ContentHandler.setDocumentLocator() call might be passed a
 `Locator2` object, and that the
 ContentHandler.startElement() call might be passed a
 `Attributes2` object.

> *Since 1.5, SAX 2.0 (extensions 1.1 alpha)*
