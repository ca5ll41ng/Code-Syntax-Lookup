---
id: "java-en-function-properties-getproperty"
language: "java"
lang: "en"
category: "function"
name: "Properties.getProperty"
signature: "public String getProperty(String key)"
title: "Properties.getProperty"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.getProperty

```java
public String getProperty(String key)
```

Searches for the property with the specified key in this property list.
 If the key is not found in this property list, the default property list,
 and its defaults, recursively, are then checked. The method returns
 `null` if the property is not found.

**参数**

- **key** — the property key.

**返回**

- the value in this property list with the specified key value.

**参见**

- #setProperty
- #defaults
