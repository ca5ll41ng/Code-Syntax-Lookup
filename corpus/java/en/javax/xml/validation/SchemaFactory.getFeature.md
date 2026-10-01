---
id: "java-en-function-schemafactory-getfeature"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.getFeature"
signature: "public boolean getFeature(String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "SchemaFactory.getFeature"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.getFeature

```java
public boolean getFeature(String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a feature flag.

 

The feature name is any fully-qualified URI.  It is
 possible for a `SchemaFactory` to recognize a feature name but
 temporarily be unable to return its value.

 

Implementors are free (and encouraged) to invent their own features,
 using names built on their own URIs.

**参数**

- **name** — The feature name, which is a non-null fully-qualified URI.

**返回**

- The current value of the feature (true or false).

**异常**

- **SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `SchemaFactory` recognizes the feature name but cannot determine its value at this time.
- **NullPointerException** — If `name` is `null`.

**参见**

- #setFeature(String, boolean)
