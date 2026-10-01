---
id: "java-en-function-objects-deepequals"
language: "java"
lang: "en"
category: "function"
name: "Objects.deepEquals"
signature: "public static boolean deepEquals(Object a, Object b)"
title: "Objects.deepEquals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.deepEquals

```java
public static boolean deepEquals(Object a, Object b)
```

{@return `true` if the arguments are deeply equal to each other
 and `false` otherwise}

 Two `null` values are deeply equal.  If both arguments are
 arrays, the algorithm in `deepEquals(Object[],
 Object[]) Arrays.deepEquals` is used to determine equality.
 Otherwise, equality is determined by using the `equals equals` method of the first argument.

**参数**

- **a** — an object
- **b** — an object to be compared with `a` for deep equality

**参见**

- Arrays#deepEquals(Object[], Object[])
- Objects#equals(Object, Object)
