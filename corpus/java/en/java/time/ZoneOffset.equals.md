---
id: "java-en-function-zoneoffset-equals"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.equals"
signature: "public boolean equals(Object obj)"
title: "ZoneOffset.equals"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.equals

```java
public boolean equals(Object obj)
```

Checks if this offset is equal to another offset.
 

 The comparison is based on the amount of the offset in seconds.
 This is equivalent to a comparison by ID.

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other offset
