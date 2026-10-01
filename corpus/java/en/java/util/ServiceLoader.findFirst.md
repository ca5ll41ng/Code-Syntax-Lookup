---
id: "java-en-function-serviceloader-findfirst"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.findFirst"
signature: "public Optional<S> findFirst()"
title: "ServiceLoader.findFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.findFirst

```java
public Optional<S> findFirst()
```

Load the first available service provider of this loader's service. This
 convenience method is equivalent to invoking the `iterator()
 iterator` method and obtaining the first element. It therefore
 returns the first element from the provider cache if possible, it
 otherwise attempts to load and instantiate the first provider.

 

 The following example loads the first available service provider. If
 no service providers are located then it uses a default implementation.
 
```
`CodecFactory factory = ServiceLoader.load(CodecFactory.class)
                                        .findFirst()
                                        .orElse(DEFAULT_CODECSET_FACTORY);
 `
```

**返回**

- The first service provider or empty `Optional` if no service providers are located

**异常**

- **ServiceConfigurationError** — If a provider class cannot be loaded for any of the reasons specified in the Errors section above.

> *Since 9*
