---
id: "java-en-function-hashtable-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.containsValue"
signature: "public boolean containsValue(Object value)"
title: "Hashtable.containsValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.containsValue

```java
public boolean containsValue(Object value)
```

Returns true if this hashtable maps one or more keys to this value.

 

Note that this method is identical in functionality to `contains contains` (which predates the `Map` interface).

**参数**

- **value** — value whose presence in this hashtable is to be tested

**返回**

- `true` if this map maps one or more keys to the specified value

**异常**

- **NullPointerException** — if the value is `null`

> *Since 1.2*
