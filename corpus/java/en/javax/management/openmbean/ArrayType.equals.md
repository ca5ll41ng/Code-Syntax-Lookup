---
id: "java-en-function-arraytype-equals"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.equals"
signature: "public boolean equals(Object obj)"
title: "ArrayType.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.equals

```java
public boolean equals(Object obj)
```

Compares the specified `obj` parameter with this
 `ArrayType` instance for equality.
 

 Two `ArrayType` instances are equal if and only if they
 describe array instances which have the same dimension, elements'
 open type and primitive array flag.

**参数**

- **obj** — the object to be compared for equality with this `ArrayType` instance; if obj is `null` or is not an instance of the class `ArrayType` this method returns `false`.

**返回**

- `true` if the specified object is equal to this `ArrayType` instance.
