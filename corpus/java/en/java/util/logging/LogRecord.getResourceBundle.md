---
id: "java-en-function-logrecord-getresourcebundle"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getResourceBundle"
signature: "public ResourceBundle getResourceBundle()"
title: "LogRecord.getResourceBundle"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getResourceBundle

```java
public ResourceBundle getResourceBundle()
```

Get the localization resource bundle
 

 This is the ResourceBundle that should be used to localize
 the message string before formatting it.  The result may
 be null if the message is not localizable, or if no suitable
 ResourceBundle is available.

**返回**

- the localization resource bundle
