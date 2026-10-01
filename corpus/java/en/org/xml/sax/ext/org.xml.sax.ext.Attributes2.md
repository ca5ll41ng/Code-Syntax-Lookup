---
id: "java-en-function-org-xml-sax-ext-attributes2"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.Attributes2"
title: "Attributes2"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2

SAX2 extension to augment the per-attribute information
 provided through `Attributes`.
 If an implementation supports this extension, the attributes
 provided in `startElement
 ContentHandler.startElement()` will implement this interface,
 and the http://xml.org/sax/features/use-attributes2
 feature flag will have the value true.

 

 XMLReader implementations are not required to support this
 information, and it is not part of core-only SAX2 distributions.

 

Note that if an attribute was defaulted (!isSpecified())
 it will of necessity also have been declared (isDeclared())
 in the DTD.
 Similarly if an attribute's type is anything except CDATA, then it
 must have been declared.

> *Since 1.5, SAX 2.0 (extensions 1.1 alpha)*
