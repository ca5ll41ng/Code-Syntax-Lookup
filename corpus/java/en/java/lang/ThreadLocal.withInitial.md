---
id: "java-en-function-threadlocal-withinitial"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocal.withInitial"
signature: "public static <S> ThreadLocal<S> withInitial(Supplier<? extends S> supplier)"
title: "ThreadLocal.withInitial"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocal.withInitial

```java
public static <S> ThreadLocal<S> withInitial(Supplier<? extends S> supplier)
```

Creates a thread local variable. The initial value of the variable is
 determined by invoking the `get` method on the `Supplier`.

**参数**

- **the** — type of the thread local's value
- **supplier** — the supplier to be used to determine the initial value

**返回**

- a new thread local variable

**异常**

- **NullPointerException** — if the specified supplier is null

> *Since 1.8*
