---
id: "java-en-function-domerrorhandler-handleerror"
language: "java"
lang: "en"
category: "function"
name: "DOMErrorHandler.handleError"
signature: "public boolean handleError(DOMError error)"
title: "DOMErrorHandler.handleError"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMErrorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMErrorHandler.handleError

```java
public boolean handleError(DOMError error)
```

This method is called on the error handler when an error occurs.
 
 If an exception is thrown from this method, it is considered to be
 equivalent of returning true.

**参数**

- **error** — The error object that describes the error. This object may be reused by the DOM implementation across multiple calls to the handleError method.

**返回**

- If the handleError method returns false, the DOM implementation should stop the current processing when possible. If the method returns true, the processing may continue depending on DOMError.severity.
