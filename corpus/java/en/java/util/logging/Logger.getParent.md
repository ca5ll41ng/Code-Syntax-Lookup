---
id: "java-en-function-logger-getparent"
language: "java"
lang: "en"
category: "function"
name: "Logger.getParent"
signature: "public Logger getParent()"
title: "Logger.getParent"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getParent

```java
public Logger getParent()
```

Return the parent for this Logger.
 

 This method returns the nearest extant parent in the namespace.
 Thus if a Logger is called "a.b.c.d", and a Logger called "a.b"
 has been created but no logger "a.b.c" exists, then a call of
 getParent on the Logger "a.b.c.d" will return the Logger "a.b".
 

 The result will be null if it is called on the root Logger
 in the namespace.

**返回**

- nearest existing parent Logger
