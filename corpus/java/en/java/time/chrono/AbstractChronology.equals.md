---
id: "java-en-function-abstractchronology-equals"
language: "java"
lang: "en"
category: "function"
name: "AbstractChronology.equals"
signature: "public boolean equals(Object obj)"
title: "AbstractChronology.equals"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/AbstractChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractChronology.equals

```java
public boolean equals(Object obj)
```

Checks if this chronology is equal to another chronology.
 

 The comparison is based on the entire state of the object.

 This implementation checks the type and calls
 `compareTo`.

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other chronology
