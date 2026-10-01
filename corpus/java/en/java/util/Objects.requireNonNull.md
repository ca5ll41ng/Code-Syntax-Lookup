---
id: "java-en-function-objects-requirenonnull"
language: "java"
lang: "en"
category: "function"
name: "Objects.requireNonNull"
signature: "public static <T> T requireNonNull(T obj)"
title: "Objects.requireNonNull"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.requireNonNull

```java
public static <T> T requireNonNull(T obj)
```

Checks that the specified object reference is not `null`. This
 method is designed primarily for doing parameter validation in methods
 and constructors, as demonstrated below:
 
```

 public Foo(Bar bar) {
     this.bar = Objects.requireNonNull(bar);
 }
 
```

**参数**

- **obj** — the object reference to check for nullity
- **the** — type of the reference

**返回**

- `obj` if not `null`

**异常**

- **NullPointerException** — if `obj` is `null`
