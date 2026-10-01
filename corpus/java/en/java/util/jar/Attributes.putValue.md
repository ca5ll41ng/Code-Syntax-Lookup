---
id: "java-en-function-attributes-putvalue"
language: "java"
lang: "en"
category: "function"
name: "Attributes.putValue"
signature: "public String putValue(String name, String value)"
title: "Attributes.putValue"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.putValue

```java
public String putValue(String name, String value)
```

Associates the specified value with the specified attribute name,
 specified as a String. The attributes name is case-insensitive.
 If the Map previously contained a mapping for the attribute name,
 the old value is replaced.
 

 This method is defined as:
 
```

      return (String)put(new Attributes.Name(name), value);
 
```

**参数**

- **name** — the attribute name as a string
- **value** — the attribute value

**返回**

- the previous value of the attribute, or null if none

**异常**

- **IllegalArgumentException** — if the attribute name is invalid
