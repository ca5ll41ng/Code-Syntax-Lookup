---
id: "java-en-function-snihostname-createsnimatcher"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.createSNIMatcher"
signature: "public static SNIMatcher createSNIMatcher(String regex)"
title: "SNIHostName.createSNIMatcher"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.createSNIMatcher

```java
public static SNIMatcher createSNIMatcher(String regex)
```

Creates an `SNIMatcher` object for `SNIHostName`s.
 

 This method can be used by a server to verify the acceptable
 `SNIHostName`s.  For example,
 
```

     SNIMatcher matcher =
         SNIHostName.createSNIMatcher("www\\.example\\.com");
 
```

 will accept the hostname "www.example.com".
 
```

     SNIMatcher matcher =
         SNIHostName.createSNIMatcher("www\\.example\\.(com|org)");
 
```

 will accept hostnames "www.example.com" and "www.example.org".

**参数**

- **regex** — the `#sum regular expression pattern` representing the hostname(s) to match

**返回**

- a `SNIMatcher` object for `SNIHostName`s

**异常**

- **NullPointerException** — if `regex` is `null`
- **PatternSyntaxException** — if the regular expression's syntax is invalid
