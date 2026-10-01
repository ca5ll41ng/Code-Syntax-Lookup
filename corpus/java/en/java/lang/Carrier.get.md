---
id: "java-en-function-carrier-get"
language: "java"
lang: "en"
category: "function"
name: "Carrier.get"
signature: "public <T> T get(ScopedValue<T> key)"
title: "Carrier.get"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Carrier.get

```java
public <T> T get(ScopedValue<T> key)
```

Returns the value of a `ScopedValue` in this mapping.

**参数**

- **key** — the `ScopedValue` key
- **the** — type of the value

**返回**

- the value

**异常**

- **NoSuchElementException** — if the key is not present in this mapping
