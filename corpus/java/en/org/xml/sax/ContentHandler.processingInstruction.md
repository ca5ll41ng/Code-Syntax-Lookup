---
id: "java-en-function-contenthandler-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "ContentHandler.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.processingInstruction

```java
public void processingInstruction (String target, String data) throws SAXException
```

Receive notification of a processing instruction.

 

The Parser will invoke this method once for each processing
 instruction found: note that processing instructions may occur
 before or after the main document element.

 

A SAX parser must never report an XML declaration (XML 1.0,
 section 2.8) or a text declaration (XML 1.0, section 4.3.1)
 using this method.

 

Like `characters characters`, processing instruction
 data may have characters that need more than one char
 value.

**参数**

- **target** — the processing instruction target
- **data** — the processing instruction data, or null if none was supplied.  The data does not include any whitespace separating it from the target

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception
