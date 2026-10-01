---
id: "java-en-function-classentry-matches"
language: "java"
lang: "en"
category: "function"
name: "ClassEntry.matches"
signature: "boolean matches(ClassDesc desc)"
title: "ClassEntry.matches"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ClassEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassEntry.matches

```java
boolean matches(ClassDesc desc)
```

{@return whether this entry describes the given reference type}  Returns
 `false` if `desc` is primitive.

**参数**

- **desc** — the reference type

> *Since 25*
