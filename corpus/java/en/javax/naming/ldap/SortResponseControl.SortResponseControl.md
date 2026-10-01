---
id: "java-en-function-sortresponsecontrol-sortresponsecontrol"
language: "java"
lang: "en"
category: "function"
name: "SortResponseControl.SortResponseControl"
signature: "public SortResponseControl(String id, boolean criticality, byte[] value) throws IOException"
title: "SortResponseControl.SortResponseControl"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/SortResponseControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortResponseControl.SortResponseControl

```java
public SortResponseControl(String id, boolean criticality, byte[] value) throws IOException
```

Constructs a control to indicate the outcome of a sort request.

**参数**

- **id** — The control's object identifier string.
- **criticality** — The control's criticality.
- **value** — The control's ASN.1 BER encoded value. It is not cloned - any changes to value will affect the contents of the control.

**异常**

- **IOException** — if an error is encountered while decoding the control's value.
