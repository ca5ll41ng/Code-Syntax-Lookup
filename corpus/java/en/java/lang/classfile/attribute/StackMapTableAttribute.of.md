---
id: "java-en-function-stackmaptableattribute-of"
language: "java"
lang: "en"
category: "function"
name: "StackMapTableAttribute.of"
signature: "public static StackMapTableAttribute of(List<StackMapFrameInfo> entries)"
title: "StackMapTableAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackMapTableAttribute.of

```java
public static StackMapTableAttribute of(List<StackMapFrameInfo> entries)
```

{@return a stack map table attribute}

**参数**

- **entries** — the stack map frames

**异常**

- **IllegalArgumentException** — if the number of frames exceeds the limit of `#u2 u2`
