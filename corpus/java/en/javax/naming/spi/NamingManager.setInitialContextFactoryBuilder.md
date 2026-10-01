---
id: "java-en-function-namingmanager-setinitialcontextfactorybuilder"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.setInitialContextFactoryBuilder"
signature: "public static synchronized void setInitialContextFactoryBuilder( InitialContextFactoryBuilder builder) throws NamingException"
title: "NamingManager.setInitialContextFactoryBuilder"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.setInitialContextFactoryBuilder

```java
public static synchronized void setInitialContextFactoryBuilder( InitialContextFactoryBuilder builder) throws NamingException
```

Sets the InitialContextFactory builder to be builder.

**参数**

- **builder** — The initial context factory builder to install. If null, no builder is set.

**异常**

- **NamingException** — builder cannot be installed for a non-security-related reason.
- **IllegalStateException** — If a builder was previous installed.

**参见**

- #hasInitialContextFactoryBuilder
