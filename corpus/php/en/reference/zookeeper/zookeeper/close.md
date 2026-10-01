---
id: "en-php-function-zookeeper-close"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::close"
title: "Close the zookeeper handle and free up any resources"
signature: "public void Zookeeper::close()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the zookeeper handle and free up any resources

## Description

```php
public void Zookeeper::close()
```

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

This method emits `ZookeeperException` and its derivatives when closing an uninitialized instance.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `ZookeeperException`
