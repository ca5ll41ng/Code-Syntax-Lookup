---
id: "java-en-function-timestamp-equals"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.equals"
signature: "public boolean equals(Object obj)"
title: "Timestamp.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.equals

```java
public boolean equals(Object obj)
```

Tests for equality between the specified object and this
 `Timestamp`. Two timestamps are considered equal if the date and
 time of their timestamp's and their signer's certificate paths are equal.

**参数**

- **obj** — the object to test for equality with this `Timestamp`.

**返回**

- `true` if the timestamps are considered equal, `false` otherwise.
