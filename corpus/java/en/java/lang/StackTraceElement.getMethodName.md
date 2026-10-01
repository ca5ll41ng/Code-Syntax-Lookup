---
id: "java-en-function-stacktraceelement-getmethodname"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getMethodName"
signature: "public String getMethodName()"
title: "StackTraceElement.getMethodName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getMethodName

```java
public String getMethodName()
```

Returns the name of the method containing the execution point
 represented by this stack trace element.  If the execution point is
 contained in an instance or class initializer, this method will return
 the appropriate special method name, `ConstantDescs#INIT_NAME`
 or `ConstantDescs#CLASS_INIT_NAME`, as per Section {@jvms 3.9}
 of The Java Virtual Machine Specification.

**返回**

- the name of the method containing the execution point represented by this stack trace element.
