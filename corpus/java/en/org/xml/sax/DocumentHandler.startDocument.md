---
id: "java-en-function-documenthandler-startdocument"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.startDocument"
signature: "public abstract void startDocument () throws SAXException"
title: "DocumentHandler.startDocument"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.startDocument

```java
public abstract void startDocument () throws SAXException
```

Receive notification of the beginning of a document.

 

The SAX parser will invoke this method only once, before any
 other methods in this interface or in DTDHandler (except for
 setDocumentLocator).

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
