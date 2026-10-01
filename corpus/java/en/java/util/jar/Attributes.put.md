---
id: "java-en-function-attributes-put"
language: "java"
lang: "en"
category: "function"
name: "Attributes.put"
signature: "public Object put(Object name, Object value)"
title: "Attributes.put"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.put

```java
public Object put(Object name, Object value)
```

Associates the specified value with the specified attribute name
 (key) in this Map. If the Map previously contained a mapping for
 the attribute name, the old value is replaced.

**参数**

- **name** — the attribute name
- **value** — the attribute value

**返回**

- the previous value of the attribute, or null if none

**异常**

- **ClassCastException** — if the name is not a Attributes.Name or the value is not a String
