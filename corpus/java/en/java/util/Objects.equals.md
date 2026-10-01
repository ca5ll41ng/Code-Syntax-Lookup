---
id: "java-en-function-objects-equals"
language: "java"
lang: "en"
category: "function"
name: "Objects.equals"
signature: "public static boolean equals(Object a, Object b)"
title: "Objects.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.equals

```java
public static boolean equals(Object a, Object b)
```

{@return `true` if the arguments are equal to each other
 and `false` otherwise}
 Consequently, if both arguments are `null`, `true`
 is returned.  Otherwise, if the first argument is not `null`, equality is determined by calling the `equals equals` method of the first argument with the
 second argument of this method. Otherwise, `false` is
 returned.

**参数**

- **a** — an object
- **b** — an object to be compared with `a` for equality

**参见**

- Object#equals(Object)
