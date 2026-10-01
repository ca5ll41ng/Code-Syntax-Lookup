---
id: "en-php-guide-class-parallel-future"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-future"
title: "The parallel\\Future class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-future.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Future class

parallel\Future

  Futures  A Future represents the return value or uncaught exception from a task, and exposes an API for cancellation.   
**Example showing Future as return value**

```php

<?php
$runtime = new \parallel\Runtime;
$future  = $runtime->run(function(){
    return "World";
});
printf("Hello %s\n", $future->value());
?>

      
```

The above example will output something similar to:

```text

Hello World

      
```

  The behaviour of a future also allows it to be used as a simple synchronization point even where the task does not return a value explicitly.   
**Example showing Future as synchronization point**

```php

<?php
$runtime = new \parallel\Runtime;
$future  = $runtime->run(function(){
    echo "in child ";
    for ($i = 0; $i < 500; $i++) {
        if ($i % 10 == 0) {
            echo ".";
        }
    }
    echo " leaving child";
});

$future->value();
echo "\nparent continues\n";
?>

      
```

The above example will output something similar to:

```text

in child .................................................. leaving child
parent continues

      
```

   Class Synopsis   `parallel\Future`    `final` `parallel\Future`    Resolution  State  Cancellation
