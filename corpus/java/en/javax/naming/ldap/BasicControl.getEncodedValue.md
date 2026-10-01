---
id: "java-en-function-basiccontrol-getencodedvalue"
language: "java"
lang: "en"
category: "function"
name: "BasicControl.getEncodedValue"
signature: "public byte[] getEncodedValue()"
title: "BasicControl.getEncodedValue"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/BasicControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicControl.getEncodedValue

```java
public byte[] getEncodedValue()
```

Retrieves the control's ASN.1 BER encoded value.
 The result includes the BER tag and length for the control's value but
 does not include the control's object identifier and criticality setting.

**返回**

- A possibly null byte array representing the control's ASN.1 BER encoded value. It is not cloned - any changes to the returned value will affect the contents of the control.
