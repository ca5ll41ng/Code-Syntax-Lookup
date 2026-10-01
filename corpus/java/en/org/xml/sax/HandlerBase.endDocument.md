---
id: "java-en-function-handlerbase-enddocument"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.endDocument"
signature: "public void endDocument () throws SAXException"
title: "HandlerBase.endDocument"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.endDocument

```java
public void endDocument () throws SAXException
```

Receive notification of the end of the document.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the end
 of a document (such as finalising a tree or closing an output
 file).

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.DocumentHandler#endDocument
