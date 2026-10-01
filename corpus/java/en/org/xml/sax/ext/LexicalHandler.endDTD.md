---
id: "java-en-function-lexicalhandler-enddtd"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.endDTD"
signature: "public abstract void endDTD () throws SAXException"
title: "LexicalHandler.endDTD"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.endDTD

```java
public abstract void endDTD () throws SAXException
```

Report the end of DTD declarations.

 

This method is intended to report the end of the
 DOCTYPE declaration; if the document has no DOCTYPE declaration,
 this method will not be invoked.

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #startDTD
