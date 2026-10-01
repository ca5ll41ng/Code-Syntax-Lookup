---
id: "java-en-function-abstractmap-tostring"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.toString"
signature: "public String toString()"
title: "AbstractMap.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.toString

```java
public String toString()
```

Returns a string representation of this map.  The string representation
 consists of a list of key-value mappings in the order returned by the
 map's `entrySet` view's iterator, enclosed in braces
 (`"{`"}).  Adjacent mappings are separated by the characters
 `", "` (comma and space).  Each key-value mapping is rendered as
 the key followed by an equals sign (`"="`) followed by the
 associated value.  Keys and values are converted to strings as by
 `valueOf`.

**返回**

- a string representation of this map
