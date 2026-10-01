---
id: "java-en-function-javax-management-persistentmbean"
language: "java"
lang: "en"
category: "function"
name: "javax.management.PersistentMBean"
title: "PersistentMBean"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/PersistentMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PersistentMBean

This class is the interface to be implemented by MBeans that are meant to be
  persistent.  MBeans supporting this interface should call the load method during
  construction in order to prime the MBean from the persistent store.
  In the case of a ModelMBean, the store method should be called by the MBeanServer based on the descriptors in
  the ModelMBean or by the MBean itself during normal processing of the ModelMBean.

> *Since 1.5*
