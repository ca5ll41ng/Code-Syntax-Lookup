---
id: "java-en-function-saxparseexception-saxparseexception"
language: "java"
lang: "en"
category: "function"
name: "SAXParseException.SAXParseException"
signature: "public SAXParseException (String message, Locator locator)"
title: "SAXParseException.SAXParseException"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXParseException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParseException.SAXParseException

```java
public SAXParseException (String message, Locator locator)
```

Create a new SAXParseException from a message and a Locator.

 

This constructor is especially useful when an application is
 creating its own exception from within a `org.xml.sax.ContentHandler
 ContentHandler` callback.

**参数**

- **message** — The error or warning message.
- **locator** — The locator object for the error or warning (may be null).

**参见**

- org.xml.sax.Locator
