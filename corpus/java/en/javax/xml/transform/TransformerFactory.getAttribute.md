---
id: "java-en-function-transformerfactory-getattribute"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.getAttribute"
signature: "public abstract Object getAttribute(String name)"
title: "TransformerFactory.getAttribute"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.getAttribute

```java
public abstract Object getAttribute(String name)
```

Allows the user to retrieve specific attributes on the underlying
 implementation.
 An `IllegalArgumentException` is thrown if the underlying
 implementation doesn't recognize the attribute.

**参数**

- **name** — The name of the attribute.

**返回**

- value The value of the attribute.

**异常**

- **IllegalArgumentException** — When implementation does not recognize the attribute.
