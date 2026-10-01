---
id: "java-en-function-objects-requirenonnullelse"
language: "java"
lang: "en"
category: "function"
name: "Objects.requireNonNullElse"
signature: "public static <T> T requireNonNullElse(T obj, T defaultObj)"
title: "Objects.requireNonNullElse"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.requireNonNullElse

```java
public static <T> T requireNonNullElse(T obj, T defaultObj)
```

{@return the first argument if it is non-`null` and
 otherwise the second argument if it is non-`null`}

**参数**

- **obj** — an object
- **defaultObj** — a non-`null` object to return if the first argument is `null`
- **the** — type of the reference

**异常**

- **NullPointerException** — if both `obj` is null and `defaultObj` is `null`

> *Since 9*
