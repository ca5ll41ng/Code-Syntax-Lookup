---
id: "java-en-function-lexicalhandler-startcdata"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.startCDATA"
signature: "public abstract void startCDATA () throws SAXException"
title: "LexicalHandler.startCDATA"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.startCDATA

```java
public abstract void startCDATA () throws SAXException
```

Report the start of a CDATA section.

 

The contents of the CDATA section will be reported through
 the regular `characters
 characters` event; this event is intended only to report
 the boundary.

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #endCDATA
