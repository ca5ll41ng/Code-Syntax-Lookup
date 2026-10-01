---
id: "java-en-function-abstractchronology-hashcode"
language: "java"
lang: "en"
category: "function"
name: "AbstractChronology.hashCode"
signature: "public int hashCode()"
title: "AbstractChronology.hashCode"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/AbstractChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractChronology.hashCode

```java
public int hashCode()
```

A hash code for this chronology.
 

 The hash code should be based on the entire state of the object.

 This implementation is based on the chronology ID and class.
 Subclasses should add any additional state that they store.

**返回**

- a suitable hash code
