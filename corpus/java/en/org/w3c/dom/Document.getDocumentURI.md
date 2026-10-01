---
id: "java-en-function-document-getdocumenturi"
language: "java"
lang: "en"
category: "function"
name: "Document.getDocumentURI"
signature: "public String getDocumentURI()"
title: "Document.getDocumentURI"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getDocumentURI

```java
public String getDocumentURI()
```

The location of the document or null if undefined or if
 the Document was created using
 DOMImplementation.createDocument. No lexical checking is
 performed when setting this attribute; this could result in a
 null value returned when using Node.baseURI
 .
 
 Beware that when the Document supports the feature
 "HTML" [DOM Level 2 HTML]
 , the href attribute of the HTML BASE element takes precedence over
 this attribute when computing Node.baseURI.

> *Since 1.5, DOM Level 3*
