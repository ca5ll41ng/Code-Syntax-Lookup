---
id: "java-en-function-handler-seterrormanager"
language: "java"
lang: "en"
category: "function"
name: "Handler.setErrorManager"
signature: "public synchronized void setErrorManager(ErrorManager em)"
title: "Handler.setErrorManager"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.setErrorManager

```java
public synchronized void setErrorManager(ErrorManager em)
```

Define an ErrorManager for this Handler.
 

 The ErrorManager's "error" method will be invoked if any
 errors occur while using this Handler.

**参数**

- **em** — the new ErrorManager
