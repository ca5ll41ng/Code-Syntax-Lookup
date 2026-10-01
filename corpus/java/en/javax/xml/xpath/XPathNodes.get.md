---
id: "java-en-function-xpathnodes-get"
language: "java"
lang: "en"
category: "function"
name: "XPathNodes.get"
signature: "public abstract Node get(int index) throws XPathException"
title: "XPathNodes.get"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathNodes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathNodes.get

```java
public abstract Node get(int index) throws XPathException
```

Returns a Node at the specified position

**参数**

- **index** — Index of the element to return.

**返回**

- The Node at the specified position.

**异常**

- **javax.xml.xpath.XPathException** — If the index is out of range (index &lt; 0 || index &gt;= size())
