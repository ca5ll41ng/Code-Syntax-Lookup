---
id: "java-en-function-defaulthandler-skippedentity"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.skippedEntity"
signature: "public void skippedEntity (String name) throws SAXException"
title: "DefaultHandler.skippedEntity"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.skippedEntity

```java
public void skippedEntity (String name) throws SAXException
```

Receive notification of a skipped entity.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions for each
 processing instruction, such as setting status variables or
 invoking other methods.

**参数**

- **name** — The name of the skipped entity.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#processingInstruction
