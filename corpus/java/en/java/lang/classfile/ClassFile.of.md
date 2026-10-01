---
id: "java-en-function-classfile-of"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.of"
signature: "static ClassFile of()"
title: "ClassFile.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.of

```java
static ClassFile of()
```

{@return a context with default options}  Each subtype of `Option`
 specifies its default.
 

 The default `AttributeMapperOption` and `ClassHierarchyResolverOption` may be unsuitable for some `class`
 files and result in parsing or generation errors.
