---
id: "java-en-function-typekind-fromdescriptor"
language: "java"
lang: "en"
category: "function"
name: "TypeKind.fromDescriptor"
signature: "public static TypeKind fromDescriptor(CharSequence s)"
title: "TypeKind.fromDescriptor"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeKind.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeKind.fromDescriptor

```java
public static TypeKind fromDescriptor(CharSequence s)
```

{@return the type associated with the specified field descriptor}

**参数**

- **s** — the field descriptor

**异常**

- **IllegalArgumentException** — only if the descriptor is not valid
