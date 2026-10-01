---
id: "java-en-function-random-nextbytes"
language: "java"
lang: "en"
category: "function"
name: "Random.nextBytes"
signature: "public void nextBytes(byte[] bytes)"
title: "Random.nextBytes"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextBytes

```java
public void nextBytes(byte[] bytes)
```

Generates random bytes and places them into a user-supplied
 byte array.  The number of random bytes produced is equal to
 the length of the byte array.

 implemented by class `Random` as if by:
 
```
`public void nextBytes(byte[] bytes) {
   for (int i = 0; i < bytes.length; )
     for (int rnd = nextInt(), n = Math.min(bytes.length - i, 4);
          n-- > 0; rnd >>= 8)
       bytes[i++] = (byte)rnd;
 `}
```

**参数**

- **bytes** — the byte array to fill with random bytes

**异常**

- **NullPointerException** — if the byte array is null

> *Since 1.1*
