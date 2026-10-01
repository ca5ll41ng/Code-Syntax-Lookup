---
id: "java-en-function-java-util-spi-resourcebundlecontrolprovider"
language: "java"
lang: "en"
category: "function"
name: "java.util.spi.ResourceBundleControlProvider"
title: "ResourceBundleControlProvider"
directive: "type"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ResourceBundleControlProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundleControlProvider

An interface for service providers that provide implementations of `java.util.ResourceBundle.Control`. The default resource bundle loading
 behavior of the `ResourceBundle.getBundle` factory methods that take
 no `java.util.ResourceBundle.Control` instance can be modified with `ResourceBundleControlProvider` implementations.

 

Provider implementations are loaded from the application's class path
 using `java.util.ServiceLoader` at the first invocation of the
 `ResourceBundle.getBundle` factory method that takes no
 `java.util.ResourceBundle.Control` instance.

 

All `ResourceBundleControlProvider`s are ignored in named modules.

**参见**

- ResourceBundle#getBundle(String, java.util.Locale, ClassLoader, ResourceBundle.Control) ResourceBundle.getBundle
- java.util.ServiceLoader#load(Class)

> *Since 1.8*
