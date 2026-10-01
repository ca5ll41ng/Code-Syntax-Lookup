---
id: "java-en-function-sniservername-sniservername"
language: "java"
lang: "en"
category: "function"
name: "SNIServerName.SNIServerName"
signature: "protected SNIServerName(int type, byte[] encoded)"
title: "SNIServerName.SNIServerName"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIServerName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIServerName.SNIServerName

```java
protected SNIServerName(int type, byte[] encoded)
```

Creates an `SNIServerName` using the specified name type and
 encoded value.
 

 Note that the `encoded` byte array is cloned to protect against
 subsequent modification.

**参数**

- **type** — the type of the server name
- **encoded** — the encoded value of the server name

**异常**

- **IllegalArgumentException** — if `type` is not in the range of 0 to 255, inclusive.
- **NullPointerException** — if `encoded` is null
