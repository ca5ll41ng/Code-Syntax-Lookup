---
id: "java-en-function-resourcebundle-handlekeyset"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.handleKeySet"
signature: "protected Set<String> handleKeySet()"
title: "ResourceBundle.handleKeySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.handleKeySet

```java
protected Set<String> handleKeySet()
```

Returns a `Set` of the keys contained only
 in this `ResourceBundle`.

 

The default implementation returns a `Set` of the
 keys returned by the `getKeys() getKeys` method except
 for the ones for which the `handleGetObject(String)
 handleGetObject` method returns `null`. Once the
 `Set` has been created, the value is kept in this
 `ResourceBundle` in order to avoid producing the
 same `Set` in subsequent calls. Subclasses can
 override this method for faster handling.

**返回**

- a `Set` of the keys contained only in this `ResourceBundle`

> *Since 1.6*
