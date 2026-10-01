---
id: "java-en-function-carrier-where"
language: "java"
lang: "en"
category: "function"
name: "Carrier.where"
signature: "public <T> Carrier where(ScopedValue<T> key, T value)"
title: "Carrier.where"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Carrier.where

```java
public <T> Carrier where(ScopedValue<T> key, T value)
```

Returns a new `Carrier` with the mappings from this carrier plus a
 new mapping from `key` to `value`. If this carrier already has a
 mapping for the scoped value `key` then it will map to the new
 `value`. The current carrier is immutable, so it is not changed by this
 method.

**参数**

- **key** — the `ScopedValue` key
- **value** — the value, can be `null`
- **the** — type of the value

**返回**

- a new `Carrier` with the mappings from this carrier plus the new mapping
