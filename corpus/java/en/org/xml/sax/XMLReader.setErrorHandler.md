---
id: "java-en-function-xmlreader-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setErrorHandler"
signature: "public void setErrorHandler (ErrorHandler handler)"
title: "XMLReader.setErrorHandler"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setErrorHandler

```java
public void setErrorHandler (ErrorHandler handler)
```

Allow an application to register an error event handler.

 

If the application does not register an error handler, all
 error events reported by the SAX parser will be silently
 ignored; however, normal processing may not continue.  It is
 highly recommended that all SAX applications implement an
 error handler to avoid unexpected bugs.

 

Applications may register a new or different handler in the
 middle of a parse, and the SAX parser must begin using the new
 handler immediately.

**参数**

- **handler** — The error handler.

**参见**

- #getErrorHandler
