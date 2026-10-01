---
id: "java-en-function-rdn-rdn"
language: "java"
lang: "en"
category: "function"
name: "Rdn.Rdn"
signature: "public Rdn(Attributes attrSet) throws InvalidNameException"
title: "Rdn.Rdn"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Rdn.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Rdn.Rdn

```java
public Rdn(Attributes attrSet) throws InvalidNameException
```

Constructs an Rdn from the given attribute set. See
 `javax.naming.directory.Attributes Attributes`.
 

 The string attribute values are not interpreted as
 RFC 2253
 formatted RDN strings. That is, the values are used
 literally (not parsed) and assumed to be unescaped.

**参数**

- **attrSet** — The non-null and non-empty attributes containing type/value mappings.

**异常**

- **InvalidNameException** — If contents of `attrSet` cannot be used to construct a valid RDN.
