---
id: "java-en-function-system-getlogger"
language: "java"
lang: "en"
category: "function"
name: "System.getLogger"
signature: "public abstract Logger getLogger(String name, Module module)"
title: "System.getLogger"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getLogger

```java
public abstract Logger getLogger(String name, Module module)
```

Returns an instance of `Logger Logger`
 for the given `module`.

**参数**

- **name** — the name of the logger.
- **module** — the module for which the logger is being requested.

**返回**

- a `Logger logger` suitable for use within the given module.

**异常**

- **NullPointerException** — if `name` is `null` or `module` is `null`.
