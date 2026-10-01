---
id: "java-en-function-methodhandleinfo-referencekindtostring"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.referenceKindToString"
signature: "public static String referenceKindToString(int referenceKind)"
title: "MethodHandleInfo.referenceKindToString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.referenceKindToString

```java
public static String referenceKindToString(int referenceKind)
```

Returns the descriptive name of the given reference kind,
 as defined in the table above.
 The conventional prefix "REF_" is omitted.

**参数**

- **referenceKind** — an integer code for a kind of reference used to access a class member

**返回**

- a mixed-case string such as `"getField"`

**异常**

- **IllegalArgumentException** — if the argument is not a valid reference kind number
