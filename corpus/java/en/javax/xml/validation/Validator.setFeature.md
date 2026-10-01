---
id: "java-en-function-validator-setfeature"
language: "java"
lang: "en"
category: "function"
name: "Validator.setFeature"
signature: "public void setFeature(String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "Validator.setFeature"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.setFeature

```java
public void setFeature(String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a feature flag.

 

 Feature can be used to control the way a `Validator`
 parses schemas, although `Validator`s are not required
 to recognize any specific feature names.

 

The feature name is any fully-qualified URI.  It is
 possible for a `Validator` to expose a feature value but
 to be unable to change the current value.
 Some feature values may be immutable or mutable only
 in specific contexts, such as before, during, or after
 a validation.

**参数**

- **name** — The feature name, which is a non-null fully-qualified URI.
- **value** — The requested value of the feature (true or false).

**异常**

- **SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `Validator` recognizes the feature name but cannot set the requested value.
- **NullPointerException** — When the name parameter is null.

**参见**

- #getFeature(String)
