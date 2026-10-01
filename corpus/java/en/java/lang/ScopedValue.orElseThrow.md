---
id: "java-en-function-scopedvalue-orelsethrow"
language: "java"
lang: "en"
category: "function"
name: "ScopedValue.orElseThrow"
signature: "public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier) throws X"
title: "ScopedValue.orElseThrow"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ScopedValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScopedValue.orElseThrow

```java
public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier) throws X
```

Returns the value of this scoped value if bound in the current thread, otherwise
 throws an exception produced by the exception supplying function.

**参数**

- **the** — type of the exception that may be thrown
- **exceptionSupplier** — the supplying function that produces the exception to throw

**返回**

- the value of the scoped value if bound in the current thread

**异常**

- **X** — if the scoped value is not bound in the current thread
