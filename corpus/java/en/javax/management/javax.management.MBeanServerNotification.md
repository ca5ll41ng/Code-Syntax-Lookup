---
id: "java-en-function-javax-management-mbeanservernotification"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanServerNotification"
title: "MBeanServerNotification"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotification

Represents a notification emitted by the MBean Server through the MBeanServerDelegate MBean.
 The MBean Server emits the following types of notifications: MBean registration, MBean
 unregistration.
 

 To receive MBeanServerNotifications, you need to register a listener with
 the `MBeanServerDelegate MBeanServerDelegate` MBean
 that represents the MBeanServer. The ObjectName of the MBeanServerDelegate is
 `DELEGATE_NAME`, which is
 JMImplementation:type=MBeanServerDelegate.

 

The following code prints a message every time an MBean is registered
 or unregistered in the MBean Server `mbeanServer`:

 
```

 private static final NotificationListener printListener = new NotificationListener() {
     public void handleNotification(Notification n, Object handback) {
         if (!(n instanceof MBeanServerNotification)) {
             System.out.println("Ignored notification of class " + n.getClass().getName());
             return;
         }
         MBeanServerNotification mbsn = (MBeanServerNotification) n;
         String what;
         if (n.getType().equals(MBeanServerNotification.REGISTRATION_NOTIFICATION))
             what = "MBean registered";
         else if (n.getType().equals(MBeanServerNotification.UNREGISTRATION_NOTIFICATION))
             what = "MBean unregistered";
         else
             what = "Unknown type " + n.getType();
         System.out.println("Received MBean Server notification: " + what + ": " +
                 mbsn.getMBeanName());
     }
 };

 ...
     mbeanServer.addNotificationListener(
             MBeanServerDelegate.DELEGATE_NAME, printListener, null, null);
 
```

 
 An MBean which is not an `MBeanServerDelegate` may also emit
 MBeanServerNotifications. In particular, there is a convention for
 MBeans to emit an MBeanServerNotification for a group of MBeans.

 

An MBeanServerNotification emitted to denote the registration or
 unregistration of a group of MBeans has the following characteristics:
 
- Its `getType() notification type` is
     `"JMX.mbean.registered.group"` or
     `"JMX.mbean.unregistered.group"`, which can also be written `REGISTRATION_NOTIFICATION``+ ".group"` or
     `UNREGISTRATION_NOTIFICATION``+ ".group"`.
 
 
- Its `getMBeanName() MBean name` is an ObjectName pattern
     that selects the set (or a superset) of the MBeans being registered
     or unregistered
 
- Its `getUserData() user data` can optionally
     be set to an array of ObjectNames containing the names of all MBeans
     being registered or unregistered.
 

 

 MBeans which emit these group registration/unregistration notifications will
 declare them in their `getNotifications()
 MBeanNotificationInfo`.

> *Since 1.5*
