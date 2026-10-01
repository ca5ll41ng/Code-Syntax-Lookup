---
id: "java-en-function-service-service"
language: "java"
lang: "en"
category: "function"
name: "Service.Service"
signature: "public Service(Provider provider, String type, String algorithm, String className, List<String> aliases, Map<String,String> attributes)"
title: "Service.Service"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Service.Service

```java
public Service(Provider provider, String type, String algorithm, String className, List<String> aliases, Map<String,String> attributes)
```

Construct a new service.

**参数**

- **provider** — the provider that offers this service
- **type** — the type of this service
- **algorithm** — the algorithm name
- **className** — the name of the class implementing this service
- **aliases** — List of aliases or `null` if algorithm has no aliases
- **attributes** — Map of attributes or `null` if this implementation has no attributes

**异常**

- **NullPointerException** — if provider, type, algorithm, or className is `null`
