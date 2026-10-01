---
id: "java-en-function-securitymanager-getclasscontext"
language: "java"
lang: "en"
category: "function"
name: "SecurityManager.getClassContext"
signature: "protected Class<?>[] getClassContext()"
title: "SecurityManager.getClassContext"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/SecurityManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecurityManager.getClassContext

```java
protected Class<?>[] getClassContext()
```

Returns the current execution stack as an array of classes.
 

 The length of the array is the number of methods on the execution
 stack. The element at index `0` is the class of the
 currently executing method, the element at index `1` is
 the class of that method's caller, and so on.

 for this method.

**返回**

- the execution stack.
