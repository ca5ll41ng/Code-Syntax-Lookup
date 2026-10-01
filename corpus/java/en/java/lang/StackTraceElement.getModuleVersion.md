---
id: "java-en-function-stacktraceelement-getmoduleversion"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getModuleVersion"
signature: "public String getModuleVersion()"
title: "StackTraceElement.getModuleVersion"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getModuleVersion

```java
public String getModuleVersion()
```

Returns the module version of the module containing the execution point
 represented by this stack trace element.

**返回**

- the module version of the `Module` containing the execution point represented by this stack trace element; `null` if the module version is not available.

**参见**

- java.lang.module.ModuleDescriptor.Version

> *Since 9*
