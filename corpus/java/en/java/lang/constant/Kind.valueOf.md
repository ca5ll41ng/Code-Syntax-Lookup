---
id: "java-en-function-kind-valueof"
language: "java"
lang: "en"
category: "function"
name: "Kind.valueOf"
signature: "public static Kind valueOf(int refKind)"
title: "Kind.valueOf"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DirectMethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Kind.valueOf

```java
public static Kind valueOf(int refKind)
```

Returns the enumeration member with the given `refKind` field.
 Behaves as if `valueOf(refKind, false)`.  As a special case,
 if `refKind` is `REF_invokeInterface` (9) then the
 `isInterface` field will be true.

**参数**

- **refKind** — refKind of desired member

**返回**

- the matching enumeration member

**异常**

- **IllegalArgumentException** — if there is no such member
