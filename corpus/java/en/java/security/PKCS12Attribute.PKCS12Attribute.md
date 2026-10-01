---
id: "java-en-function-pkcs12attribute-pkcs12attribute"
language: "java"
lang: "en"
category: "function"
name: "PKCS12Attribute.PKCS12Attribute"
signature: "public PKCS12Attribute(String name, String value)"
title: "PKCS12Attribute.PKCS12Attribute"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PKCS12Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKCS12Attribute.PKCS12Attribute

```java
public PKCS12Attribute(String name, String value)
```

Constructs a PKCS12 attribute from its name and value.
 The name is an ASN.1 Object Identifier represented as a list of
 dot-separated integers.
 A string value is represented as the string itself.
 A binary value is represented as a string of colon-separated
 pairs of hexadecimal digits.
 Multivalued attributes are represented as a comma-separated
 list of values, enclosed in square brackets. See
 `toString`.
 

 A string value will be DER-encoded as an ASN.1 UTF8String and a
 binary value will be DER-encoded as an ASN.1 Octet String.

**参数**

- **name** — the attribute's identifier
- **value** — the attribute's value

**异常**

- **NullPointerException** — if `name` or `value` is `null`
- **IllegalArgumentException** — if `name` or `value` is incorrectly formatted
