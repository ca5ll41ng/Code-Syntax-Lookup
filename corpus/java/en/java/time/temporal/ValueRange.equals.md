---
id: "java-en-function-valuerange-equals"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.equals"
signature: "public boolean equals(Object obj)"
title: "ValueRange.equals"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.equals

```java
public boolean equals(Object obj)
```

Checks if this range is equal to another range.
 

 The comparison is based on the four values, minimum, largest minimum,
 smallest maximum and maximum.
 Only objects of type `ValueRange` are compared, other types return false.

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other range
