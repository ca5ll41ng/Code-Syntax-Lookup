---
id: "java-en-function-keystorespi-engineprobe"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineProbe"
signature: "public boolean engineProbe(InputStream stream) throws IOException"
title: "KeyStoreSpi.engineProbe"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineProbe

```java
public boolean engineProbe(InputStream stream) throws IOException
```

Probes the specified input stream to determine whether it contains a
 keystore that is supported by this implementation, or not.

 This method returns `false` by default. Keystore implementations
 should override this method to peek at the data stream directly or
 to use other content detection mechanisms.

**参数**

- **stream** — the keystore data to be probed

**返回**

- `true` if the keystore data is supported, otherwise `false`

**异常**

- **IOException** — if there is an I/O problem with the keystore data.
- **NullPointerException** — if stream is `null`.

> *Since 9*
