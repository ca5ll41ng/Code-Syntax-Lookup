---
id: "java-en-function-org-w3c-dom-ls-lsexception"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ls.LSException"
title: "LSException"
directive: "type"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSException

Parser or write operations may throw an LSException if the
 processing is stopped. The processing can be stopped due to a
 DOMError with a severity of
 DOMError.SEVERITY_FATAL_ERROR or a non recovered
 DOMError.SEVERITY_ERROR, or if
 DOMErrorHandler.handleError() returned false.
 

**Note:**  As suggested in the definition of the constants in the
 DOMError interface, a DOM implementation may choose to
 continue after a fatal error, but the resulting DOM tree is then
 implementation dependent.
 

See also the Document Object Model (DOM) Level 3 Load
and Save Specification.

> *Since 1.5*
