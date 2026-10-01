---
id: "java-en-function-namingmanager-setobjectfactorybuilder"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.setObjectFactoryBuilder"
signature: "public static void setObjectFactoryBuilder( ObjectFactoryBuilder builder) throws NamingException"
title: "NamingManager.setObjectFactoryBuilder"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.setObjectFactoryBuilder

```java
public static void setObjectFactoryBuilder( ObjectFactoryBuilder builder) throws NamingException
```

The ObjectFactoryBuilder determines the policy used when
 trying to load object factories.
 See getObjectInstance() and class ObjectFactory for a description
 of the default policy.
 setObjectFactoryBuilder() overrides this default policy by installing
 an ObjectFactoryBuilder. Subsequent object factories will
 be loaded and created using the installed builder.

**参数**

- **builder** — The factory builder to install. If null, no builder is installed.

**异常**

- **NamingException** — builder cannot be installed for a non-security-related reason.
- **IllegalStateException** — If a factory has already been installed.

**参见**

- #getObjectInstance
- ObjectFactory
- ObjectFactoryBuilder
