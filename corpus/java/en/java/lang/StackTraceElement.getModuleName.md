---
id: "java-en-function-stacktraceelement-getmodulename"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getModuleName"
signature: "public String getModuleName()"
title: "StackTraceElement.getModuleName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getModuleName

```java
public String getModuleName()
```

Returns the module name of the module containing the execution point
 represented by this stack trace element.

**返回**

- the module name of the `Module` containing the execution point represented by this stack trace element; `null` if the module name is not available.

**参见**

- Module#getName()

> *Since 9*
