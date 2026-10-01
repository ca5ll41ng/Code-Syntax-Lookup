---
id: "java-en-function-logger-logger"
language: "java"
lang: "en"
category: "function"
name: "Logger.Logger"
signature: "protected Logger(String name, String resourceBundleName)"
title: "Logger.Logger"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.Logger

```java
protected Logger(String name, String resourceBundleName)
```

Protected method to construct a logger for a named subsystem.
 

 The logger will be initially configured with a null Level
 and with useParentHandlers set to true.

**参数**

- **name** — A name for the logger.  This should be a dot-separated name and should normally be based on the package name or class name of the subsystem, such as java.net or javax.swing.  It may be null for anonymous Loggers.
- **resourceBundleName** — name of ResourceBundle to be used for localizing messages for this logger.  May be null if none of the messages require localization.

**异常**

- **MissingResourceException** — if the resourceBundleName is non-null and no corresponding resource can be found.
