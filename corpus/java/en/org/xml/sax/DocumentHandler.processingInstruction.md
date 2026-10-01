---
id: "java-en-function-documenthandler-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.processingInstruction"
signature: "public abstract void processingInstruction (String target, String data) throws SAXException"
title: "DocumentHandler.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.processingInstruction

```java
public abstract void processingInstruction (String target, String data) throws SAXException
```

Receive notification of a processing instruction.

 

The Parser will invoke this method once for each processing
 instruction found: note that processing instructions may occur
 before or after the main document element.

 

A SAX parser should never report an XML declaration (XML 1.0,
 section 2.8) or a text declaration (XML 1.0, section 4.3.1)
 using this method.

**参数**

- **target** — The processing instruction target.
- **data** — The processing instruction data, or null if none was supplied.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
