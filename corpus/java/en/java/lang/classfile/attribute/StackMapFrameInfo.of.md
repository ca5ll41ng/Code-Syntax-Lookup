---
id: "java-en-function-stackmapframeinfo-of"
language: "java"
lang: "en"
category: "function"
name: "StackMapFrameInfo.of"
signature: "public static StackMapFrameInfo of(Label target, List<VerificationTypeInfo> locals, List<VerificationTypeInfo> stack)"
title: "StackMapFrameInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapFrameInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackMapFrameInfo.of

```java
public static StackMapFrameInfo of(Label target, List<VerificationTypeInfo> locals, List<VerificationTypeInfo> stack)
```

{@return a new stack map frame}

**参数**

- **target** — the location of the frame
- **locals** — the complete list of frame locals
- **stack** — the complete frame stack

**异常**

- **IllegalArgumentException** — if the number of types in `locals` or `stack` exceeds the limit of `#u2 u2`
