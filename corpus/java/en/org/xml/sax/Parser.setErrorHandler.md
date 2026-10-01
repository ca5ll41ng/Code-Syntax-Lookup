---
id: "java-en-function-parser-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "Parser.setErrorHandler"
signature: "public abstract void setErrorHandler (ErrorHandler handler)"
title: "Parser.setErrorHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.setErrorHandler

```java
public abstract void setErrorHandler (ErrorHandler handler)
```

Allow an application to register an error event handler.

 

If the application does not register an error event handler,
 all error events reported by the SAX parser will be silently
 ignored, except for fatalError, which will throw a SAXException
 (this is the default behaviour implemented by HandlerBase).

 

Applications may register a new or different handler in the
 middle of a parse, and the SAX parser must begin using the new
 handler immediately.

**参数**

- **handler** — The error handler.

**参见**

- ErrorHandler
- SAXException
- HandlerBase
