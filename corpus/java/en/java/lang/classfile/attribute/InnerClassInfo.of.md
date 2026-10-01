---
id: "java-en-function-innerclassinfo-of"
language: "java"
lang: "en"
category: "function"
name: "InnerClassInfo.of"
signature: "static InnerClassInfo of(ClassEntry innerClass, Optional<ClassEntry> outerClass, Optional<Utf8Entry> innerName, int flags)"
title: "InnerClassInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/InnerClassInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InnerClassInfo.of

```java
static InnerClassInfo of(ClassEntry innerClass, Optional<ClassEntry> outerClass, Optional<Utf8Entry> innerName, int flags)
```

{@return a nested class description}

**参数**

- **innerClass** — the nested class being described
- **outerClass** — the class that has the nested class as a member, if it exists
- **innerName** — the simple name of the nested class, if it is not anonymous
- **flags** — the inner class access flags

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`
