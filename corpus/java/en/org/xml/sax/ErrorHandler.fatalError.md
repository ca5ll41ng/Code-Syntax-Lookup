---
id: "java-en-function-errorhandler-fatalerror"
language: "java"
lang: "en"
category: "function"
name: "ErrorHandler.fatalError"
signature: "public abstract void fatalError (SAXParseException exception) throws SAXException"
title: "ErrorHandler.fatalError"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ErrorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorHandler.fatalError

```java
public abstract void fatalError (SAXParseException exception) throws SAXException
```

Receive notification of a non-recoverable, fatal error.

 

 As defined in section 1.2 of the W3C XML 1.0 Recommendation, fatal errors
 are those that would make it impossible for a parser to continue normal
 processing. These include violation of a well-formedness constraint,
 invalid encoding, and forbidden structural errors as described in the
 W3C XML 1.0 Recommendation.

 normal processing after reporting a fatal error and may stop by throwing
 a `SAXException` without calling `endDocument`.
 In addition, the parser cannot be expected to be able to return accurate
 information about the logical structure on the rest of the document even
 if it may be able to resume parsing.

 throwing a `SAXException`, or implement a feature that can direct
 it to continue after a fatal error. In the later case, it may report
 events on the rest of the document without any guarantee of correctness.

**参数**

- **exception** — The error information encapsulated in a `SAXParseException`.

**异常**

- **SAXException** — if the application chooses to discontinue the parsing
