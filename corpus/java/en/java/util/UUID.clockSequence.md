---
id: "java-en-function-uuid-clocksequence"
language: "java"
lang: "en"
category: "function"
name: "UUID.clockSequence"
signature: "public int clockSequence()"
title: "UUID.clockSequence"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.clockSequence

```java
public int clockSequence()
```

The clock sequence value associated with this UUID.

 

 The 14 bit clock sequence value is constructed from the clock
 sequence field of this UUID.  The clock sequence field is used to
 guarantee temporal uniqueness in a time-based UUID.

 

 The `clockSequence` value is only meaningful in a time-based
 UUID, which has version type 1.  If this UUID is not a time-based UUID
 then this method throws UnsupportedOperationException.

**返回**

- The clock sequence of this `UUID`

**异常**

- **UnsupportedOperationException** — If this UUID is not a version 1 UUID
