---
id: "java-en-function-logger-log"
language: "java"
lang: "en"
category: "function"
name: "Logger.log"
signature: "public default void log(Level level, String msg)"
title: "Logger.log"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.log

```java
public default void log(Level level, String msg)
```

Logs a message.

 `this.log(level, (ResourceBundle)null, msg, (Object[])null);`

**参数**

- **level** — the log message level.
- **msg** — the string message (or a key in the message catalog, if this logger is a `getLocalizedLogger(java.lang.String, java.util.ResourceBundle, java.lang.Module) localized logger`); can be `null`.

**异常**

- **NullPointerException** — if `level` is `null`.
