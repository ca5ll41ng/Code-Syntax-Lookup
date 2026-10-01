---
id: "java-en-function-entry-getkey"
language: "java"
lang: "en"
category: "function"
name: "Entry.getKey"
signature: "K getKey()"
title: "Entry.getKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Entry.getKey

```java
K getKey()
```

Returns the key corresponding to this entry.

**返回**

- the key corresponding to this entry

**异常**

- **IllegalStateException** — implementations may, but are not required to, throw this exception if the entry has been removed from the backing map.
