---
id: "java-en-function-proxy-proxy"
language: "java"
lang: "en"
category: "function"
name: "Proxy.Proxy"
signature: "protected Proxy(InvocationHandler h)"
title: "Proxy.Proxy"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.Proxy

```java
protected Proxy(InvocationHandler h)
```

Constructs a new `Proxy` instance from a subclass
 (typically, a dynamic proxy class) with the specified value
 for its invocation handler.

**参数**

- **h** — the invocation handler for this proxy instance

**异常**

- **NullPointerException** — if the given invocation handler, `h`, is `null`.
