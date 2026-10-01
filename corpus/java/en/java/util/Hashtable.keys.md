---
id: "java-en-function-hashtable-keys"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.keys"
signature: "public synchronized Enumeration<K> keys()"
title: "Hashtable.keys"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.keys

```java
public synchronized Enumeration<K> keys()
```

Returns an enumeration of the keys in this hashtable.
 Use the Enumeration methods on the returned object to fetch the keys
 sequentially. If the hashtable is structurally modified while enumerating
 over the keys then the results of enumerating are undefined.

**返回**

- an enumeration of the keys in this hashtable.

**参见**

- Enumeration
- #elements()
- #keySet()
- Map
