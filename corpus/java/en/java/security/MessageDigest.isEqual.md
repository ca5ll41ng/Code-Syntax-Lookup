---
id: "java-en-function-messagedigest-isequal"
language: "java"
lang: "en"
category: "function"
name: "MessageDigest.isEqual"
signature: "public static boolean isEqual(byte[] digesta, byte[] digestb)"
title: "MessageDigest.isEqual"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigest.isEqual

```java
public static boolean isEqual(byte[] digesta, byte[] digestb)
```

Compares two digests for equality. Two digests are equal if they have
 the same length and all bytes at corresponding positions are equal.

 All bytes in `digesta` are examined to determine equality, unless
 `digestb` is `null` or has a length of zero bytes. If
 `digestb` is not `null` and does not have a length of zero
 bytes, then the calculation time depends only on the length of
 `digesta`. It does not depend on the length of `digestb` or
 the contents of `digesta` and `digestb`.

**参数**

- **digesta** — one of the digests to compare.
- **digestb** — the other digest to compare.

**返回**

- `true` if the digests are equal, `false` otherwise.
