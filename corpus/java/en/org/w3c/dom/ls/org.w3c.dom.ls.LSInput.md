---
id: "java-en-function-org-w3c-dom-ls-lsinput"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ls.LSInput"
title: "LSInput"
directive: "type"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput

This interface represents an input source for data.
 

 This interface allows an application to encapsulate information about
 an input source in a single object, which may include a public
 identifier, a system identifier, a byte stream (possibly with a specified
 encoding), a base URI, and/or a character stream.
 

 The exact definitions of a byte stream and a character stream are
 binding dependent.
 

 The application is expected to provide objects that implement this
 interface whenever such objects are needed. The application can either
 provide its own objects that implement this interface, or it can use the
 generic factory method DOMImplementationLS.createLSInput()
 to create objects that implement this interface.
 

 The LSParser will use the LSInput object to
 determine how to read data. The LSParser will look at the
 different inputs specified in the LSInput in the following
 order to know which one to read from, the first one that is not null and
 not an empty string will be used:
 
 
-  LSInput.characterStream
 
 
- 
 LSInput.byteStream
 
 
-  LSInput.stringData
 
 
- 
 LSInput.systemId
 
 
-  LSInput.publicId
 
 

 

 If all inputs are null, the LSParser will report a
 DOMError with its DOMError.type set to
 "no-input-specified" and its DOMError.severity
 set to DOMError.SEVERITY_FATAL_ERROR.
 

 LSInput objects belong to the application. The DOM
 implementation will never modify them (though it may make copies and
 modify the copies, if necessary).
 

See also the Document Object Model (DOM) Level 3 Load
and Save Specification.

> *Since 1.5*
