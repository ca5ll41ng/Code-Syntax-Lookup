---
id: "java-en-function-documentbuilderfactory-getattribute"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.getAttribute"
signature: "public abstract Object getAttribute(String name) throws IllegalArgumentException"
title: "DocumentBuilderFactory.getAttribute"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.getAttribute

```java
public abstract Object getAttribute(String name) throws IllegalArgumentException
```

Allows the user to retrieve specific attributes on the underlying
 implementation.

**参数**

- **name** — The name of the attribute.

**返回**

- value The value of the attribute.

**异常**

- **IllegalArgumentException** — thrown if the underlying implementation doesn't recognize the attribute.
