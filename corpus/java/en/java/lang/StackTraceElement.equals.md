---
id: "java-en-function-stacktraceelement-equals"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.equals"
signature: "public boolean equals(Object obj)"
title: "StackTraceElement.equals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.equals

```java
public boolean equals(Object obj)
```

Returns true if the specified object is another
 `StackTraceElement` instance representing the same execution
 point as this instance.  Two stack trace elements `a` and
 `b` are equal if and only if:
 
```
`equals(a.getClassLoaderName(), b.getClassLoaderName()) &&
     equals(a.getModuleName(), b.getModuleName()) &&
     equals(a.getModuleVersion(), b.getModuleVersion()) &&
     equals(a.getClassName(), b.getClassName()) &&
     equals(a.getMethodName(), b.getMethodName())
     equals(a.getFileName(), b.getFileName()) &&
     a.getLineNumber() == b.getLineNumber()

 `
```

 where `equals` has the semantics of `equals(Object, Object) Objects.equals`.

**参数**

- **obj** — the object to be compared with this stack trace element.

**返回**

- true if the specified object is another `StackTraceElement` instance representing the same execution point as this instance.
