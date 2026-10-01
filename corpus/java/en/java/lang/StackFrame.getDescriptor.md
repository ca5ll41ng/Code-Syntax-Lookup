---
id: "java-en-function-stackframe-getdescriptor"
language: "java"
lang: "en"
category: "function"
name: "StackFrame.getDescriptor"
signature: "public default String getDescriptor()"
title: "StackFrame.getDescriptor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackFrame.getDescriptor

```java
public default String getDescriptor()
```

Returns the descriptor of the method represented by
 this stack frame as defined by
 The Java Virtual Machine Specification.

 The default implementation throws `UnsupportedOperationException`.

**返回**

- the descriptor of the method represented by this stack frame

**异常**

- **UnsupportedOperationException** — if the `StackWalker` is configured with `DROP_METHOD_INFO DROP_METHOD_INFO` option

**参见**

- MethodType#fromMethodDescriptorString(String, ClassLoader)
- MethodType#toMethodDescriptorString()

> *Since 10*
