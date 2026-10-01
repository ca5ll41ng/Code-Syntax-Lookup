---
id: "java-en-function-extendedresponse-getencodedvalue"
language: "java"
lang: "en"
category: "function"
name: "ExtendedResponse.getEncodedValue"
signature: "public byte[] getEncodedValue()"
title: "ExtendedResponse.getEncodedValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedResponse.getEncodedValue

```java
public byte[] getEncodedValue()
```

Retrieves the ASN.1 BER encoded value of the LDAP extended operation
 response. Null is returned if the value is absent from the response
 sent by the LDAP server.
 The result is the raw BER bytes including the tag and length of
 the response value. It does not include the response OID.

**返回**

- A possibly null byte array representing the ASN.1 BER encoded contents of the LDAP `ExtendedResponse.response` component.
