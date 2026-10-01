---
id: "java-en-function-properties-save"
language: "java"
lang: "en"
category: "function"
name: "Properties.save"
signature: "public void save(OutputStream out, String comments)"
title: "Properties.save"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.save

```java
public void save(OutputStream out, String comments)
```

Calls the `store(OutputStream out, String comments)` method
 and suppresses IOExceptions that were thrown.

**参数**

- **out** — an output stream.
- **comments** — a description of the property list.

**异常**

- **ClassCastException** — if this `Properties` object contains any keys or values that are not `Strings`.

> **⚠ Deprecated** — This method does not throw an IOException if an I/O error occurs while saving the property list.  The preferred way to save a properties list is via the `store(OutputStream out, String comments)` method or the `storeToXML(OutputStream os, String comment)` method.
