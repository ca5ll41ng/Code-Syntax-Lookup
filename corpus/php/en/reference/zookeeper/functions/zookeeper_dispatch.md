---
id: "en-php-function-function-zookeeper-dispatch"
language: "php"
lang: "en"
category: "function"
name: "zookeeper_dispatch"
title: "Calls callbacks for pending operations"
signature: "void zookeeper_dispatch()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/function.zookeeper-dispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calls callbacks for pending operations

## Description

```php
void zookeeper_dispatch()
```

The `zookeeper_dispatch()` function calls the callbacks passed by operations like `Zookeeper::get()` or `Zookeeper::exists()`.

> Since version 0.4.0, this function must be called manually to achieve asynchronous operations. If you want that to be done automatically, you also can declare ticks at the beginning of your program.

After PHP 7.1, you can ignore this function. This extension uses EG(vm_interrupt) to implement async dispatch.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

This method emits PHP warning when callback could not be invoked.

## Examples

**`zookeeper_dispatch()` example #1**

Dispatch callbacks manually.

```php


<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->get('/zookeeper', function() {
    echo "Callback was called".PHP_EOL;
});
while(true) {
    sleep(1);
    zookeeper_dispatch();
}
?>

   
```

**`zookeeper_dispatch()` example #2**

Declare ticks.

```php


<?php
declare(ticks=1);

$client = new Zookeeper();
$client->connect('localhost:2181');
$client->get('/zookeeper', function() {
    echo "Callback was called".PHP_EOL;
});
while(true) {
    sleep(1);
}
?>

   
```

## See Also

`Zookeeper::addAuth()` `Zookeeper::connect()` `Zookeeper::__construct()` `Zookeeper::exists()` `Zookeeper::get()` `Zookeeper::getChildren()` `Zookeeper::setWatcher()`
