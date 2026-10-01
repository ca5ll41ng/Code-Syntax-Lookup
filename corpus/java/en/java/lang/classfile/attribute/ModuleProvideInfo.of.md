---
id: "java-en-function-moduleprovideinfo-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleProvideInfo.of"
signature: "static ModuleProvideInfo of(ClassEntry provides, List<ClassEntry> providesWith)"
title: "ModuleProvideInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleProvideInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleProvideInfo.of

```java
static ModuleProvideInfo of(ClassEntry provides, List<ClassEntry> providesWith)
```

{@return a service provision description}

**参数**

- **provides** — the service class interface
- **providesWith** — the service class implementations, must not be empty

**异常**

- **IllegalArgumentException** — if the number of implementations exceeds the limit of `#u2 u2`
