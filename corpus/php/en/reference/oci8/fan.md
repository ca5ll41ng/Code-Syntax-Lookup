---
id: "en-php-guide-oci8-fan"
language: "php"
lang: "en"
category: "guide"
name: "oci8.fan"
title: "OCI8 Fast Application Notification (FAN) Support"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.fan.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# OCI8 Fast Application Notification (FAN) Support

FAN support gives fast connection failover, an Oracle Database high availability feature. This allows PHP OCI8 scripts to be notified when a database machine or database instance becomes unavailable. Without FAN, OCI8 can hang until a TCP timeout occurs and an error is returned, which might be several minutes. Enabling FAN in OCI8 can allow applications to detect errors and re-connect to an available database instance without the web user being aware of an outage.

FAN support is available when the Oracle client libraries that PHP links with and the Oracle Database are either version 10gR2 or later.

FAN benefits users of Oracle's clustering technology (RAC) because connections to surviving database instances can be immediately made. Users of Oracle's Data Guard with a broker will see the FAN events generated when the standby database goes online. Standalone databases will send FAN events when the database restarts.

For active connections, when a machine or database instance becomes unavailable, a connection failure error will be returned by the OCI8 extension function currently being called. On a subsequent PHP script re-connect, a connection to a surviving database instance will be established. The OCI8 extension also transparently cleans up any idle connections affected by a database machine or instance failure so PHP connect calls will establish a fresh connection without the script being aware of any service disruption.

When oci8.events is `On`, it is suggested to set oci8.ping_interval to -1 to disable pinging, since enabling FAN events provide pro-active connection management of idle connections made invalid by a service disruption.

To enable FAN support in PHP OCI8, build PHP OCI8 with Oracle 10gR2 or later libraries and then follow these steps:

- As a privileged database administrator, use a program like SQL*Plus to enable the database service to post FAN events, for example: ```text SQL> execute dbms_service.modify_service( SERVICE_NAME => 'sales', AQ_HA_NOTIFICATIONS => TRUE); ```
- Edit php.ini and add ```text oci8.events = On ```
- If the application does not already handle OCI8 error conditions, modify it to detect failures and take appropriate action. This may include re-connecting and re-executing statements.
- Run the application, connecting to Oracle Database 10gR2 or later.
