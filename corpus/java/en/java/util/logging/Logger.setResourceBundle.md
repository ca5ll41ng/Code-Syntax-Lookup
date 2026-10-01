---
id: "java-en-function-logger-setresourcebundle"
language: "java"
lang: "en"
category: "function"
name: "Logger.setResourceBundle"
signature: "public void setResourceBundle(ResourceBundle bundle)"
title: "Logger.setResourceBundle"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.setResourceBundle

```java
public void setResourceBundle(ResourceBundle bundle)
```

Sets a resource bundle on this logger.
 All messages will be logged using the given resource bundle for its
 specific `getLocale locale`.

**参数**

- **bundle** — The resource bundle that this logger shall use.

**异常**

- **NullPointerException** — if the given bundle is `null`.
- **IllegalArgumentException** — if the given bundle doesn't have a `getBaseBundleName base name`, or if this logger already has a resource bundle set but the given bundle has a different base name.

> *Since 1.8*
