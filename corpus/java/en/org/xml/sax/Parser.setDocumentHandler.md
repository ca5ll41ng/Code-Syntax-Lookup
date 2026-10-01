---
id: "java-en-function-parser-setdocumenthandler"
language: "java"
lang: "en"
category: "function"
name: "Parser.setDocumentHandler"
signature: "public abstract void setDocumentHandler (DocumentHandler handler)"
title: "Parser.setDocumentHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.setDocumentHandler

```java
public abstract void setDocumentHandler (DocumentHandler handler)
```

Allow an application to register a document event handler.

 

If the application does not register a document handler, all
 document events reported by the SAX parser will be silently
 ignored (this is the default behaviour implemented by
 HandlerBase).

 

Applications may register a new or different handler in the
 middle of a parse, and the SAX parser must begin using the new
 handler immediately.

**参数**

- **handler** — The document handler.

**参见**

- DocumentHandler
- HandlerBase
