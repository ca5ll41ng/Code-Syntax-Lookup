---
id: "java-en-function-control-needsreload"
language: "java"
lang: "en"
category: "function"
name: "Control.needsReload"
signature: "public boolean needsReload(String baseName, Locale locale, String format, ClassLoader loader, ResourceBundle bundle, long loadTime)"
title: "Control.needsReload"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.needsReload

```java
public boolean needsReload(String baseName, Locale locale, String format, ClassLoader loader, ResourceBundle bundle, long loadTime)
```

Determines if the expired `bundle` in the cache needs
 to be reloaded based on the loading time given by
 `loadTime` or some other criteria. The method returns
 `true` if reloading is required; `false`
 otherwise. `loadTime` is a millisecond offset since
 the  `Calendar`
 Epoch.

 

 The calling `ResourceBundle.getBundle` factory method
 calls this method on the `ResourceBundle.Control`
 instance used for its current invocation, not on the instance
 used in the invocation that originally loaded the resource
 bundle.

 

The default implementation compares `loadTime` and
 the last modified time of the source data of the resource
 bundle. If it's determined that the source data has been modified
 since `loadTime`, `true` is
 returned. Otherwise, `false` is returned. This
 implementation assumes that the given `format` is the
 same string as its file suffix if it's not one of the default
 formats, `"java.class"` or
 `"java.properties"`.

**参数**

- **baseName** — the base bundle name of the resource bundle, a fully qualified class name
- **locale** — the locale for which the resource bundle should be instantiated
- **format** — the resource bundle format to be loaded
- **loader** — the `ClassLoader` to use to load the bundle
- **bundle** — the resource bundle instance that has been expired in the cache
- **loadTime** — the time when `bundle` was loaded and put in the cache

**返回**

- `true` if the expired bundle needs to be reloaded; `false` otherwise.

**异常**

- **NullPointerException** — if `baseName`, `locale`, `format`, `loader`, or `bundle` is `null`
