---
id: "java-en-function-handler-reporterror"
language: "java"
lang: "en"
category: "function"
name: "Handler.reportError"
signature: "protected void reportError(String msg, Exception ex, int code)"
title: "Handler.reportError"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.reportError

```java
protected void reportError(String msg, Exception ex, int code)
```

Protected convenience method to report an error to this Handler's
 ErrorManager.

**参数**

- **msg** — a descriptive string (may be null)
- **ex** — an exception (may be null)
- **code** — an error code defined in ErrorManager
