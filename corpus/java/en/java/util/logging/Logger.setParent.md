---
id: "java-en-function-logger-setparent"
language: "java"
lang: "en"
category: "function"
name: "Logger.setParent"
signature: "public void setParent(Logger parent)"
title: "Logger.setParent"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.setParent

```java
public void setParent(Logger parent)
```

Set the parent for this Logger.  This method is used by
 the LogManager to update a Logger when the namespace changes.
 

 It should not be called from application code.

**参数**

- **parent** — the new parent logger
