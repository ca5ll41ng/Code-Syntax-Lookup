---
id: "java-en-function-sslcontext-getdefault"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getDefault"
signature: "public static SSLContext getDefault() throws NoSuchAlgorithmException"
title: "SSLContext.getDefault"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getDefault

```java
public static SSLContext getDefault() throws NoSuchAlgorithmException
```

Returns the default SSL context.

 

If a default context was set using the `setDefault
 SSLContext.setDefault` method, it is returned. Otherwise, the first
 call of this method triggers the call
 `SSLContext.getInstance("Default")`.
 If successful, that object is made the default SSL context and returned.

 

The default context is immediately
 usable and does not require `init initialization`.

**返回**

- the default SSL context

**异常**

- **NoSuchAlgorithmException** — if the `getInstance SSLContext.getInstance` call fails

> *Since 1.6*
