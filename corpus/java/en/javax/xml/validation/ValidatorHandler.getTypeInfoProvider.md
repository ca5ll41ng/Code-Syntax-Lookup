---
id: "java-en-function-validatorhandler-gettypeinfoprovider"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.getTypeInfoProvider"
signature: "public abstract TypeInfoProvider getTypeInfoProvider()"
title: "ValidatorHandler.getTypeInfoProvider"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.getTypeInfoProvider

```java
public abstract TypeInfoProvider getTypeInfoProvider()
```

Obtains the `TypeInfoProvider` implementation of this
 `ValidatorHandler`.

 

 The obtained `TypeInfoProvider` can be queried during a parse
 to access the type information determined by the validator.

 

 Some schema languages do not define the notion of type,
 for those languages, this method may not be supported.
 However, to be compliant with this specification, implementations
 for W3C XML Schema 1.0 must support this operation.

**返回**

- null if the validator / schema language does not support the notion of `org.w3c.dom.TypeInfo`. Otherwise a non-null valid `TypeInfoProvider`.
