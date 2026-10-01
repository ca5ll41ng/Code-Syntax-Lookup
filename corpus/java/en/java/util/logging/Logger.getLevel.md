---
id: "java-en-function-logger-getlevel"
language: "java"
lang: "en"
category: "function"
name: "Logger.getLevel"
signature: "public Level getLevel()"
title: "Logger.getLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getLevel

```java
public Level getLevel()
```

Get the log Level that has been specified for this Logger.
 The result may be null, which means that this logger's
 effective level will be inherited from its parent.

**返回**

- this Logger's level
