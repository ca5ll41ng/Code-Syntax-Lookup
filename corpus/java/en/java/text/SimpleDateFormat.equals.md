---
id: "java-en-function-simpledateformat-equals"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.equals"
signature: "public boolean equals(Object obj)"
title: "SimpleDateFormat.equals"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.equals

```java
public boolean equals(Object obj)
```

Compares the specified object with this `SimpleDateFormat` for equality.
 Returns true if the object is also a `SimpleDateFormat` and the
 two formats would format any value the same.

 identity based on `getClass()`, rather than `instanceof`.
 Therefore, in the equals methods in subclasses, no instance of this class
 should compare as equal to an instance of a subclass.

**参数**

- **obj** — object to be compared for equality

**返回**

- `true` if the specified object is equal to this `SimpleDateFormat`

**参见**

- Object#equals(Object)
