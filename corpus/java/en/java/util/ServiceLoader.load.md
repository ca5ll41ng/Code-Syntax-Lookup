---
id: "java-en-function-serviceloader-load"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.load"
signature: "public static <S> ServiceLoader<S> load(Class<S> service)"
title: "ServiceLoader.load"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.load

```java
public static <S> ServiceLoader<S> load(Class<S> service)
```

Creates a new service loader for the given service type, using the
 current thread's `getContextClassLoader
 context class loader`.

 

 An invocation of this convenience method of the form
 
```
`ServiceLoader.load(service)
 `
```

 is equivalent to

 
```
`ServiceLoader.load(service, Thread.currentThread().getContextClassLoader())
 `
```

 cached VM-wide. For example, different applications in the same VM may
 have different thread context class loaders. A lookup by one application
 may locate a service provider that is only visible via its thread
 context class loader and so is not suitable to be located by the other
 application. Memory leaks can also arise. A thread local may be suited
 to some applications.

**参数**

- **the** — class of the service type
- **service** — The interface or abstract class representing the service

**返回**

- A new service loader

**异常**

- **ServiceConfigurationError** — if the service type is not accessible to the caller or the caller is in an explicit module and its module descriptor does not declare that it uses `service`
