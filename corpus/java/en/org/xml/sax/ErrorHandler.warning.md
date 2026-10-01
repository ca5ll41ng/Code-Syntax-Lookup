---
id: "java-en-function-errorhandler-warning"
language: "java"
lang: "en"
category: "function"
name: "ErrorHandler.warning"
signature: "public abstract void warning (SAXParseException exception) throws SAXException"
title: "ErrorHandler.warning"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ErrorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorHandler.warning

```java
public abstract void warning (SAXParseException exception) throws SAXException
```

Receive notification of a warning.

 

SAX parsers will use this method to report conditions that
 are not errors or fatal errors as defined by the XML
 recommendation.  The default behaviour is to take no
 action.

 

The SAX parser must continue to provide normal parsing events
 after invoking this method: it should still be possible for the
 application to process the document through to the end.

 

Filters may use this method to report other, non-XML warnings
 as well.

**参数**

- **exception** — The warning information encapsulated in a SAX parse exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.SAXParseException
