---
id: "java-en-function-defaulthandler-error"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.error"
signature: "public void error (SAXParseException e) throws SAXException"
title: "DefaultHandler.error"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.error

```java
public void error (SAXParseException e) throws SAXException
```

Receive notification of a recoverable parser error.

 

The default implementation does nothing.  Application writers
 may override this method in a subclass to take specific actions
 for each error, such as inserting the message in a log file or
 printing it to the console.

**参数**

- **e** — The error information encoded as an exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ErrorHandler#warning
- org.xml.sax.SAXParseException
