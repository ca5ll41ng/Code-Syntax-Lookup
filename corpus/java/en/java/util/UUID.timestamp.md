---
id: "java-en-function-uuid-timestamp"
language: "java"
lang: "en"
category: "function"
name: "UUID.timestamp"
signature: "public long timestamp()"
title: "UUID.timestamp"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.timestamp

```java
public long timestamp()
```

The timestamp value associated with this UUID.

 

 The 60 bit timestamp value is constructed from the time_low,
 time_mid, and time_hi fields of this `UUID`.  The resulting
 timestamp is measured in 100-nanosecond units since midnight,
 October 15, 1582 UTC.

 

 The timestamp value is only meaningful in a time-based UUID, which
 has version type 1.  If this `UUID` is not a time-based UUID then
 this method throws UnsupportedOperationException.

**返回**

- The timestamp of this `UUID`.

**异常**

- **UnsupportedOperationException** — If this UUID is not a version 1 UUID
