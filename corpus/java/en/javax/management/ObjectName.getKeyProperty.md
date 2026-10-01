---
id: "java-en-function-objectname-getkeyproperty"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getKeyProperty"
signature: "public String getKeyProperty(String property)"
title: "ObjectName.getKeyProperty"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getKeyProperty

```java
public String getKeyProperty(String property)
```

Obtains the value associated with a key in a key property.

**参数**

- **property** — The property whose value is to be obtained.

**返回**

- The value of the property, or null if there is no such property in this ObjectName.

**异常**

- **NullPointerException** — If property is null.
