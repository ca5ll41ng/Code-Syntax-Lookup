---
id: "java-en-function-transformerfactory-getfeature"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.getFeature"
signature: "public abstract boolean getFeature(String name)"
title: "TransformerFactory.getFeature"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.getFeature

```java
public abstract boolean getFeature(String name)
```

Look up the value of a feature.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 `false` is returned if this `TransformerFactory` or the
 `Transformer`s or `Template`s it creates cannot support the feature.
 It is possible for an `TransformerFactory` to expose a feature value but be unable to change its state.

**参数**

- **name** — Feature name.

**返回**

- The current state of the feature, `true` or `false`.

**异常**

- **NullPointerException** — If the `name` parameter is null.
