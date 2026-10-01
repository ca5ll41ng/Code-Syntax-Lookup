---
id: "java-en-function-defaulthandler-warning"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.warning"
signature: "public void warning (SAXParseException e) throws SAXException"
title: "DefaultHandler.warning"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.warning

```java
public void warning (SAXParseException e) throws SAXException
```

Receive notification of a parser warning.

 

The default implementation does nothing.  Application writers
 may override this method in a subclass to take specific actions
 for each warning, such as inserting the message in a log file or
 printing it to the console.

**参数**

- **e** — The warning information encoded as an exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ErrorHandler#warning
- org.xml.sax.SAXParseException
