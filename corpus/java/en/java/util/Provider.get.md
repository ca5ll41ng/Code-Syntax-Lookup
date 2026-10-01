---
id: "java-en-function-provider-get"
language: "java"
lang: "en"
category: "function"
name: "Provider.get"
signature: "@Override S get()"
title: "Provider.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.get

```java
@Override S get()
```

Returns an instance of the provider.

**返回**

- An instance of the provider.

**异常**

- **ServiceConfigurationError** — If the service provider cannot be instantiated, or in the case of a provider factory, the public static "`provider()`" method returns `null` or throws an error or exception. The `ServiceConfigurationError` will carry an appropriate cause where possible.
