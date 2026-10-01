---
id: "java-en-function-pkcs12attribute-getvalue"
language: "java"
lang: "en"
category: "function"
name: "PKCS12Attribute.getValue"
signature: "public String getValue()"
title: "PKCS12Attribute.getValue"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PKCS12Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKCS12Attribute.getValue

```java
public String getValue()
```

Returns the attribute's ASN.1 DER-encoded value as a string.
 An ASN.1 DER-encoded value is returned in one of the following
 `String` formats:
 
 
-  the DER encoding of a basic ASN.1 type that has a natural
      string representation is returned as the string itself.
      Such types are currently limited to BOOLEAN, INTEGER,
      OBJECT IDENTIFIER, UTCTime, GeneralizedTime and the
      following six ASN.1 string types: UTF8String,
      PrintableString, T61String, IA5String, BMPString and
      GeneralString.
 
-  the DER encoding of any other ASN.1 type is not decoded but
      returned as a binary string of colon-separated pairs of
      hexadecimal digits.
 

 Multivalued attributes are represented as a comma-separated
 list of values, enclosed in square brackets. See
 `toString`.

**返回**

- the attribute value's string encoding
