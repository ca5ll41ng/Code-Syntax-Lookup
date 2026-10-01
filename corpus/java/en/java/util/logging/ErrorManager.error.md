---
id: "java-en-function-errormanager-error"
language: "java"
lang: "en"
category: "function"
name: "ErrorManager.error"
signature: "public void error(String msg, Exception ex, int code)"
title: "ErrorManager.error"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/ErrorManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorManager.error

```java
public void error(String msg, Exception ex, int code)
```

The error method is called when a Handler failure occurs.
 

 This method may be overridden in subclasses.  The default
 behavior in this base class is that the first call is
 reported to System.err, and subsequent calls are ignored.

**参数**

- **msg** — a descriptive string (may be null)
- **ex** — an exception (may be null)
- **code** — an error code defined in ErrorManager
