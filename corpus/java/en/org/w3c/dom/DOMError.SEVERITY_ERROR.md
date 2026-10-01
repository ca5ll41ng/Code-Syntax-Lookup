---
id: "java-en-function-domerror-severity_error"
language: "java"
lang: "en"
category: "function"
name: "DOMError.SEVERITY_ERROR"
signature: "public static final short SEVERITY_ERROR = 2"
title: "DOMError.SEVERITY_ERROR"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMError.SEVERITY_ERROR

```java
public static final short SEVERITY_ERROR = 2
```

The severity of the error described by the DOMError is
 error. A SEVERITY_ERROR may not cause the processing to
 stop if the error can be recovered, unless
 DOMErrorHandler.handleError() returns false.
