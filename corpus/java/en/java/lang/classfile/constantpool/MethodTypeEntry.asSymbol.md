---
id: "java-en-function-methodtypeentry-assymbol"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeEntry.asSymbol"
signature: "MethodTypeDesc asSymbol()"
title: "MethodTypeEntry.asSymbol"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/MethodTypeEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeEntry.asSymbol

```java
MethodTypeDesc asSymbol()
```

{@return a symbolic descriptor for the `descriptor() method
 type`}

 If only symbol equivalence is desired, `matches(MethodTypeDesc)
 matches` should be used.  It requires reduced parsing and can
 improve `class` file reading performance.
