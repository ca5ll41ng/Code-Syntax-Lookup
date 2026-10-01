---
id: "java-en-function-hashtable-contains"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.contains"
signature: "public synchronized boolean contains(Object value)"
title: "Hashtable.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.contains

```java
public synchronized boolean contains(Object value)
```

Tests if some key maps into the specified value in this hashtable.
 This operation is more expensive than the `containsKey
 containsKey` method.

 

Note that this method is identical in functionality to
 `containsValue containsValue`, (which is part of the
 `Map` interface in the collections framework).

**参数**

- **value** — a value to search for

**返回**

- `true` if and only if some key maps to the `value` argument in this hashtable as determined by the `equals` method; `false` otherwise.

**异常**

- **NullPointerException** — if the value is `null`
