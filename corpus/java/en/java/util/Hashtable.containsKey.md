---
id: "java-en-function-hashtable-containskey"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.containsKey"
signature: "public synchronized boolean containsKey(Object key)"
title: "Hashtable.containsKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.containsKey

```java
public synchronized boolean containsKey(Object key)
```

Tests if the specified object is a key in this hashtable.

**参数**

- **key** — possible key

**返回**

- `true` if and only if the specified object is a key in this hashtable, as determined by the `equals` method; `false` otherwise.

**异常**

- **NullPointerException** — if the key is `null`

**参见**

- #contains(Object)
