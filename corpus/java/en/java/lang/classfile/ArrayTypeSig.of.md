---
id: "java-en-function-arraytypesig-of"
language: "java"
lang: "en"
category: "function"
name: "ArrayTypeSig.of"
signature: "public static ArrayTypeSig of(Signature componentSignature)"
title: "ArrayTypeSig.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayTypeSig.of

```java
public static ArrayTypeSig of(Signature componentSignature)
```

{@return an array type with the given component type}

**参数**

- **componentSignature** — the component type

**异常**

- **IllegalArgumentException** — if the component type is void
