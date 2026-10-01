---
id: "java-en-function-attributes-getvalue"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getValue"
signature: "public String getValue(String name)"
title: "Attributes.getValue"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getValue

```java
public String getValue(String name)
```

Returns the value of the specified attribute name, specified as
 a string, or null if the attribute was not found. The attribute
 name is case-insensitive.
 

 This method is defined as:
 
```

      return (String)get(new Attributes.Name((String)name));
 
```

**参数**

- **name** — the attribute name as a string

**返回**

- the String value of the specified attribute name, or null if not found.

**异常**

- **IllegalArgumentException** — if the attribute name is invalid
