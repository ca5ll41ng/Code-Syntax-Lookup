---
id: "java-en-function-org-xml-sax-ext-locator2"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.Locator2"
title: "Locator2"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Locator2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator2

SAX2 extension to augment the entity information provided
 through a `Locator`.
 If an implementation supports this extension, the Locator
 provided in `setDocumentLocator
 ContentHandler.setDocumentLocator()` will implement this
 interface, and the
 http://xml.org/sax/features/use-locator2 feature
 flag will have the value true.

 

 XMLReader implementations are not required to support this
 information, and it is not part of core-only SAX2 distributions.

> *Since 1.5, SAX 2.0 (extensions 1.1 alpha)*
