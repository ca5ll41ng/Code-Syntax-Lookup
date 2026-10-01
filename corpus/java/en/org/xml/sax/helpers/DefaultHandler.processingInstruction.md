---
id: "java-en-function-defaulthandler-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "DefaultHandler.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.processingInstruction

```java
public void processingInstruction (String target, String data) throws SAXException
```

Receive notification of a processing instruction.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions for each
 processing instruction, such as setting status variables or
 invoking other methods.

**参数**

- **target** — The processing instruction target.
- **data** — The processing instruction data, or null if none is supplied.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#processingInstruction
