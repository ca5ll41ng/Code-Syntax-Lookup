---
id: "java-en-function-objects-requirenonnullelseget"
language: "java"
lang: "en"
category: "function"
name: "Objects.requireNonNullElseGet"
signature: "public static <T> T requireNonNullElseGet(T obj, Supplier<? extends T> supplier)"
title: "Objects.requireNonNullElseGet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.requireNonNullElseGet

```java
public static <T> T requireNonNullElseGet(T obj, Supplier<? extends T> supplier)
```

{@return the first argument if it is non-`null` and
 otherwise the value from `supplier.get()` if it is
 non-`null`}

**参数**

- **obj** — an object
- **supplier** — of a non-`null` object to return if the first argument is `null`
- **the** — type of the first argument and return type

**异常**

- **NullPointerException** — if both `obj` is null and either the `supplier` is `null` or the `supplier.get()` value is `null`

> *Since 9*
