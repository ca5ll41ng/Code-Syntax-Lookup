---
id: "java-en-function-extendedrequest-getencodedvalue"
language: "java"
lang: "en"
category: "function"
name: "ExtendedRequest.getEncodedValue"
signature: "public byte[] getEncodedValue()"
title: "ExtendedRequest.getEncodedValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ExtendedRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedRequest.getEncodedValue

```java
public byte[] getEncodedValue()
```

Retrieves the ASN.1 BER encoded value of the LDAP extended operation
 request. Null is returned if the value is absent.

 The result is the raw BER bytes including the tag and length of
 the request value. It does not include the request OID.
 This method is called by the service provider to get the bits to
 put into the extended operation to be sent to the LDAP server.

**返回**

- A possibly null byte array representing the ASN.1 BER encoded contents of the LDAP `ExtendedRequest.requestValue` component.

**异常**

- **IllegalStateException** — If the encoded value cannot be retrieved because the request contains insufficient or invalid data/state.
