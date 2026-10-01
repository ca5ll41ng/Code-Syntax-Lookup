---
id: "java-en-function-handlerbase-fatalerror"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.fatalError"
signature: "public void fatalError (SAXParseException e) throws SAXException"
title: "HandlerBase.fatalError"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.fatalError

```java
public void fatalError (SAXParseException e) throws SAXException
```

Report a fatal XML parsing error.

 

The default implementation throws a SAXParseException.
 Application writers may override this method in a subclass if
 they need to take specific actions for each fatal error (such as
 collecting all of the errors into a single report): in any case,
 the application must stop all regular processing when this
 method is invoked, since the document is no longer reliable, and
 the parser may no longer report parsing events.

**参数**

- **e** — The error information encoded as an exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ErrorHandler#fatalError
- org.xml.sax.SAXParseException
