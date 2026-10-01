---
id: "java-en-function-entry-getvalue"
language: "java"
lang: "en"
category: "function"
name: "Entry.getValue"
signature: "V getValue()"
title: "Entry.getValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Entry.getValue

```java
V getValue()
```

Returns the value corresponding to this entry.  If the mapping
 has been removed from the backing map (by the iterator's
 `remove` operation), the results of this call are undefined.

**返回**

- the value corresponding to this entry

**异常**

- **IllegalStateException** — implementations may, but are not required to, throw this exception if the entry has been removed from the backing map.
