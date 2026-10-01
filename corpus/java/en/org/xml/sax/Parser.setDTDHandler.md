---
id: "java-en-function-parser-setdtdhandler"
language: "java"
lang: "en"
category: "function"
name: "Parser.setDTDHandler"
signature: "public abstract void setDTDHandler (DTDHandler handler)"
title: "Parser.setDTDHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.setDTDHandler

```java
public abstract void setDTDHandler (DTDHandler handler)
```

Allow an application to register a DTD event handler.

 

If the application does not register a DTD handler, all DTD
 events reported by the SAX parser will be silently
 ignored (this is the default behaviour implemented by
 HandlerBase).

 

Applications may register a new or different
 handler in the middle of a parse, and the SAX parser must
 begin using the new handler immediately.

**参数**

- **handler** — The DTD handler.

**参见**

- DTDHandler
- HandlerBase
