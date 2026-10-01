---
id: "java-en-function-pagedresultsresponsecontrol-pagedresultsresponsecontrol"
language: "java"
lang: "en"
category: "function"
name: "PagedResultsResponseControl.PagedResultsResponseControl"
signature: "public PagedResultsResponseControl(String id, boolean criticality, byte[] value) throws IOException"
title: "PagedResultsResponseControl.PagedResultsResponseControl"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/PagedResultsResponseControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PagedResultsResponseControl.PagedResultsResponseControl

```java
public PagedResultsResponseControl(String id, boolean criticality, byte[] value) throws IOException
```

Constructs a paged-results response control.

**参数**

- **id** — The control's object identifier string.
- **criticality** — The control's criticality.
- **value** — The control's ASN.1 BER encoded value. It is not cloned - any changes to value will affect the contents of the control.

**异常**

- **IOException** — If an error was encountered while decoding the control's value.
