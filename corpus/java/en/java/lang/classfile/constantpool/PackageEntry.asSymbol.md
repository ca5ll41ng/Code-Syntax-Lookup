---
id: "java-en-function-packageentry-assymbol"
language: "java"
lang: "en"
category: "function"
name: "PackageEntry.asSymbol"
signature: "PackageDesc asSymbol()"
title: "PackageEntry.asSymbol"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PackageEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PackageEntry.asSymbol

```java
PackageDesc asSymbol()
```

{@return a symbolic descriptor for the `name() package name`}

 If only symbol equivalence is desired, `matches(PackageDesc)
 matches` should be used.  It requires reduced parsing and can
 improve `class` file reading performance.
