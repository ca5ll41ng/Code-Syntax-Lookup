---
id: "java-en-function-xmlreader-setdtdhandler"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setDTDHandler"
signature: "public void setDTDHandler (DTDHandler handler)"
title: "XMLReader.setDTDHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setDTDHandler

```java
public void setDTDHandler (DTDHandler handler)
```

Allow an application to register a DTD event handler.

 

If the application does not register a DTD handler, all DTD
 events reported by the SAX parser will be silently ignored.

 

Applications may register a new or different handler in the
 middle of a parse, and the SAX parser must begin using the new
 handler immediately.

**参数**

- **handler** — The DTD handler.

**参见**

- #getDTDHandler
