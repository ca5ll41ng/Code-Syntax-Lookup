---
id: "java-en-function-constantpoolbuilder-constantdynamicentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.constantDynamicEntry"
signature: "default ConstantDynamicEntry constantDynamicEntry(DynamicConstantDesc<?> dcd)"
title: "ConstantPoolBuilder.constantDynamicEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.constantDynamicEntry

```java
default ConstantDynamicEntry constantDynamicEntry(DynamicConstantDesc<?> dcd)
```

{@return a `ConstantDynamicEntry` describing the dynamic constant
 as the provided `DynamicConstantDesc`}

**参数**

- **dcd** — the symbolic descriptor of the constant

**参见**

- ConstantDynamicEntry#asSymbol() ConstantDynamicEntry::asSymbol
