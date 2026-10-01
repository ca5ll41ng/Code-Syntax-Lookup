---
id: "java-en-function-inetaddressresolverprovider-get"
language: "java"
lang: "en"
category: "function"
name: "InetAddressResolverProvider.get"
signature: "public abstract InetAddressResolver get(Configuration configuration)"
title: "InetAddressResolverProvider.get"
directive: "method"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolverProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolverProvider.get

```java
public abstract InetAddressResolver get(Configuration configuration)
```

Initialize and return an `InetAddressResolver` provided by
 this provider. This method is called by `InetAddress` when
 installing
 the system-wide resolver implementation.

 

 Any error or exception thrown by this method is considered as
 a failure of `InetAddressResolver` instantiation and will be propagated to
 the caller of the method that triggered the lookup operation.

**参数**

- **configuration** — a `Configuration` instance containing platform built-in address resolution configuration.

**返回**

- the resolver provided by this provider
