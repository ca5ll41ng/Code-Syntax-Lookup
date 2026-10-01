---
id: "java-en-function-transformerfactory-setfeature"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.setFeature"
signature: "public abstract void setFeature(String name, boolean value) throws TransformerConfigurationException"
title: "TransformerFactory.setFeature"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.setFeature

```java
public abstract void setFeature(String name, boolean value) throws TransformerConfigurationException
```

Set a feature for this `TransformerFactory` and `Transformer`s
 or `Template`s created by this factory.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 An `TransformerConfigurationException` is thrown if this `TransformerFactory` or the
 `Transformer`s or `Template`s it creates cannot support the feature.
 It is possible for an `TransformerFactory` to expose a feature value but be unable to change its state.

 

All implementations are required to support the `FEATURE_SECURE_PROCESSING` feature.
 When the feature is:
 
   
- 
     `true`: the implementation will limit XML processing to conform to implementation limits
     and behave in a secure fashion as defined by the implementation.
     Examples include resolving user defined style sheets and functions.
     If XML processing is limited for security reasons, it will be reported via a call to the registered
     `fatalError`.
     See `setErrorListener`.
   
   
- 
     `false`: the implementation will processing XML according to the XML specifications without
     regard to possible implementation limits.

**参数**

- **name** — Feature name.
- **value** — Is feature state `true` or `false`.

**异常**

- **TransformerConfigurationException** — if this `TransformerFactory` or the `Transformer`s or `Template`s it creates cannot support this feature.
- **NullPointerException** — If the `name` parameter is null.
