---
id: "java-en-function-constantpoolbuilder-packageentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.packageEntry"
signature: "PackageEntry packageEntry(Utf8Entry nameEntry)"
title: "ConstantPoolBuilder.packageEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.packageEntry

```java
PackageEntry packageEntry(Utf8Entry nameEntry)
```

{@return a `PackageEntry` referring to the provided `Utf8Entry`}  The `Utf8Entry` describes the internal form
 of the name of a package.

**参数**

- **nameEntry** — the `Utf8Entry`

**参见**

- PackageEntry#name() PackageEntry::name
