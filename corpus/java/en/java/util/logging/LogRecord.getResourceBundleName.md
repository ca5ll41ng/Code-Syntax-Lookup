---
id: "java-en-function-logrecord-getresourcebundlename"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getResourceBundleName"
signature: "public String getResourceBundleName()"
title: "LogRecord.getResourceBundleName"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getResourceBundleName

```java
public String getResourceBundleName()
```

Get the localization resource bundle name
 

 This is the name for the ResourceBundle that should be
 used to localize the message string before formatting it.
 The result may be null if the message is not localizable.

**返回**

- the localization resource bundle name
