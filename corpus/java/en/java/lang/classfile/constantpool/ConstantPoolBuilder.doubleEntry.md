---
id: "java-en-function-constantpoolbuilder-doubleentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.doubleEntry"
signature: "DoubleEntry doubleEntry(double value)"
title: "ConstantPoolBuilder.doubleEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.doubleEntry

```java
DoubleEntry doubleEntry(double value)
```

{@return a `DoubleEntry` describing the provided value}
 

 All NaN values of the `double` may or may not be collapsed into a
 single `NaN "canonical" NaN value`.

**参数**

- **value** — the value

**参见**

- DoubleEntry#doubleValue() DoubleEntry::doubleValue
