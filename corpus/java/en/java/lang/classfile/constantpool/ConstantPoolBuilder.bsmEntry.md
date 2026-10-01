---
id: "java-en-function-constantpoolbuilder-bsmentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.bsmEntry"
signature: "default BootstrapMethodEntry bsmEntry(DirectMethodHandleDesc methodReference, List<ConstantDesc> arguments)"
title: "ConstantPoolBuilder.bsmEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.bsmEntry

```java
default BootstrapMethodEntry bsmEntry(DirectMethodHandleDesc methodReference, List<ConstantDesc> arguments)
```

{@return a `BootstrapMethodEntry` describing the provided
 bootstrap method and arguments}

**参数**

- **methodReference** — the bootstrap method
- **arguments** — the arguments

**异常**

- **IllegalArgumentException** — if the number of arguments exceeds the limit of `#u2 u2`
