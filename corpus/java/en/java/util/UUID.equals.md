---
id: "java-en-function-uuid-equals"
language: "java"
lang: "en"
category: "function"
name: "UUID.equals"
signature: "public boolean equals(Object obj)"
title: "UUID.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.equals

```java
public boolean equals(Object obj)
```

Compares this object to the specified object.  The result is `true` if and only if the argument is not `null`, is a `UUID`
 object, has the same variant, and contains the same value, bit for bit,
 as this `UUID`.

**参数**

- **obj** — The object to be compared

**返回**

- `true` if the objects are the same; `false` otherwise
