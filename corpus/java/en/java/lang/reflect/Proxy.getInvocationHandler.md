---
id: "java-en-function-proxy-getinvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "Proxy.getInvocationHandler"
signature: "public static InvocationHandler getInvocationHandler(Object proxy) throws IllegalArgumentException"
title: "Proxy.getInvocationHandler"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.getInvocationHandler

```java
public static InvocationHandler getInvocationHandler(Object proxy) throws IllegalArgumentException
```

Returns the invocation handler for the specified proxy instance.

**参数**

- **proxy** — the proxy instance to return the invocation handler for

**返回**

- the invocation handler for the proxy instance

**异常**

- **IllegalArgumentException** — if the argument is not a proxy instance
- **NullPointerException** — if `proxy` is `null`
