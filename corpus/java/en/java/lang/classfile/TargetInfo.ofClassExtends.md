---
id: "java-en-function-targetinfo-ofclassextends"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofClassExtends"
signature: "static SupertypeTarget ofClassExtends(int supertypeIndex)"
title: "TargetInfo.ofClassExtends"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofClassExtends

```java
static SupertypeTarget ofClassExtends(int supertypeIndex)
```

{@return a target for annotations on the type of an "extends" or "implements" clause}

**参数**

- **supertypeIndex** — the index into the interfaces array or 65535 to indicate it is the superclass

**异常**

- **IllegalArgumentException** — if `supertypeIndex` is not `#u2 u2`
