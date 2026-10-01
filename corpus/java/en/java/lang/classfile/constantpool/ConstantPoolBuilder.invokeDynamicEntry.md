---
id: "java-en-function-constantpoolbuilder-invokedynamicentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.invokeDynamicEntry"
signature: "default InvokeDynamicEntry invokeDynamicEntry(DynamicCallSiteDesc dcsd)"
title: "ConstantPoolBuilder.invokeDynamicEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.invokeDynamicEntry

```java
default InvokeDynamicEntry invokeDynamicEntry(DynamicCallSiteDesc dcsd)
```

{@return an `InvokeDynamicEntry` describing the same dynamic call
 site as the provided `DynamicCallSiteDesc`}

**参数**

- **dcsd** — the symbolic descriptor of the dynamic call site

**参见**

- InvokeDynamicEntry#asSymbol() InvokeDynamicEntry::asSymbol
