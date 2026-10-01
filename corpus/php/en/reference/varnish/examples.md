---
id: "en-php-guide-varnish-examples"
language: "php"
lang: "en"
category: "guide"
name: "varnish.examples"
title: "Examples"
module: "varnish"
source_url: "https://www.php.net/manual/en/varnish.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Basic VarnishAdmin usage

The example illustrates a simple usage of the ban functionality

**Ban an URL**

```php


<?php

$args = array(
    VARNISH_CONFIG_HOST    => "::1",
    VARNISH_CONFIG_PORT    => 6082,
    VARNISH_CONFIG_SECRET  => "5174826b-8595-4958-aa7a-0609632ad7ca",
    VARNISH_CONFIG_TIMEOUT => 300,
);

$va = new VarnishAdmin($args);

try {
    if(!$va->connect()) {
        throw new VarnishException("Connection failed\n");
    }   
} catch (VarnishException $e) {
    echo $e->getMessage();
    exit(3);
}

try {
    if(!$va->auth()) {
        throw new VarnishException("Auth failed\n");
    }   
} catch (VarnishException $e) {
    echo $e->getMessage();
    exit(3);
}

try {
    $status = $va->ban('req.url ~ "^/$"');
    if (VARNISH_STATUS_OK != $status) {
        throw new VarnishException("Ban method returned $status status\n");
    }
} catch (VarnishException $e) {
    echo $e->getMessage();
    exit(3);
}

exit(0);

?>

   
```

## Basic VarnishStat usage

The example illustrates getting varnish statistic snapshot from shared memory

**Get statistic snapshot**

```php


<?php

$vs = new VarnishStat;

try {
    $data = $vs->getSnapshot();
} catch (VarnishException $e) {
    echo $e->getMessage();
    exit(3);
}

exit(0);
?>

   
```

## Basic VarnishLog usage

The example illustrates reading varnish log lines from shared memory

**Read varnish shared memory log**

```php


<?php

$vl = new VarnishLog;
while(1) {
    $line = $vl->getLine();
    printf("%s %d %s", VarnishLog::getTagName($line['tag']), $line['id'],
    $line['data']);
}

exit(0);
?>

   
```
