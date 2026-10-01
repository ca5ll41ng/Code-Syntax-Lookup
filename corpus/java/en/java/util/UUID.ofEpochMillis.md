---
id: "java-en-function-uuid-ofepochmillis"
language: "java"
lang: "en"
category: "function"
name: "UUID.ofEpochMillis"
signature: "public static UUID ofEpochMillis(long timestamp)"
title: "UUID.ofEpochMillis"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.ofEpochMillis

```java
public static UUID ofEpochMillis(long timestamp)
```

Creates a type 7 UUID (UUIDv7) `UUID` from the given Unix Epoch timestamp.

 The returned `UUID` will have the given `timestamp` in
 the first 6 bytes, followed by the version and variant bits representing `UUIDv7`,
 and the remaining bytes will contain random data from a cryptographically strong
 pseudo-random number generator.

 in the most significant 48 bits, allocating the required version (4 bits) and variant (2-bits)
 and filling the remaining 74 bits with random bits. As such, this method rejects `timestamp`
 values that do not fit into 48 bits.
 

 Monotonicity (each subsequent value being greater than the last) is a primary characteristic
 of `UUIDv7` values. This is due to the `timestamp` value being part of the `UUID`.
 Callers of this method that wish to generate monotonic `UUIDv7` values are expected to
 ensure that the given `timestamp` value is monotonic.

**参数**

- **timestamp** — the number of milliseconds since midnight 1 Jan 1970 UTC, leap seconds excluded.

**返回**

- a `UUID` constructed using the given `timestamp`

**异常**

- **IllegalArgumentException** — if the timestamp is negative or greater than `(1L << 48) - 1`

> *Since 26*
