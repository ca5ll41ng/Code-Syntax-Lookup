---
id: "java-en-function-constantpool-size"
language: "java"
lang: "en"
category: "function"
name: "ConstantPool.size"
signature: "int size()"
title: "ConstantPool.size"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPool.size

```java
int size()
```

{@return the exclusive upper bound of the valid indices of this constant
 pool}  The actual number of entries is lower because `0`, `size()` are not valid, and a valid index may be unusable.

**参见**

- ##index Index in the Constant Pool
