---
id: "java-en-function-saxparser-reset"
language: "java"
lang: "en"
category: "function"
name: "SAXParser.reset"
signature: "public void reset()"
title: "SAXParser.reset"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParser.reset

```java
public void reset()
```

Reset this SAXParser to its original configuration.

 

SAXParser is reset to the same state as when it was created with
 `newSAXParser`.
 reset() is designed to allow the reuse of existing SAXParsers
 thus saving resources associated with the creation of new SAXParsers.

 

The reset SAXParser is not guaranteed to have the same `Schema`
 Object, e.g. `equals`.  It is guaranteed to have a functionally equal
 Schema.

**异常**

- **UnsupportedOperationException** — When Implementations do not override this method

> *Since 1.5*
