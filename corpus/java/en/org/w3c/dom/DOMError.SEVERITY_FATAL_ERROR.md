---
id: "java-en-function-domerror-severity_fatal_error"
language: "java"
lang: "en"
category: "function"
name: "DOMError.SEVERITY_FATAL_ERROR"
signature: "public static final short SEVERITY_FATAL_ERROR = 3"
title: "DOMError.SEVERITY_FATAL_ERROR"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMError.SEVERITY_FATAL_ERROR

```java
public static final short SEVERITY_FATAL_ERROR = 3
```

The severity of the error described by the DOMError is
 fatal error. A SEVERITY_FATAL_ERROR will cause the
 normal processing to stop. The return value of
 DOMErrorHandler.handleError() is ignored unless the
 implementation chooses to continue, in which case the behavior
 becomes undefined.
