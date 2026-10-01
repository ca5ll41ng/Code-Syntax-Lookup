---
id: "java-en-function-classbuilder-withmethodbody"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.withMethodBody"
signature: "default ClassBuilder withMethodBody(Utf8Entry name, Utf8Entry descriptor, int methodFlags, Consumer<? super CodeBuilder> handler)"
title: "ClassBuilder.withMethodBody"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.withMethodBody

```java
default ClassBuilder withMethodBody(Utf8Entry name, Utf8Entry descriptor, int methodFlags, Consumer<? super CodeBuilder> handler)
```

Adds a method, with only access flags and a `CodeModel`.  The bit
 for `ACC_STATIC ACC_STATIC` flag cannot be modified by
 the `handler` later, and must be set through `methodFlags`.
 

 This method behaves as if:
 {@snippet lang=java :
 // @link substring=withMethod target="#withMethod(Utf8Entry, Utf8Entry, int, Consumer)" :
 withMethod(name, descriptor, methodFlags, mb -> mb.withCode(handler)) // @link substring=withCode target="MethodBuilder#withCode"
 }

**参数**

- **name** — the method name
- **descriptor** — the method descriptor
- **methodFlags** — the access flags as a bit mask, with the `ACC_STATIC` bit definitely set
- **handler** — handler to supply the contents of the method body

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `methodFlags` is not `#u2 u2`

**参见**

- MethodModel
