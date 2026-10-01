---
id: "java-en-function-validatorhandler-getfeature"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.getFeature"
signature: "public boolean getFeature(String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ValidatorHandler.getFeature"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.getFeature

```java
public boolean getFeature(String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a feature flag.

 

The feature name is any fully-qualified URI.  It is
 possible for a `ValidatorHandler` to recognize a feature name but
 temporarily be unable to return its value.
 Some feature values may be available only in specific
 contexts, such as before, during, or after a validation.

 

Implementors are free (and encouraged) to invent their own features,
 using names built on their own URIs.

**参数**

- **name** — The feature name, which is a non-null fully-qualified URI.

**返回**

- The current value of the feature (true or false).

**异常**

- **SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `ValidatorHandler` recognizes the feature name but cannot determine its value at this time.
- **NullPointerException** — When name is null.

**参见**

- #setFeature(String, boolean)
