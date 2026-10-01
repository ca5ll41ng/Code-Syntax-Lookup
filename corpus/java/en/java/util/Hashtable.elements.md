---
id: "java-en-function-hashtable-elements"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.elements"
signature: "public synchronized Enumeration<V> elements()"
title: "Hashtable.elements"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.elements

```java
public synchronized Enumeration<V> elements()
```

Returns an enumeration of the values in this hashtable.
 Use the Enumeration methods on the returned object to fetch the elements
 sequentially. If the hashtable is structurally modified while enumerating
 over the values then the results of enumerating are undefined.

**返回**

- an enumeration of the values in this hashtable.

**参见**

- java.util.Enumeration
- #keys()
- #values()
- Map
