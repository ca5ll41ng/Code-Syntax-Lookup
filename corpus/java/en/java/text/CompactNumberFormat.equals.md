---
id: "java-en-function-compactnumberformat-equals"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.equals"
signature: "public boolean equals(Object obj)"
title: "CompactNumberFormat.equals"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.equals

```java
public boolean equals(Object obj)
```

Compares the specified object with this `CompactNumberFormat` for equality.
 Returns true if the object is also a `CompactNumberFormat` and the
 two formats would format any value the same.

 identity based on `getClass()`, rather than `instanceof`.
 Therefore, in the equals methods in subclasses, no instance of this class
 should compare as equal to an instance of a subclass.

**参数**

- **obj** — the object to compare with

**返回**

- true if this is equal to the other `CompactNumberFormat`

**参见**

- Object#hashCode()
