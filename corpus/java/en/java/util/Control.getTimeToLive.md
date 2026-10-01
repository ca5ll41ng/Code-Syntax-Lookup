---
id: "java-en-function-control-gettimetolive"
language: "java"
lang: "en"
category: "function"
name: "Control.getTimeToLive"
signature: "public long getTimeToLive(String baseName, Locale locale)"
title: "Control.getTimeToLive"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.getTimeToLive

```java
public long getTimeToLive(String baseName, Locale locale)
```

Returns the time-to-live (TTL) value for resource bundles that
 are loaded under this
 `ResourceBundle.Control`. Positive time-to-live values
 specify the number of milliseconds a bundle can remain in the
 cache without being validated against the source data from which
 it was constructed. The value 0 indicates that a bundle must be
 validated each time it is retrieved from the cache. `TTL_DONT_CACHE` specifies that loaded resource bundles are not
 put in the cache. `TTL_NO_EXPIRATION_CONTROL` specifies
 that loaded resource bundles are put in the cache with no
 expiration control.

 

The expiration affects only the bundle loading process by the
 `ResourceBundle.getBundle` factory method.  That is,
 if the factory method finds a resource bundle in the cache that
 has expired, the factory method calls the `needsReload(String, Locale, String, ClassLoader, ResourceBundle,
 long) needsReload` method to determine whether the resource
 bundle needs to be reloaded. If `needsReload` returns
 `true`, the cached resource bundle instance is removed
 from the cache. Otherwise, the instance stays in the cache,
 updated with the new TTL value returned by this method.

 

All cached resource bundles are subject to removal from the
 cache due to memory constraints of the runtime environment.
 Returning a large positive value doesn't mean to lock loaded
 resource bundles in the cache.

 

The default implementation returns `TTL_NO_EXPIRATION_CONTROL`.

**参数**

- **baseName** — the base name of the resource bundle for which the expiration value is specified.
- **locale** — the locale of the resource bundle for which the expiration value is specified.

**返回**

- the time (0 or a positive millisecond offset from the cached time) to get loaded bundles expired in the cache, `TTL_NO_EXPIRATION_CONTROL` to disable the expiration control, or `TTL_DONT_CACHE` to disable caching.

**异常**

- **NullPointerException** — if `baseName` or `locale` is `null`
