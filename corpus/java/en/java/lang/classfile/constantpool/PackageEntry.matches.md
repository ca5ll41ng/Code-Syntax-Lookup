---
id: "java-en-function-packageentry-matches"
language: "java"
lang: "en"
category: "function"
name: "PackageEntry.matches"
signature: "boolean matches(PackageDesc desc)"
title: "PackageEntry.matches"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PackageEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PackageEntry.matches

```java
boolean matches(PackageDesc desc)
```

{@return whether this entry describes the given package}
 

 This method always returns `false` for a package descriptor
 representing an unnamed package.

**参数**

- **desc** — the package descriptor

> *Since 25*
