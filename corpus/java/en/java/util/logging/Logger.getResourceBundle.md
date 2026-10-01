---
id: "java-en-function-logger-getresourcebundle"
language: "java"
lang: "en"
category: "function"
name: "Logger.getResourceBundle"
signature: "public ResourceBundle getResourceBundle()"
title: "Logger.getResourceBundle"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getResourceBundle

```java
public ResourceBundle getResourceBundle()
```

Retrieve the localization resource bundle for this
 logger.
 This method will return a `ResourceBundle` that was either
 set by the `setResourceBundle(java.util.ResourceBundle) setResourceBundle` method or
 mapped from the
 the resource bundle name set via the `getLogger(java.lang.String, java.lang.String) getLogger` factory
 method for the current default locale.
 
Note that if the result is `null`, then the Logger will use a resource
 bundle or resource bundle name inherited from its parent.

**返回**

- localization bundle (may be `null`)
