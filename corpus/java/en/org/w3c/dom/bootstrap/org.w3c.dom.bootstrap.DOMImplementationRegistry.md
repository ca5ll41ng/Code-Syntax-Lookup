---
id: "java-en-function-org-w3c-dom-bootstrap-domimplementationregistry"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.bootstrap.DOMImplementationRegistry"
title: "DOMImplementationRegistry"
directive: "type"
module: "java.xml/org.w3c.dom.bootstrap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/bootstrap/DOMImplementationRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationRegistry

A factory that enables applications to obtain instances of
 DOMImplementation.

 

 Example:
 

 
  // get an instance of the DOMImplementation registry
  DOMImplementationRegistry registry =
       DOMImplementationRegistry.newInstance();
  // get a DOM implementation the Level 3 XML module
  DOMImplementation domImpl =
       registry.getDOMImplementation("XML 3.0");
 
```

 

 This provides an application with an implementation-independent starting
 point. DOM implementations may modify this class to meet new security
 standards or to provide *additional* fallbacks for the list of
 DOMImplementationSources.

**参见**

- DOMImplementation
- DOMImplementationSource

> *Since 1.5, DOM Level 3*
