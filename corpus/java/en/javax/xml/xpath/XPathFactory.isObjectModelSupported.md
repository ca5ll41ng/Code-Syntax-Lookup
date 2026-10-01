---
id: "java-en-function-xpathfactory-isobjectmodelsupported"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.isObjectModelSupported"
signature: "public abstract boolean isObjectModelSupported(String objectModel)"
title: "XPathFactory.isObjectModelSupported"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.isObjectModelSupported

```java
public abstract boolean isObjectModelSupported(String objectModel)
```

Is specified object model supported by this `XPathFactory`?

**参数**

- **objectModel** — Specifies the object model which the returned `XPathFactory` will understand.

**返回**

- true if `XPathFactory` supports objectModel, else false.

**异常**

- **NullPointerException** — If objectModel is null.
- **IllegalArgumentException** — If objectModel.length() == 0.
