---
id: "java-en-function-errorhandler-error"
language: "java"
lang: "en"
category: "function"
name: "ErrorHandler.error"
signature: "public abstract void error (SAXParseException exception) throws SAXException"
title: "ErrorHandler.error"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ErrorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorHandler.error

```java
public abstract void error (SAXParseException exception) throws SAXException
```

Receive notification of a recoverable error.

 

This corresponds to the definition of "error" in section 1.2
 of the W3C XML 1.0 Recommendation.  For example, a validating
 parser would use this callback to report the violation of a
 validity constraint.  The default behaviour is to take no
 action.

 

The SAX parser must continue to provide normal parsing
 events after invoking this method: it should still be possible
 for the application to process the document through to the end.
 If the application cannot do so, then the parser should report
 a fatal error even if the XML recommendation does not require
 it to do so.

 

Filters may use this method to report other, non-XML errors
 as well.

**参数**

- **exception** — The error information encapsulated in a SAX parse exception.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.SAXParseException
