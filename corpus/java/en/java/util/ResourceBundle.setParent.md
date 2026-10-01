---
id: "java-en-function-resourcebundle-setparent"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.setParent"
signature: "protected void setParent(ResourceBundle parent)"
title: "ResourceBundle.setParent"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.setParent

```java
protected void setParent(ResourceBundle parent)
```

Sets the parent bundle of this bundle.
 The parent bundle is searched by `getObject getObject`
 when this bundle does not contain a particular resource.

**参数**

- **parent** — this bundle's parent bundle.
