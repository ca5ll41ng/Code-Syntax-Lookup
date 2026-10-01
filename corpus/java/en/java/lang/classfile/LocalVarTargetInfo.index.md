---
id: "java-en-function-localvartargetinfo-index"
language: "java"
lang: "en"
category: "function"
name: "LocalVarTargetInfo.index"
signature: "int index()"
title: "LocalVarTargetInfo.index"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVarTargetInfo.index

```java
int index()
```

The given local variable must be at index in the local variable array of the current frame.

 If the local variable at index is of type double or long, it occupies both index and index + 1.

**返回**

- the index into the local variables
