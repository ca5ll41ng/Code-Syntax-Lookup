---
id: "java-en-function-defaulthandler-startdocument"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.startDocument"
signature: "public void startDocument () throws SAXException"
title: "DefaultHandler.startDocument"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.startDocument

```java
public void startDocument () throws SAXException
```

Receive notification of the beginning of the document.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the beginning
 of a document (such as allocating the root node of a tree or
 creating an output file).

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#startDocument
