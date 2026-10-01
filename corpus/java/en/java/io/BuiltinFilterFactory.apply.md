---
id: "java-en-function-builtinfilterfactory-apply"
language: "java"
lang: "en"
category: "function"
name: "BuiltinFilterFactory.apply"
signature: "public ObjectInputFilter apply(ObjectInputFilter oldFilter, ObjectInputFilter newFilter)"
title: "BuiltinFilterFactory.apply"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BuiltinFilterFactory.apply

```java
public ObjectInputFilter apply(ObjectInputFilter oldFilter, ObjectInputFilter newFilter)
```

Returns the `ObjectInputFilter` to be used for an ObjectInputStream.

 

When invoked from the
 `ObjectInputStream(InputStream) ObjectInputStream constructors`,
 the first parameter is `null` and the second parameter is the
 `getSerialFilter() static JVM-wide filter`;
 the value returned is `newFilter`, the static JVM-wide filter.
 

 When invoked from
 `setObjectInputFilter(ObjectInputFilter) setObjectInputFilter`
 to set the stream-specific filter, the value is `newFilter` to replace the
 previous filter.

**参数**

- **oldFilter** — the current filter, may be null
- **newFilter** — a new filter, may be null

**返回**

- an ObjectInputFilter, the new Filter, may be null
