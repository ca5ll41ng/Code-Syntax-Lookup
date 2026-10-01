---
id: "java-en-function-handlerbase-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.processingInstruction"
signature: "public void processingInstruction (String target, String data) throws SAXException"
title: "HandlerBase.processingInstruction"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.processingInstruction

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

- org.xml.sax.DocumentHandler#processingInstruction
