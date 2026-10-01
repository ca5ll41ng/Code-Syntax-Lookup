---
id: "java-en-function-uninitializedverificationtypeinfo-of"
language: "java"
lang: "en"
category: "function"
name: "UninitializedVerificationTypeInfo.of"
signature: "public static UninitializedVerificationTypeInfo of(Label newTarget)"
title: "UninitializedVerificationTypeInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapFrameInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UninitializedVerificationTypeInfo.of

```java
public static UninitializedVerificationTypeInfo of(Label newTarget)
```

{@return an uninitialized verification type info}

**参数**

- **newTarget** — the label immediately before the `NEW new` instruction that creates this uninitialized object
