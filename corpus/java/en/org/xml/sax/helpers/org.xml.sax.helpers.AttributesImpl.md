---
id: "java-en-function-org-xml-sax-helpers-attributesimpl"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.AttributesImpl"
title: "AttributesImpl"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl

Default implementation of the Attributes interface.

 

This class provides a default implementation of the SAX2
 `org.xml.sax.Attributes Attributes` interface, with the
 addition of manipulators so that the list can be modified or
 reused.

 

There are two typical uses of this class:

 
 
- to take a persistent snapshot of an Attributes object
  in a `startElement startElement` event; or
 
- to construct or modify an Attributes object in a SAX2 driver or filter.
 

 

This class replaces the now-deprecated SAX1 `org.xml.sax.helpers.AttributeListImpl AttributeListImpl`
 class; in addition to supporting the updated Attributes
 interface rather than the deprecated `org.xml.sax.AttributeList
 AttributeList` interface, it also includes a much more efficient
 implementation using a single array rather than a set of Vectors.

> *Since 1.4, SAX 2.0*
