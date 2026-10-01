---
id: "java-en-function-inetaddressresolverprovider-inetaddressresolverprovider"
language: "java"
lang: "en"
category: "function"
name: "InetAddressResolverProvider.InetAddressResolverProvider"
signature: "protected InetAddressResolverProvider()"
title: "InetAddressResolverProvider.InetAddressResolverProvider"
directive: "method"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolverProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolverProvider.InetAddressResolverProvider

```java
protected InetAddressResolverProvider()
```

Creates a new instance of `InetAddressResolverProvider`.

 implementation initialization should be as simple as possible, in order to avoid
 possible risks of deadlock or class loading cycles during the instantiation of the
 service provider.
