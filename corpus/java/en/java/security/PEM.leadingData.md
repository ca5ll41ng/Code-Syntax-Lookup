---
id: "java-en-function-pem-leadingdata"
language: "java"
lang: "en"
category: "function"
name: "PEM.leadingData"
signature: "public byte[] leadingData()"
title: "PEM.leadingData"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEM.leadingData

```java
public byte[] leadingData()
```

Returns the leading data that preceded the PEM header in the decoded
 input.

**返回**

- a newly-allocated byte array containing leading data, or `null` if no leading data is present
