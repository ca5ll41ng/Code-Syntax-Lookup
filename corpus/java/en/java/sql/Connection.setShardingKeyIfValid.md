---
id: "java-en-function-connection-setshardingkeyifvalid"
language: "java"
lang: "en"
category: "function"
name: "Connection.setShardingKeyIfValid"
signature: "default boolean setShardingKeyIfValid(ShardingKey shardingKey, ShardingKey superShardingKey, int timeout) throws SQLException"
title: "Connection.setShardingKeyIfValid"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setShardingKeyIfValid

```java
default boolean setShardingKeyIfValid(ShardingKey shardingKey, ShardingKey superShardingKey, int timeout) throws SQLException
```

Sets and validates the sharding keys for this connection. A `null`
 value may be specified for the sharding Key. The validity
 of a `null` sharding key is vendor-specific. Consult your vendor's
 documentation for additional information.
 The default implementation will throw a
 `SQLFeatureNotSupportedException`.

 This method validates that the sharding keys are valid for the
 `Connection`. The timeout value indicates how long the driver
 should wait for the `Connection` to verify that the sharding key
 is valid before `setShardingKeyIfValid` returns false.

**参数**

- **shardingKey** — the sharding key to be validated against this connection. The sharding key may be `null`
- **superShardingKey** — the super sharding key to be validated against this connection. The super sharding key may be `null`.
- **timeout** — time in seconds before which the validation process is expected to be completed, otherwise the validation process is aborted. A value of 0 indicates the validation process will not time out.

**返回**

- true if the connection is valid and the sharding keys are valid and set on this connection; false if the sharding keys are not valid or the timeout period expires before the operation completes.

**异常**

- **SQLException** — if an error occurs while performing this validation; a `superShardingKey` is specified without a `shardingKey`; this method is called on a closed `connection`; or the `timeout` value is negative.
- **SQLFeatureNotSupportedException** — if the driver does not support sharding

**参见**

- ShardingKey
- ShardingKeyBuilder

> *Since 9*
