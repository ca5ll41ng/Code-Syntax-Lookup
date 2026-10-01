---
id: "java-en-function-documentbuilderfactory-getschema"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.getSchema"
signature: "public Schema getSchema()"
title: "DocumentBuilderFactory.getSchema"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.getSchema

```java
public Schema getSchema()
```

Gets the `Schema` object specified through
 the `setSchema` method.

**返回**

- the `Schema` object that was last set through the `setSchema` method, or null if the method was not invoked since a `DocumentBuilderFactory` is created.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method.

> *Since 1.5*
