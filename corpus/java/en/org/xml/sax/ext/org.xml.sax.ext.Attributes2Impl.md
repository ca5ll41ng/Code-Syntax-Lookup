---
id: "java-en-function-org-xml-sax-ext-attributes2impl"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.Attributes2Impl"
title: "Attributes2Impl"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl

SAX2 extension helper for additional Attributes information,
 implementing the `Attributes2` interface.

 

This is not part of core-only SAX2 distributions.

 

The specified flag for each attribute will always
 be true, unless it has been set to false in the copy constructor
 or using `setSpecified`.
 Similarly, the declared flag for each attribute will
 always be false, except for defaulted attributes (specified
 is false), non-CDATA attributes, or when it is set to true using
 `setDeclared`.
 If you change an attribute's type by hand, you may need to modify
 its declared flag to match.

> *Since 1.5, SAX 2.0 (extensions 1.1 alpha)*
