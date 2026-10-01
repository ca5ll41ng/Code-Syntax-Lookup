---
id: "java-en-function-collationkey-tobytearray"
language: "java"
lang: "en"
category: "function"
name: "CollationKey.toByteArray"
signature: "public abstract byte[] toByteArray()"
title: "CollationKey.toByteArray"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationKey.toByteArray

```java
public abstract byte[] toByteArray()
```

Converts the CollationKey to a sequence of bits. If two CollationKeys
 could be legitimately compared, then one could compare the byte arrays
 for each of those keys to obtain the same result.  Byte arrays are
 organized most significant byte first.

**返回**

- a byte array representation of the CollationKey
