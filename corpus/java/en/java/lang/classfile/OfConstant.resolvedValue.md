---
id: "java-en-function-ofconstant-resolvedvalue"
language: "java"
lang: "en"
category: "function"
name: "OfConstant.resolvedValue"
signature: "Constable resolvedValue()"
title: "OfConstant.resolvedValue"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfConstant.resolvedValue

```java
Constable resolvedValue()
```

{@return the resolved live constant value, as an object} The type of
 the returned value may be a wrapper class or `String`.

 The returned object, despite being `Constable`, may not
 `describeConstable() describe` the right constant
 for encoding the annotation value in a class file. For example,
 `Character` returned by `OfChar` describes itself as a
 `DynamicConstantPoolEntry`, but it is actually backed by
 `IntegerEntry` in annotation format.
 Use `constant constant` for a correct constant pool representation.
