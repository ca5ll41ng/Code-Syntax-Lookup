---
id: "java-en-function-domainloadstoreparameter-domainloadstoreparameter"
language: "java"
lang: "en"
category: "function"
name: "DomainLoadStoreParameter.DomainLoadStoreParameter"
signature: "public DomainLoadStoreParameter(URI configuration, Map<String,ProtectionParameter> protectionParams)"
title: "DomainLoadStoreParameter.DomainLoadStoreParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DomainLoadStoreParameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DomainLoadStoreParameter.DomainLoadStoreParameter

```java
public DomainLoadStoreParameter(URI configuration, Map<String,ProtectionParameter> protectionParams)
```

Constructs a `DomainLoadStoreParameter` for a keystore domain with
 the parameters used to protect keystore data.

**参数**

- **configuration** — identifier for the domain configuration data. The name of the target domain should be specified in the `java.net.URI` fragment component when it is necessary to distinguish between several domain configurations at the same location.
- **protectionParams** — the map from keystore name to the parameter used to protect keystore data. A `java.util.Collections.EMPTY_MAP` should be used when protection parameters are not required or when they have been specified by properties in the domain configuration data. It is cloned to prevent subsequent modification.

**异常**

- **NullPointerException** — if `configuration` or `protectionParams` is `null`
