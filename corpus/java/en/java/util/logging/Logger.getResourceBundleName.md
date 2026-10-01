---
id: "java-en-function-logger-getresourcebundlename"
language: "java"
lang: "en"
category: "function"
name: "Logger.getResourceBundleName"
signature: "public String getResourceBundleName()"
title: "Logger.getResourceBundleName"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getResourceBundleName

```java
public String getResourceBundleName()
```

Retrieve the localization resource bundle name for this
 logger.
 This is either the name specified through the `getLogger(java.lang.String, java.lang.String) getLogger` factory method,
 or the `getBaseBundleName() base name` of the
 ResourceBundle set through `setResourceBundle(java.util.ResourceBundle) setResourceBundle` method.
 
Note that if the result is `null`, then the Logger will use a resource
 bundle or resource bundle name inherited from its parent.

**返回**

- localization bundle name (may be `null`)
