---
id: "java-en-function-abstractstringbuilder-ensurecapacity"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.ensureCapacity"
signature: "public void ensureCapacity(int minimumCapacity)"
title: "AbstractStringBuilder.ensureCapacity"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.ensureCapacity

```java
public void ensureCapacity(int minimumCapacity)
```

Ensures that the capacity is at least equal to the specified minimum.
 If the current capacity is less than the argument, then a new internal
 array is allocated with greater capacity. The new capacity is the
 larger of:
 
 
- The `minimumCapacity` argument.
 
- Twice the old capacity, plus `2`.
 

 If the `minimumCapacity` argument is nonpositive, this
 method takes no action and simply returns.
 Note that subsequent operations on this object can reduce the
 actual capacity below that requested here.

**参数**

- **minimumCapacity** — the minimum desired capacity.
