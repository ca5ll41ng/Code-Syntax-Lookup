---
id: "java-en-function-handlerbase-error"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.error"
signature: "public void error (SAXParseException e) throws SAXException"
title: "HandlerBase.error"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.error

```java
public void error (SAXParseException e) throws SAXException
```

Receive notification of a recoverable parser error.

 

The default implementation does nothing.  Application writers
 may override this method in a subclass to take specific actions
 for each error, such as inserting the message in a log file or
 printing it to the console.

**参数**

- **e** — The warning information encoded as an exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ErrorHandler#warning
- org.xml.sax.SAXParseException
