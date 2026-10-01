---
id: "java-en-function-moduleentry-assymbol"
language: "java"
lang: "en"
category: "function"
name: "ModuleEntry.asSymbol"
signature: "ModuleDesc asSymbol()"
title: "ModuleEntry.asSymbol"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ModuleEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleEntry.asSymbol

```java
ModuleDesc asSymbol()
```

{@return a symbolic descriptor for the `name() module name`}

 If only symbol equivalence is desired, `matches(ModuleDesc)
 matches` should be used.  It requires reduced parsing and can
 improve `class` file reading performance.
