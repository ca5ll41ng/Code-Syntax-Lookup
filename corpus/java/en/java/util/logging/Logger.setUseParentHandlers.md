---
id: "java-en-function-logger-setuseparenthandlers"
language: "java"
lang: "en"
category: "function"
name: "Logger.setUseParentHandlers"
signature: "public void setUseParentHandlers(boolean useParentHandlers)"
title: "Logger.setUseParentHandlers"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.setUseParentHandlers

```java
public void setUseParentHandlers(boolean useParentHandlers)
```

Specify whether or not this logger should send its output
 to its parent Logger.  This means that any LogRecords will
 also be written to the parent's Handlers, and potentially
 to its parent, recursively up the namespace.

**参数**

- **useParentHandlers** — true if output is to be sent to the logger's parent.
