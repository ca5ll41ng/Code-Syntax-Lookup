---
id: "java-en-function-contenthandler-startdocument"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.startDocument"
signature: "public void startDocument () throws SAXException"
title: "ContentHandler.startDocument"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.startDocument

```java
public void startDocument () throws SAXException
```

Receive notification of the beginning of a document.

 

The SAX parser will invoke this method only once, before any
 other event callbacks (except for `setDocumentLocator
 setDocumentLocator`).

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception

**参见**

- #endDocument
