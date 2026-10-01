---
id: "java-en-function-properties-propertynames"
language: "java"
lang: "en"
category: "function"
name: "Properties.propertyNames"
signature: "public Enumeration<?> propertyNames()"
title: "Properties.propertyNames"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.propertyNames

```java
public Enumeration<?> propertyNames()
```

Returns an enumeration of all the keys in this property list,
 including distinct keys in the default property list if a key
 of the same name has not already been found from the main
 properties list.

**返回**

- an enumeration of all the keys in this property list, including the keys in the default property list.

**异常**

- **ClassCastException** — if any key in this property list is not a string.

**参见**

- java.util.Enumeration
- java.util.Properties#defaults
- #stringPropertyNames
