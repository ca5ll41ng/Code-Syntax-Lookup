---
id: "java-en-function-enclosingmethodattribute-of"
language: "java"
lang: "en"
category: "function"
name: "EnclosingMethodAttribute.of"
signature: "static EnclosingMethodAttribute of(ClassEntry className, Optional<NameAndTypeEntry> method)"
title: "EnclosingMethodAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/EnclosingMethodAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnclosingMethodAttribute.of

```java
static EnclosingMethodAttribute of(ClassEntry className, Optional<NameAndTypeEntry> method)
```

{@return an `EnclosingMethod` attribute}

**参数**

- **className** — the class name
- **method** — the name and type of the enclosing method or `Optional.empty()` if the class is not immediately enclosed by exactly one method or constructor
