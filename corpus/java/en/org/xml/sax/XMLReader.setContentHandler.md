---
id: "java-en-function-xmlreader-setcontenthandler"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setContentHandler"
signature: "public void setContentHandler (ContentHandler handler)"
title: "XMLReader.setContentHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setContentHandler

```java
public void setContentHandler (ContentHandler handler)
```

Allow an application to register a content event handler.

 

If the application does not register a content handler, all
 content events reported by the SAX parser will be silently
 ignored.

 

Applications may register a new or different handler in the
 middle of a parse, and the SAX parser must begin using the new
 handler immediately.

**参数**

- **handler** — The content handler.

**参见**

- #getContentHandler
