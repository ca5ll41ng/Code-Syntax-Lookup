---
id: "java-en-function-providerfinder-test"
language: "java"
lang: "en"
category: "function"
name: "ProviderFinder.test"
signature: "public boolean test(Provider<P> sp)"
title: "ProviderFinder.test"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProviderFinder.test

```java
public boolean test(Provider<P> sp)
```

Returns `true` for the first provider `sp` that can
 be used to obtain an instance of `C` from the given
 `factory`.

**参数**

- **sp** — a candidate provider for instantiating `C`.

**返回**

- `true` for the first provider `sp` for which `C` could be instantiated, `false` otherwise.

**异常**

- **UncheckedIOException** — if `sp` throws a JMXProviderException. The JMXProviderException is set as the root cause.
