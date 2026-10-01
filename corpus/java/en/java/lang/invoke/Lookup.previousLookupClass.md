---
id: "java-en-function-lookup-previouslookupclass"
language: "java"
lang: "en"
category: "function"
name: "Lookup.previousLookupClass"
signature: "public Class<?> previousLookupClass()"
title: "Lookup.previousLookupClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.previousLookupClass

```java
public Class<?> previousLookupClass()
```

Reports a lookup class in another module that this lookup object
 was previously teleported from, or `null`.
 

 A `Lookup` object produced by the factory methods, such as the
 `lookup` and `publicLookup` method,
 has `null` previous lookup class.
 A `Lookup` object has a non-null previous lookup class
 when this lookup was teleported from an old lookup class
 in one module to a new lookup class in another module.

**返回**

- the lookup class in another module that this lookup object was previously teleported from, or `null`

**参见**

- #in(Class)
- MethodHandles#privateLookupIn(Class, Lookup)
- Cross-module lookups

> *Since 14*
