---
id: "java-en-function-transformer-clearparameters"
language: "java"
lang: "en"
category: "function"
name: "Transformer.clearParameters"
signature: "public abstract void clearParameters()"
title: "Transformer.clearParameters"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.clearParameters

```java
public abstract void clearParameters()
```

Set a list of parameters.

 

Note that the list of parameters is specified as a
 Properties Object which limits the parameter
 values to Strings.  Multiple calls to
 `setParameter` should be used when the
 desired values are non-String Objects.
 The parameter names should conform as specified in
 `setParameter`.
 An IllegalArgumentException is thrown if any names do not
 conform.

 

New parameters in the list are added to any existing parameters.
 If the name of a new parameter is equal to the name of an existing
 parameter as determined by `equals`,
  the existing parameter is set to the new value.

**参数**

- **params** — Parameters to set.

**异常**

- **IllegalArgumentException** — If any parameter names do not conform to the naming rules.
