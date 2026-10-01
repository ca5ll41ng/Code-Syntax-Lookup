---
id: "java-en-function-serviceloader-loadinstalled"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.loadInstalled"
signature: "public static <S> ServiceLoader<S> loadInstalled(Class<S> service)"
title: "ServiceLoader.loadInstalled"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.loadInstalled

```java
public static <S> ServiceLoader<S> loadInstalled(Class<S> service)
```

Creates a new service loader for the given service type, using the
 `getPlatformClassLoader() platform class loader`.

 

 This convenience method is equivalent to: 

 
```
`ServiceLoader.load(service, ClassLoader.getPlatformClassLoader())
 `
```

 

 This method is intended for use when only installed providers are
 desired.  The resulting service will only find and load providers that
 have been installed into the current Java virtual machine; providers on
 the application's module path or class path will be ignored.

**参数**

- **the** — class of the service type
- **service** — The interface or abstract class representing the service

**返回**

- A new service loader

**异常**

- **ServiceConfigurationError** — if the service type is not accessible to the caller or the caller is in an explicit module and its module descriptor does not declare that it uses `service`
