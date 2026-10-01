---
id: "java-en-function-toolprovider-findfirst"
language: "java"
lang: "en"
category: "function"
name: "ToolProvider.findFirst"
signature: "static Optional<ToolProvider> findFirst(String name)"
title: "ToolProvider.findFirst"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ToolProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ToolProvider.findFirst

```java
static Optional<ToolProvider> findFirst(String name)
```

Returns the first instance of a `ToolProvider` with the given name,
 as loaded by `ServiceLoader` using the system class loader.

**参数**

- **name** — the name of the desired tool provider

**返回**

- an `Optional` of the first instance found

**异常**

- **NullPointerException** — if `name` is `null`
