---
id: "java-en-function-javax-net-ssl-managerfactoryparameters"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.ManagerFactoryParameters"
title: "ManagerFactoryParameters"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ManagerFactoryParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ManagerFactoryParameters

This class is the base interface for providing
 algorithm-specific information to a KeyManagerFactory or
 TrustManagerFactory.
 

 In some cases, initialization parameters other than keystores
 may be needed by a provider.  Users of that particular provider
 are expected to pass an implementation of the appropriate
 sub-interface of this class as defined by the
 provider.  The provider can then call the specified methods in
 the ManagerFactoryParameters implementation to obtain the
 needed information.

> *Since 1.4*
