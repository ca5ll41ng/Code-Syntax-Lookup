---
id: "java-en-function-typepathcomponent-of"
language: "java"
lang: "en"
category: "function"
name: "TypePathComponent.of"
signature: "static TypePathComponent of(Kind typePathKind, int typeArgumentIndex)"
title: "TypePathComponent.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypePathComponent.of

```java
static TypePathComponent of(Kind typePathKind, int typeArgumentIndex)
```

{@return type path component of an annotation}

**参数**

- **typePathKind** — the kind of path element
- **typeArgumentIndex** — the type argument index

**异常**

- **IllegalArgumentException** — if `typeArgumentIndex` is not `#u1 u1`
