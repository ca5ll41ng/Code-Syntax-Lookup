---
id: "java-en-function-documenthandler-enddocument"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.endDocument"
signature: "public abstract void endDocument () throws SAXException"
title: "DocumentHandler.endDocument"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.endDocument

```java
public abstract void endDocument () throws SAXException
```

Receive notification of the end of a document.

 

The SAX parser will invoke this method only once, and it will
 be the last method invoked during the parse.  The parser shall
 not invoke this method until it has either abandoned parsing
 (because of an unrecoverable error) or reached the end of
 input.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
