---
id: "java-en-function-scopedvalue-where"
language: "java"
lang: "en"
category: "function"
name: "ScopedValue.where"
signature: "public static <T> Carrier where(ScopedValue<T> key, T value)"
title: "ScopedValue.where"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScopedValue.where

```java
public static <T> Carrier where(ScopedValue<T> key, T value)
```

Creates a new `Carrier` with a single mapping of a `ScopedValue`
 key to a value. The `Carrier` can be used to accumulate mappings so
 that an operation can be executed with all scoped values in the mapping bound to
 values. The following example runs an operation with `k1` bound (or rebound)
 to `v1`, and `k2` bound (or rebound) to `v2`.
 {@snippet lang=java :
     // @link substring="run" target="Carrier#run(Runnable)" :
     ScopedValue.where(k1, v1).where(k2, v2).run(() -> ... );
 }

**参数**

- **key** — the `ScopedValue` key
- **value** — the value, can be `null`
- **the** — type of the value

**返回**

- a new `Carrier` with a single mapping
