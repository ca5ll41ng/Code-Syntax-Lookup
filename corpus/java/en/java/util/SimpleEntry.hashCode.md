---
id: "java-en-function-simpleentry-hashcode"
language: "java"
lang: "en"
category: "function"
name: "SimpleEntry.hashCode"
signature: "public int hashCode()"
title: "SimpleEntry.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleEntry.hashCode

```java
public int hashCode()
```

Returns the hash code value for this map entry.  The hash code
 of a map entry `e` is defined to be: 
```

   (e.getKey()==null   ? 0 : e.getKey().hashCode()) ^
   (e.getValue()==null ? 0 : e.getValue().hashCode())
```

 This ensures that `e1.equals(e2)` implies that
 `e1.hashCode()==e2.hashCode()` for any two Entries
 `e1` and `e2`, as required by the general
 contract of `hashCode`.

**返回**

- the hash code value for this map entry

**参见**

- #equals
