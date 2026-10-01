---
id: "java-en-function-constantpoolbuilder-constantvalueentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.constantValueEntry"
signature: "default ConstantValueEntry constantValueEntry(ConstantDesc c)"
title: "ConstantPoolBuilder.constantValueEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.constantValueEntry

```java
default ConstantValueEntry constantValueEntry(ConstantDesc c)
```

{@return a `ConstantValueEntry` describing the provided constant
 `Integer`, `Long`, `Float`, `Double`, or `String` value}

**参数**

- **c** — the provided constant value

**异常**

- **IllegalArgumentException** — if the value is not one of `Integer`, `Long`, `Float`, `Double`, or `String`

**参见**

- ConstantValueEntry#constantValue() ConstantValueEntry::constantValue
- ConstantValueAttribute#of(ConstantDesc) ConstantValueAttribute::of(ConstantDesc)
