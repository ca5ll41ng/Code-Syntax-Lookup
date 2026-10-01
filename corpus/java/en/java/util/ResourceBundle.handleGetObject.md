---
id: "java-en-function-resourcebundle-handlegetobject"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.handleGetObject"
signature: "protected abstract Object handleGetObject(String key)"
title: "ResourceBundle.handleGetObject"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.handleGetObject

```java
protected abstract Object handleGetObject(String key)
```

Gets an object for the given key from this resource bundle.
 Returns null if this resource bundle does not contain an
 object for the given key.

**参数**

- **key** — the key for the desired object

**返回**

- the object for the given key, or null

**异常**

- **NullPointerException** — if `key` is `null`
