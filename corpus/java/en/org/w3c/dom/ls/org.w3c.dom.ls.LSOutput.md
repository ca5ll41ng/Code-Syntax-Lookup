---
id: "java-en-function-org-w3c-dom-ls-lsoutput"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ls.LSOutput"
title: "LSOutput"
directive: "type"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSOutput

This interface represents an output destination for data.
 

 This interface allows an application to encapsulate information about
 an output destination in a single object, which may include a URI, a byte
 stream (possibly with a specified encoding), a base URI, and/or a
 character stream.
 

 The exact definitions of a byte stream and a character stream are
 binding dependent.
 

 The application is expected to provide objects that implement this
 interface whenever such objects are needed. The application can either
 provide its own objects that implement this interface, or it can use the
 generic factory method DOMImplementationLS.createLSOutput()
 to create objects that implement this interface.
 

 The LSSerializer will use the LSOutput object
 to determine where to serialize the output to. The
 LSSerializer will look at the different outputs specified in
 the LSOutput in the following order to know which one to
 output to, the first one that is not null and not an empty string will be
 used:
 
 
-  LSOutput.characterStream
 
 
- 
 LSOutput.byteStream
 
 
-  LSOutput.systemId
 
 

 

 LSOutput objects belong to the application. The DOM
 implementation will never modify them (though it may make copies and
 modify the copies, if necessary).
 

See also the Document Object Model (DOM) Level 3 Load
and Save Specification.

> *Since 1.5*
