---
id: "java-en-function-control-getencodedvalue"
language: "java"
lang: "en"
category: "function"
name: "Control.getEncodedValue"
signature: "public byte[] getEncodedValue()"
title: "Control.getEncodedValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Control.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.getEncodedValue

```java
public byte[] getEncodedValue()
```

Retrieves the ASN.1 BER encoded value of the LDAP control.
 The result is the raw BER bytes including the tag and length of
 the control's value. It does not include the controls OID or criticality.

 Null is returned if the value is absent.

**返回**

- A possibly null byte array representing the ASN.1 BER encoded value of the LDAP control.
