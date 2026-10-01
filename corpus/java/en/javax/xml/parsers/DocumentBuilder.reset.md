---
id: "java-en-function-documentbuilder-reset"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilder.reset"
signature: "public void reset()"
title: "DocumentBuilder.reset"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder.reset

```java
public void reset()
```

Reset this DocumentBuilder to its original configuration.

 

DocumentBuilder is reset to the same state as when it was created with
 `newDocumentBuilder`.
 reset() is designed to allow the reuse of existing DocumentBuilders
 thus saving resources associated with the creation of new DocumentBuilders.

 

The reset DocumentBuilder is not guaranteed to have the same `EntityResolver` or `ErrorHandler`
 Objects, e.g. `equals`.  It is guaranteed to have a functionally equal
 EntityResolver and ErrorHandler.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method.

> *Since 1.5*
