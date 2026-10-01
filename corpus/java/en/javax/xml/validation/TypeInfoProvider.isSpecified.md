---
id: "java-en-function-typeinfoprovider-isspecified"
language: "java"
lang: "en"
category: "function"
name: "TypeInfoProvider.isSpecified"
signature: "public abstract boolean isSpecified(int index)"
title: "TypeInfoProvider.isSpecified"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/TypeInfoProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfoProvider.isSpecified

```java
public abstract boolean isSpecified(int index)
```

Returns false if the attribute was added by the validator.

 

 This method provides information necessary for
 a `javax.xml.parsers.DocumentBuilder` to determine what
 the DOM tree should return from the `getSpecified` method.

 

 The method may only be called by the startElement event of
 the `org.xml.sax.ContentHandler` that the application sets to the
 `ValidatorHandler`.

 

 A general guideline for validators is to return true if
 the attribute was originally present in the pipeline, and
 false if it was added by the validator.

**参数**

- **index** — The index of the attribute. The same index for the `org.xml.sax.Attributes` object passed to the startElement callback.

**返回**

- true if the attribute was present before the validator processes input. false if the attribute was added by the validator.

**异常**

- **IndexOutOfBoundsException** — If the index is invalid.
- **IllegalStateException** — If this method is called from other `org.xml.sax.ContentHandler` methods.
